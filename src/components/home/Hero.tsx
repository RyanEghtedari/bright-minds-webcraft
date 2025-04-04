
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="container-padding max-w-7xl mx-auto relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black">
              Unlock Your Child's Academic Potential
            </h1>
            <p className="text-xl mb-8 text-black max-w-lg">
              Personalized tutoring that builds confidence, improves grades, and creates a lifelong love of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-6">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-black border-black hover:bg-white/20 font-semibold px-8 py-6">
                <Link to="/who-we-help">
                  Explore Who We Help
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl lg:translate-y-12 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Get In Touch</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Parent/Guardian Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                  <option value="" disabled selected>Student's Grade Level</option>
                  <option value="elementary">Elementary School</option>
                  <option value="middle">Middle School</option>
                  <option value="high">High School</option>
                  <option value="college">College</option>
                </select>
              </div>
              <div>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark">
                  Contact Us
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
