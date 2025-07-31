import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building, Search, Shield, Heart, Target, Award, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Saksham Setu
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Bridging Abilities with Opportunities
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              India's premier job portal dedicated to empowering specially abled individuals 
              by connecting them with inclusive employers and meaningful career opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/employee-signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Join as Job Seeker
              </Button>
            </Link>
            <Link to="/employer-signup">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Building className="mr-2 h-5 w-5" />
                Join as Employer
              </Button>
            </Link>
          </div>

          {/* Search Bar Preview */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-full shadow-lg p-4 flex items-center">
              <Search className="h-5 w-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search jobs by title, skills, or location..."
                className="flex-1 px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
                readOnly
              />
              <Link to="/find-jobs">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Find Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Saksham Setu?</h2>
            <p className="text-xl text-gray-600">Empowering careers through inclusive opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Verified Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ML-powered verification system ensures authentic government certificates for both employees and employers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Smart Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced filtering based on abilities, skills, job type, and location for perfect job matches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Inclusive Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Partnered with verified companies committed to creating inclusive and accessible workplaces.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="mx-auto bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-indigo-600">Gov Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to government schemes, benefits, and support programs for specially abled individuals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Making a Difference</h2>
            <p className="text-xl text-purple-100">Our impact in numbers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-purple-200">Job Seekers Registered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Verified Employers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-purple-200">Jobs Posted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-purple-200">Successful Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of individuals and employers creating an inclusive workforce together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-jobs">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg">
                <Search className="mr-2 h-5 w-5" />
                Explore Jobs Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
