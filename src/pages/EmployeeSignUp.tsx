import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Shield, User, Mail, Phone, MapPin, FileText, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmployeeSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    abilityType: "",
    skills: "",
    experience: "",
    preferredJobType: "",
    expectedSalary: "",
    certificate: null,
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Your application is being processed. You'll receive a verification email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Employee Registration</h1>
            <p className="text-lg text-gray-600">Join as a job seeker and find your dream opportunity</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <User className="h-6 w-6" />
                <div>
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                  <CardDescription className="text-purple-100">
                    Please provide your details for verification
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="abilityType">Ability Category *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, abilityType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your ability category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Abilities</SelectItem>
                        <SelectItem value="visual">Low Vision / Blind</SelectItem>
                        <SelectItem value="hearing">Hard of Hearing / Deaf</SelectItem>
                        <SelectItem value="mobility">Hand or Leg Disability / Physical Disability</SelectItem>
                        <SelectItem value="cognitive">Learning or Memory Difficulty</SelectItem>
                        <SelectItem value="multiple">Multiple Disabilities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  />
                </div>

                {/* Professional Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                    Professional Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="skills">Skills & Qualifications *</Label>
                      <Textarea
                        id="skills"
                        placeholder="List your skills, qualifications, and expertise"
                        value={formData.skills}
                        onChange={(e) => setFormData({...formData, skills: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                            <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                            <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                            <SelectItem value="senior">Senior (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="jobType">Preferred Job Type</Label>
                        <Select onValueChange={(value) => setFormData({...formData, preferredJobType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select job type preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="onsite">On-site</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expectedSalary">Expected Salary (Annual)</Label>
                      <Input
                        id="expectedSalary"
                        placeholder="e.g., 3,00,000 - 5,00,000"
                        value={formData.expectedSalary}
                        onChange={(e) => setFormData({...formData, expectedSalary: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Upload */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Government Verification Certificate *
                  </h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload your disability certificate</p>
                    <p className="text-sm text-gray-500 mb-4">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                    <Button type="button" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                      Choose File
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Certificate will be verified using ML + Cyber Security module
                  </p>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the <Link to="#" className="text-purple-600 hover:underline">Terms & Conditions</Link> and 
                    <Link to="#" className="text-purple-600 hover:underline"> Privacy Policy</Link>. 
                    I understand that my information will be verified for authenticity.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg"
                    disabled={!formData.agreeTerms}
                  >
                    Submit Registration
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Already have an account? 
                    <Link to="/login" className="text-purple-600 hover:underline ml-1">
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmployeeSignup;
