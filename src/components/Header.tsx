import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Building, Search, Info, Phone, Shield } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b-2 border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Saksham Setu
              </h1>
              <p className="text-xs text-gray-600">Empowering Abilities</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/find-jobs"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Find Jobs</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Link
              to="/gov-schemes"
              className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Gov Schemes</span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
                Login
              </Button>
            </Link>
            <div className="flex space-x-2">
              <Link to="/employee-signup">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Join as Employee
                </Button>
              </Link>
              <Link to="/employer-signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Join as Employer
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              to="/find-jobs"
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4" />
              <span>Find Jobs</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Link
              to="/gov-schemes"
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="h-4 w-4" />
              <span>Gov Schemes</span>
            </Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
                  Login
                </Button>
              </Link>
              <Link to="/employee-signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Join as Employee
                </Button>
              </Link>
              <Link to="/employer-signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Join as Employer
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
