import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building, DollarSign, FileText, ExternalLink, Award, Heart, Target } from "lucide-react";

const GovSchemes = () => {
  const schemes = [
    {
      id: 1,
      title: "Accessible India Campaign (Sugamya Bharat Abhiyan)",
      category: "Infrastructure",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "A nationwide flagship campaign to achieve universal accessibility and create barrier-free environment for persons with disabilities.",
      benefits: [
        "Accessible physical environment",
        "Transportation system accessibility",
        "ICT accessibility"
      ],
      eligibility: "All persons with disabilities",
      status: "Active",
      website: "https://accessibleindia.gov.in",
      icon: Shield
    },
    {
      id: 2,
      title: "Deen Dayal Disabled Rehabilitation Scheme (DDRS)",
      category: "Rehabilitation",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "Provides financial assistance to NGOs for education, vocational training, and rehabilitation of persons with disabilities.",
      benefits: [
        "Educational support",
        "Vocational training",
        "Rehabilitation services",
        "Medical intervention"
      ],
      eligibility: "NGOs working for persons with disabilities",
      status: "Active",
      website: "https://disabilityaffairs.gov.in",
      icon: Users
    },
    {
      id: 3,
      title: "Incentive to Employers for Providing Employment",
      category: "Employment",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "Financial incentives to employers for hiring persons with disabilities and creating accessible workplaces.",
      benefits: [
        "Reimbursement of salary up to 3 years",
        "One-time grant for workplace modifications",
        "Tax benefits for employers"
      ],
      eligibility: "Employers hiring persons with disabilities",
      status: "Active",
      website: "https://disabilityaffairs.gov.in",
      icon: Building
    },
    {
      id: 4,
      title: "National Handicapped Finance and Development Corporation (NHFDC)",
      category: "Financial Support",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "Provides loans at concessional rates for self-employment and skill development of persons with disabilities.",
      benefits: [
        "Concessional loans up to ₹25 lakhs",
        "Lower interest rates (4-6%)",
        "Skill development programs",
        "Entrepreneurship support"
      ],
      eligibility: "Persons with disabilities with annual income up to ₹3 lakhs",
      status: "Active",
      website: "https://nhfdc.nic.in",
      icon: DollarSign
    },
    {
      id: 5,
      title: "Scholarship for Students with Disabilities",
      category: "Education",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "Financial assistance for education of students with disabilities from Class IX to PhD level.",
      benefits: [
        "Pre-matric scholarship: ₹225-750/month",
        "Post-matric scholarship: ₹230-1,200/month",
        "Top-class education support",
        "Maintenance allowance"
      ],
      eligibility: "Students with 40% or more disability",
      status: "Active",
      website: "https://scholarships.gov.in",
      icon: Award
    },
    {
      id: 6,
      title: "Unique Disability ID (UDID)",
      category: "Identification",
      ministry: "Ministry of Social Justice & Empowerment",
      description: "Single document for persons with disabilities to avail benefits of various government schemes.",
      benefits: [
        "Single disability certificate",
        "Digital accessibility",
        "Easy verification",
        "Streamlined benefit access"
      ],
      eligibility: "All persons with disabilities",
      status: "Active",
      website: "https://www.swavlambancard.gov.in",
      icon: FileText
    }
  ];

  const additionalBenefits = [
    {
      title: "Income Tax Benefits",
      description: "Deduction up to ₹1,25,000 under Section 80DD for maintenance of dependents with disability",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Railway Concessions",
      description: "Up to 75% concession in train fares for persons with disabilities and their escorts",
      icon: Users,
      color: "blue"
    },
    {
      title: "Air Travel Concessions",
      description: "Special fares and assistance for air travel by persons with disabilities",
      icon: Target,
      color: "purple"
    },
    {
      title: "Reserved Parking",
      description: "Designated parking spaces in public areas and commercial establishments",
      icon: Shield,
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Schemes & Benefits</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive information about government schemes, benefits, and support programs 
              available for persons with disabilities in India.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Active Schemes</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">2.7 Cr</div>
                <div className="text-gray-600">Beneficiaries</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">₹15,000 Cr</div>
                <div className="text-gray-600">Annual Budget</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">4%</div>
                <div className="text-gray-600">Job Reservation</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Schemes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Government Schemes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {schemes.map((scheme) => {
                const IconComponent = scheme.icon;
                return (
                  <Card key={scheme.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-full">
                          <IconComponent className="h-6 w-6 text-purple-600" />
                        </div>
                        <Badge 
                          variant={scheme.status === 'Active' ? 'default' : 'secondary'}
                          className={scheme.status === 'Active' ? 'bg-green-500' : ''}
                        >
                          {scheme.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900 leading-tight">
                        {scheme.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {scheme.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-gray-600">
                        {scheme.ministry}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {scheme.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {scheme.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Eligibility:</h4>
                        <p className="text-sm text-gray-700">{scheme.eligibility}</p>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                        asChild
                      >
                        <a href={scheme.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Official Website
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Benefits & Concessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const colorClasses = {
                  green: 'bg-green-100 text-green-600',
                  blue: 'bg-blue-100 text-blue-600',
                  purple: 'bg-purple-100 text-purple-600',
                  indigo: 'bg-indigo-100 text-indigo-600'
                };
                
                return (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className={`p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Rights Information */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-indigo-50 to-purple-50 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-4">
                Rights of Persons with Disabilities Act, 2016
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 max-w-4xl mx-auto">
                The comprehensive legislation that ensures equal opportunities, protection of rights, 
                and full participation of persons with disabilities.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">21 Disabilities Covered</h4>
                  <p className="text-gray-700 text-sm">Expanded definition including new disabilities</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">4% Job Reservation</h4>
                  <p className="text-gray-700 text-sm">In government establishments</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Equal Rights</h4>
                  <p className="text-gray-700 text-sm">Legal capacity and accessibility rights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Need Help with Schemes?</CardTitle>
              <CardDescription>
                Our team can help you understand and apply for relevant government schemes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scheme Helpline</h4>
                  <p className="text-gray-700 mb-4">1800-XXX-XXXX (Toll Free)</p>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                  <p className="text-gray-700">schemes@saksham-setu.gov.in</p>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                    Download Scheme Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GovSchemes;
