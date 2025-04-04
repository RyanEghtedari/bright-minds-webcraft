
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "One-on-One Tutoring",
      description: "Personalized sessions focused on individual academic needs with dedicated tutor support.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      link: "/services#one-on-one"
    },
    {
      title: "Group Study Programs",
      description: "Collaborative learning environments that foster peer interaction while focusing on subject mastery.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      link: "/services#group-study"
    },
    {
      title: "Test Preparation",
      description: "Strategic preparation for standardized tests including SAT, ACT, AP exams and more.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      link: "/services#test-prep"
    }
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-brand-blue">Tutoring</span> Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of academic support services to help students of all ages and abilities achieve their goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="aspect-w-3 aspect-h-2">
              <img 
                src={service.image} 
                alt={service.title} 
                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild className="bg-brand-blue hover:bg-brand-blue-dark">
          <Link to="/services">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Services;
