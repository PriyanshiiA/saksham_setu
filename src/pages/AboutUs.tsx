import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Shield, Award, CheckCircle, Star, Lightbulb } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Saksham Setu</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between exceptional talent and inclusive opportunities. 
              We're India's premier platform dedicated to empowering specially abled individuals 
              through meaningful employment.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg border-0 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-purple-600">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To create an inclusive ecosystem where specially abled individuals can showcase their 
                  unique talents and abilities, connecting them with employers who value diversity and 
                  understand the immense potential of an inclusive workforce.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To build a society where disabilities are seen as differences, not limitations, 
                  and where every individual has equal access to meaningful employment opportunities 
                  that allow them to thrive and contribute to India's economic growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-600">Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Creating environments where everyone belongs and can contribute their best.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-600">Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enabling individuals to realize their full potential and achieve independence.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600">Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building reliable partnerships with verified employers and authentic candidates.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-indigo-600">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Maintaining high standards in service delivery and user experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardTitle className="text-xl text-gray-900">For Job Seekers</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Verified profile creation with government certificate validation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Smart job matching based on abilities and skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to inclusive employers and accessible workplaces</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Career guidance and skill development resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Information about government schemes and benefits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-xl text-gray-900">For Employers</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Access to a diverse pool of verified, skilled candidates</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Company verification and inclusive hiring certification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Guidance on creating accessible workplaces</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Tax benefits and incentives information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Support in compliance with disability inclusion laws</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technology & Security */}
          <div className="mb-16">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900 mb-4">Technology & Security</CardTitle>
                <CardDescription className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We leverage cutting-edge technology to ensure authenticity, security, and the best user experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">ML-Powered Verification</h4>
                    <p className="text-gray-700 mb-4">
                      Our advanced machine learning algorithms verify government certificates and company 
                      documents to ensure authenticity and prevent fraud.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">Cyber Security</h4>
                    <p className="text-gray-700 mb-4">
                      Multi-layered security protocols protect user data and maintain the integrity 
                      of our platform, ensuring safe and secure interactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">Smart Matching</h4>
                    <p className="text-gray-700 mb-4">
                      AI-driven job matching considers abilities, skills, preferences, and accessibility 
                      requirements to connect the right talent with the right opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">Accessibility First</h4>
                    <p className="text-gray-700 mb-4">
                      Our platform is designed with accessibility at its core, ensuring it's usable 
                      by individuals with various disabilities and assistive technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-purple-200">Lives Empowered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-purple-200">Successful Placements</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-200">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Built with Government Support</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-gray-800 text-lg leading-relaxed">
                Saksham Setu is developed in alignment with the <strong>Rights of Persons with Disabilities Act, 2016</strong> 
                and supports the Government of India's commitment to inclusive employment. We work closely with various 
                government departments and disability rights organizations to ensure our platform serves the community effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
