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
  Send
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
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
      title: "Real-time Collaboration",
      description: "Engage in live discussions with instant messaging, video calls, and screen sharing capabilities.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and automated analysis of consultation patterns and outcomes.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our advanced algorithm connects you with the most relevant experts for your specific needs.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with international data protection standards.",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Active Consultants", value: "25K+", icon: Users },
    { label: "Successful Consultations", value: "150K+", icon: CheckCircle },
    { label: "Countries Served", value: "180+", icon: Globe },
    { label: "Satisfaction Rate", value: "99.2%", icon: ThumbsUp }
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

  const processSteps = [
    {
      step: "01",
      title: "Define Your Challenge",
      description: "Clearly articulate your problem or question to get the most relevant expert matches.",
      icon: Target
    },
    {
      step: "02", 
      title: "Connect with Experts",
      description: "Our AI matches you with verified professionals who have the exact expertise you need.",
      icon: Users
    },
    {
      step: "03",
      title: "Collaborate & Learn",
      description: "Engage in structured consultations with real-time collaboration tools and resources.",
      icon: MessageSquare
    },
    {
      step: "04",
      title: "Implement & Succeed",
      description: "Apply the insights and track your progress with our built-in project management tools.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delay"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              E-Consult
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" onClick={() => navigate('/auth')} className="hidden sm:flex">
              Sign In
            </Button>
            <Button 
              onClick={() => navigate('/auth')} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Trusted by 25,000+ professionals worldwide
            </Badge>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Consulting
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with world-class experts, leverage AI-powered insights, and solve your most complex challenges 
              through our revolutionary consultation platform.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')} 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/auth')}
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400">
              <Award className="w-4 h-4 mr-2" />
              Platform Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                E-Consult?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of professional consulting with cutting-edge technology and unmatched expertise.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8 text-center space-y-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 dark:to-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              How It
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Get started in minutes and connect with the right experts for your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto mt-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              What Our
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Users Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
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
      <section className="relative z-10 container mx-auto px-4 py-24">
        <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-16 text-center text-white relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Ready to Transform Your Professional Network?
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
                Join thousands of professionals who trust E-Consult for their most important decisions. 
                Start your journey today and unlock unlimited potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Get Started Free
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/auth')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Platform
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                E-Consult
              </span>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">
              © 2024 E-Consult. All rights reserved. Built with ❤️ for professionals worldwide.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
