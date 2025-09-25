import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Flex, Heading, Icon, SimpleGrid, Stack, Text, useColorModeValue, Badge, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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

  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const subtleBg = useColorModeValue('brand.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.900');
  const mutedText = useColorModeValue('gray.600', 'gray.300');
  const headingGrad = useColorModeValue('linear(to-r, brand.600, accent.500)', 'linear(to-r, brand.400, accent.300)');

  return (
    <Box minH="100vh" bg={subtleBg} position="relative" overflow="hidden">
      {/* Header */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex py={6} align="center" justify="space-between">
          <Flex align="center" gap={3}>
            <Flex boxSize={8} bg="brand.600" color="white" rounded="lg" align="center" justify="center">
              <Icon as={MessageSquare} boxSize={5} />
            </Flex>
            <Text fontSize="xl" fontWeight="semibold">E-Consult</Text>
          </Flex>
          <Flex align="center" gap={3}>
            <ThemeToggle />
            <Button variant="ghost" onClick={() => navigate('/auth')}>Sign In</Button>
            <Button colorScheme="brand" onClick={() => navigate('/auth')}>Get Started</Button>
          </Flex>
        </Flex>
      </Container>

      {/* Hero */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack py={{ base: 16, md: 24 }} textAlign="center" align="center" spacing={8}>
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge px={3} py={1.5} rounded="full" colorScheme="accent">
              <Flex align="center" gap={2}>
                <Icon as={Sparkles} boxSize={4} />
                <Text fontWeight="medium">
                  {isLoading ? 'Loading...' : `Trusted by ${userCount.toLocaleString()}+ professionals`}
                </Text>
              </Flex>
            </Badge>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Heading size="3xl" bgGradient={headingGrad} bgClip="text">
              Connect. Consult. Collaborate.
            </Heading>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={mutedText} maxW="3xl">
              Join the platform for professional consultations. Get expert advice, share knowledge, and make informed decisions together.
            </Text>
          </MotionBox>

          <MotionFlex initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} gap={4} wrap="wrap" justify="center">
            <Button size="lg" colorScheme="brand" onClick={() => navigate('/auth')}>
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/auth')}>
              Watch Demo
            </Button>
          </MotionFlex>

          {/* Stats */}
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} w="full">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} maxW="2xl" mx="auto">
              {stats.map((stat, i) => (
                <Stack key={i} align="center" p={4} bg={cardBg} rounded="xl" borderWidth="1px">
                  <Flex boxSize={12} bg="brand.50" _dark={{ bg: 'whiteAlpha.100', color: 'accent.300' }} color="brand.600" rounded="xl" align="center" justify="center">
                    <Icon as={stat.icon} boxSize={6} />
                  </Flex>
                  <Heading size="lg" color="brand.600" _dark={{ color: 'accent.300' }}>{stat.value}</Heading>
                  <Text color={mutedText} fontSize="sm">{stat.label}</Text>
                </Stack>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Stack>
      </Container>

      {/* Features */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack py={{ base: 16, md: 20 }} spacing={10}>
          <Stack textAlign="center" spacing={4}>
            <Heading>Why choose <chakra.span color="brand.600" _dark={{ color: 'accent.300' }}>E-Consult</chakra.span>?</Heading>
            <Text color={mutedText} fontSize={{ base: 'md', md: 'lg' }}>Experience the future of professional consultations with our platform</Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {features.map((f, i) => (
              <MotionBox key={i} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Stack p={8} spacing={6} bg={cardBg} rounded="xl" borderWidth="1px" align="center">
                  <Flex boxSize={16} rounded="2xl" bg="brand.50" _dark={{ bg: 'whiteAlpha.100' }} align="center" justify="center">
                    <Icon as={f.icon} boxSize={8} color="brand.600" _dark={{ color: 'accent.300' }} />
                  </Flex>
                  <Heading size="md">{f.title}</Heading>
                  <Text color={mutedText} textAlign="center">{f.description}</Text>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* CTA */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Stack p={{ base: 8, md: 12 }} bg={cardBg} rounded="2xl" borderWidth="1px" align="center" spacing={6}>
            <Heading>Ready to transform your professional network?</Heading>
            <Text color={mutedText} maxW="2xl" textAlign="center">Join thousands of professionals who trust E-Consult for their most important decisions.</Text>
            <Flex gap={4} wrap="wrap" justify="center">
              <Button size="lg" colorScheme="brand" onClick={() => navigate('/auth')}>Get Started Free</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </Flex>
          </Stack>
        </MotionBox>
      </Container>

      {/* Footer */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex py={12} mt={8} borderTopWidth="1px" align="center" justify="space-between" direction={{ base: 'column', md: 'row' }} gap={4}>
          <Flex align="center" gap={3}>
            <Flex boxSize={8} bg="brand.600" color="white" rounded="lg" align="center" justify="center">
              <Icon as={MessageSquare} boxSize={5} />
            </Flex>
            <Text fontSize="xl" fontWeight="semibold">E-Consult</Text>
          </Flex>
          <Text fontSize="sm" color={mutedText}>© 2024 E-Consult. All rights reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;