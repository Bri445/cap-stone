import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  Star,
  CheckCircle,
  Zap,
  Globe,
  Heart,
  Sparkles,
  Play,
  Award,
  TrendingUp,
  Clock,
  Target,
  Brain,
  Rocket,
  ChevronRight,
  Quote,
  ThumbsUp,
  Eye,
  Send,
  UserPlus
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useUserCount } from '@/hooks/useUserCount';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { userCount, isLoading } = useUserCount();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/feed');
    }
    setIsVisible(true);
  }, [user, navigate]);

  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Discussions",
      description: "Engage in live conversations with instant updates and notifications.",
      color: "text-primary",
      bgColor: "bg-muted"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with professionals and experts across various domains.",
      color: "text-primary",
      bgColor: "bg-muted"
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Get insights from sentiment analysis and engagement metrics.",
      color: "text-primary",
      bgColor: "bg-muted"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your consultations are protected with enterprise-grade security.",
      color: "text-primary",
      bgColor: "bg-muted"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Consultations", value: "50K+", icon: MessageSquare },
    { label: "Expert Hours", value: "100K+", icon: Clock },
    { label: "Success Rate", value: "98%", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Lead at Google",
      content: "E-Consult transformed how I approach complex technical challenges. The quality of insights I get is unmatched.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Healthcare Consultant",
      content: "The platform's ability to connect me with the right specialists has revolutionized my practice.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      content: "From business strategy to technical implementation, E-Consult has been my secret weapon for growth.",
      avatar: "AT",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Minimal Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-smooth hover:scale-105">
            <MessageSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold">E-Consult</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => navigate('/auth')} className="transition-smooth">
            Sign In
          </Button>
          <Button onClick={() => navigate('/auth')} className="transition-smooth hover:scale-105">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium transition-smooth">
              <Sparkles className="w-4 h-4 mr-2" />
              {isLoading ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
                  Loading...
                </span>
              ) : (
                `Trusted by ${userCount.toLocaleString()}+ professionals`
              )}
            </Badge>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="h1 mb-8 text-gradient animate-fade-in-up">
              Connect. Consult. Collaborate.
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up">
              Join the world's most trusted platform for professional consultations. 
              Get expert advice, share knowledge, and make informed decisions together.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')} 
              className="px-8 py-4 text-lg font-medium transition-smooth hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/auth')}
              className="px-8 py-4 text-lg font-medium transition-smooth hover:scale-105"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-small text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="h2 mb-6">
              Why Choose <span className="text-primary">E-Consult</span>?
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Experience the future of professional consultations with our cutting-edge platform
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-interactive group"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="h5 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="h2 mb-6">
            What Our <span className="text-primary">Users Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elevated group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-small text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <Card className="bg-muted border-0">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="h2 mb-6">
                Ready to Transform Your Professional Network?
              </h2>
              <p className="text-large text-muted-foreground mb-8">
                Join thousands of professionals who trust E-Consult for their most important decisions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="px-8 py-4 text-lg font-medium transition-smooth hover:scale-105 group"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg font-medium transition-smooth hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">E-Consult</span>
            </div>
            <div className="text-small text-muted-foreground">
              © 2024 E-Consult. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;