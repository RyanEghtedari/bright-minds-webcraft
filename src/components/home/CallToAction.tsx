
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding">
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"
        ></div>
        
        <div className="relative p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Child's Academic Future?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join the hundreds of students who have achieved academic success with our personalized tutoring programs.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">
                Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" /> Call Us Today
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-blue-200">
            No commitment required. Find out how we can help your child succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
