import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Saksham Setu</h3>
                <p className="text-sm text-gray-400">Empowering Abilities</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting specially abled individuals with inclusive employers to create
              meaningful career opportunities and build an accessible workforce.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@saksham-setu.gov.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/find-jobs" className="block text-gray-300 hover:text-white transition-colors">
                Find Jobs
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/gov-schemes" className="block text-gray-300 hover:text-white transition-colors">
                Government Schemes
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Users</h4>
            <div className="space-y-2">
              <Link to="/employee-signup" className="block text-gray-300 hover:text-white transition-colors">
                Employee Registration
              </Link>
              <Link to="/employer-signup" className="block text-gray-300 hover:text-white transition-colors">
                Employer Registration
              </Link>
              <Link to="/login" className="block text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/admin" className="block text-gray-300 hover:text-white transition-colors">
                Admin Panel
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Saksham Setu - Government of India Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
