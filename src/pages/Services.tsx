
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, MapPin, Users, Monitor, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const subjects = [
    { name: "Mathematics 1-3", icon: "📐" },
    { name: "Physics", icon: "⚛️" },
    { name: "Biology", icon: "🧬" },
    { name: "Chemistry", icon: "🧪" },
    { name: "SAT Preparation", icon: "📝" },
    { name: "Python Programming", icon: "🐍" },
    { name: "Web Development", icon: "💻" }
  ];

  const tutorServices = [
    {
      id: "one-on-one",
      title: "One-on-One Tutoring",
      description: "Personalized attention focused on your specific academic needs with a dedicated tutor.",
      features: [
        "Customized learning plans tailored to your goals",
        "Flexible scheduling to fit your calendar",
        "Regular progress assessments and feedback",
        "Focus on building confidence and independence"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80"
    },
    {
      id: "group-study",
      title: "Group Study Programs",
      description: "Collaborative learning environments that foster peer interaction while focusing on subject mastery.",
      features: [
        "Small groups of 3-5 students for optimal interaction",
        "Cost-effective alternative to one-on-one tutoring",
        "Peer learning enhances retention and understanding",
        "Develop teamwork and communication skills"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
      id: "test-prep",
      title: "Test Preparation",
      description: "Strategic preparation for standardized tests including SAT, ACT, AP exams and more.",
      features: [
        "Comprehensive review of test content and format",
        "Practice with actual test questions and timing",
        "Strategies for managing test anxiety",
        "Progress tracking with practice exams"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative bg-brand-blue py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark to-transparent opacity-90"></div>
          <div className="section-padding relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Tutoring Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Personalized academic support designed to help students achieve their full potential through 
              customized learning experiences.
            </p>
          </div>
        </div>

        {/* Delivery Methods Section */}
        <div className="section-padding bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">How We Deliver Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <Monitor className="h-16 w-16 text-brand-blue mb-4" />
              <h3 className="text-2xl font-bold mb-3">Online Tutoring</h3>
              <p className="text-gray-600 mb-4">
                Connect with our expert tutors from anywhere with our interactive online platform. 
                Benefit from the same personalized attention and quality instruction as in-person sessions.
              </p>
              <ul className="text-left w-full space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Interactive whiteboard and screen sharing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Flexible scheduling across time zones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Recorded sessions for later review</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <MapPin className="h-16 w-16 text-brand-blue mb-4" />
              <h3 className="text-2xl font-bold mb-3">In-Person Tutoring</h3>
              <p className="text-gray-600 mb-4">
                Available throughout the San Diego area, our in-person tutoring provides 
                face-to-face instruction in a comfortable learning environment.
              </p>
              <ul className="text-left w-full space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Sessions at your home or local libraries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Serving all San Diego neighborhoods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Flexible scheduling including evenings and weekends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Tutoring Options */}
        <div className="section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tutoring Options</h2>
          
          <Tabs defaultValue="one-on-one" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {tutorServices.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tutorServices.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-md object-cover w-full h-64"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <h4 className="font-semibold text-lg mb-2">Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                      Learn More
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Subjects We Cover */}
        <div className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Subjects We Cover</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our expert tutors are specialized in a wide range of academic subjects 
              to support students at all levels.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="font-semibold">{subject.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduling Information */}
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Flexible Scheduling</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex items-center">
                <Clock className="h-10 w-10 text-brand-blue mr-3" />
                <span className="text-lg">Weekday & Weekend Sessions</span>
              </div>
              <div className="flex items-center">
                <Users className="h-10 w-10 text-brand-blue mr-3" />
                <span className="text-lg">Individual & Group Options</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-10 w-10 text-brand-blue mr-3" />
                <span className="text-lg">All Academic Levels</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark mt-4">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
