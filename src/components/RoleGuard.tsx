import { ReactNode } from 'react';
import { useRole } from '@/hooks/useRole';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RoleGuardProps {
  children: ReactNode;
  requiredRole?: 'consultant' | 'admin';
  requireApproval?: boolean;
  fallback?: ReactNode;
}

export function RoleGuard({ 
  children, 
  requiredRole = 'consultant', 
  requireApproval = true,
  fallback 
}: RoleGuardProps) {
  const { profile, loading, isConsultant, isAdmin, isApproved, canCreateConsultation } = useRole();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  // Check if user has the required role
  const hasRequiredRole = requiredRole === 'admin' ? isAdmin : isConsultant;
  
  // Check if user is approved (if approval is required)
  const isApprovedForAction = requireApproval ? isApproved : true;

  if (!hasRequiredRole) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Access Restricted</CardTitle>
            <CardDescription>
              You need to be a consultant to access this feature.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              To create consultations, you need to apply for consultant status. 
              Contact an administrator to get started.
            </p>
            <div className="flex flex-col space-y-2">
              <Button onClick={() => navigate('/feed')} className="w-full">
                Go to Feed
              </Button>
              <Button variant="outline" onClick={() => navigate('/profile')} className="w-full">
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isApprovedForAction) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
            <CardTitle className="text-2xl">Approval Pending</CardTitle>
            <CardDescription>
              Your consultant application is being reviewed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Your consultant status is pending approval. You'll be able to create consultations 
              once an administrator approves your application.
            </p>
            <div className="flex flex-col space-y-2">
              <Button onClick={() => navigate('/feed')} className="w-full">
                Go to Feed
              </Button>
              <Button variant="outline" onClick={() => navigate('/profile')} className="w-full">
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
} 