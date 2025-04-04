
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-orange">Bright</span>{" "}
              <span className="text-brand-blue-light">Minds</span> Tutoring
            </h3>
            <p className="text-gray-300 mb-4">
              Supporting students through personalized tutoring and
              mentorship to help them achieve their academic goals.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-blue-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-blue-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-blue-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/who-we-help" className="text-gray-300 hover:text-brand-blue-light transition-colors">
                  Who We Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-blue-light shrink-0 mt-1" />
                <span className="text-gray-300">123 Education Ave, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-blue-light shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-blue-light shrink-0" />
                <span className="text-gray-300">info@brightmindstutoring.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Bright Minds Tutoring. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-blue-light">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand-blue-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
