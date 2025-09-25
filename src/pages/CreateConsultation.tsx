import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RoleGuard } from '@/components/RoleGuard';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Tag, FileText, ArrowLeft } from 'lucide-react';

const createConsultationSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.string().min(1, 'Please select a category'),
  expiresAt: z.string().min(1, 'Please select an expiration date'),
});

type CreateConsultationForm = z.infer<typeof createConsultationSchema>;

const CreateConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<CreateConsultationForm>({
    resolver: zodResolver(createConsultationSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      expiresAt: '',
    },
  });

  const categories = [
    'Technology',
    'Business',
    'Healthcare',
    'Education',
    'Finance',
    'Legal',
    'Marketing',
    'Design',
    'Engineering',
    'Other'
  ];

  const expirationOptions = [
    { label: '1 Day', value: '1' },
    { label: '3 Days', value: '3' },
    { label: '1 Week', value: '7' },
    { label: '2 Weeks', value: '14' },
    { label: '1 Month', value: '30' },
  ];

  const onSubmit = async (data: CreateConsultationForm) => {
    if (!user) return;

    setIsSubmitting(true);
    try {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + parseInt(data.expiresAt));

      const { error } = await supabase
        .from('consultations')
        .insert({
          title: data.title,
          description: data.description,
          category: data.category,
          expires_at: expiresAt.toISOString(),
          user_id: user.id,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Consultation Created!",
        description: "Your consultation has been successfully created and is now live.",
      });

      navigate('/feed');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RoleGuard requiredRole="consultant" requireApproval={true}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/feed')}
            className="mb-4 hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Feed
          </Button>
          <h1 className="text-3xl font-bold">Create New Consultation</h1>
          <p className="text-muted-foreground mt-2">
            Share your expertise and help others with their challenges.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Consultation Details</span>
            </CardTitle>
            <CardDescription>
              Fill in the details for your consultation. Be specific to attract the right participants.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter a compelling title for your consultation" 
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe what you'll be consulting on, what participants can expect, and any prerequisites..."
                          {...field}
                          className="min-h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Tag className="w-4 h-4" />
                          <span>Category</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expiresAt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Duration</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {expirationOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 h-12 text-lg font-semibold group hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? 'Creating...' : 'Create Consultation'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/feed')}
                    className="flex-1 h-12 hover:scale-105 transition-transform"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </RoleGuard>
  );
};

export default CreateConsultation;