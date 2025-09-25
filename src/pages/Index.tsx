import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, BarChart3, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/feed');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            E-Consultation Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect, consult, and collaborate with experts and peers. Share your challenges,
            get insights, and make informed decisions together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/auth')} className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/auth')}>
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose E-Consult?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <MessageSquare className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Real-time Discussions</h3>
            <p className="text-muted-foreground">
              Engage in live conversations with instant updates and notifications.
            </p>
          </div>
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <Users className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Expert Community</h3>
            <p className="text-muted-foreground">
              Connect with professionals and experts across various domains.
            </p>
          </div>
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <BarChart3 className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Smart Analytics</h3>
            <p className="text-muted-foreground">
              Get insights from sentiment analysis and engagement metrics.
            </p>
          </div>
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <Shield className="w-12 h-12 mx-auto text-primary" />
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your consultations are protected with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
