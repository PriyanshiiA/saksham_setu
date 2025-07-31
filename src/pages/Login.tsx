import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LogIn, Users, Building, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: `Welcome back! Redirecting to your ${userType} dashboard.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h1>
            <p className="text-lg text-gray-600">Sign in to your Saksham Setu account</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center justify-center space-x-2">
                <LogIn className="h-6 w-6" />
                <CardTitle className="text-xl">Login</CardTitle>
              </div>
              <CardDescription className="text-indigo-100 text-center">
                Access your account to continue
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-2">
                  <Label htmlFor="userType">I am a *</Label>
                  <Select onValueChange={setUserType} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span>Job Seeker / Employee</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="employer">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-blue-600" />
                          <span>Employer / Company</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10 h-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link to="#" className="text-sm text-indigo-600 hover:underline">
                    Forgot your password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg h-12"
                  disabled={!userType || !email || !password}
                >
                  Sign In
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>

                {/* Registration Links */}
                <div className="space-y-3">
                  <p className="text-center text-gray-600">Don't have an account?</p>
                  <div className="grid grid-cols-1 gap-3">
                    <Link to="/employee-signup">
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 h-12"
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Register as Job Seeker
                      </Button>
                    </Link>
                    <Link to="/employer-signup">
                      <Button 
                        variant="outline" 
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 h-12"
                      >
                        <Building className="mr-2 h-4 w-4" />
                        Register as Employer
                      </Button>
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800 text-center">
              🔒 Your account is protected with ML-powered security verification
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
