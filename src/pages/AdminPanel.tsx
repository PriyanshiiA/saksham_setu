import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building, 
  FileText, 
  Shield, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  XCircle,
  Search,
  Filter,
  Download,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for demonstration
  const stats = {
    totalUsers: 10547,
    totalEmployers: 523,
    pendingVerifications: 47,
    activeJobs: 1240,
    successfulPlacements: 892,
    monthlyGrowth: 15.8
  };

  // const pendingVerifications = [
  //   {
  //     id: 1,
  //     name: "Rajesh Kumar",
  //     type: "Employee",
  //     submitted: "2024-01-15",
  //     documents: "Disability Certificate",
  //     status: "pending"
  //   },
  //   {
  //     id: 2,
  //     name: "TechCorp Solutions",
  //     type: "Employer",
  //     submitted: "2024-01-14",
  //     documents: "Company Registration",
  //     status: "pending"
  //   },
  //   {
  //     id: 3,
  //     name: "Priya Sharma",
  //     type: "Employee",
  //     submitted: "2024-01-13",
  //     documents: "Medical Certificate",
  //     status: "under_review"
  //   }
  // ];

  const recentActivity = [
    { id: 1, action: "New user registration", user: "Amit Patel", time: "2 hours ago", type: "user" },
    { id: 2, action: "Job posted", user: "InfoTech Ltd", time: "4 hours ago", type: "job" },
    { id: 3, action: "Profile verified", user: "Sunita Devi", time: "6 hours ago", type: "verification" },
    { id: 4, action: "Application submitted", user: "Rahul Singh", time: "8 hours ago", type: "application" },
    { id: 5, action: "Company verified", user: "DataSoft Inc", time: "1 day ago", type: "verification" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage Saksham Setu platform and monitor activities</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Employers</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalEmployers}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-orange-600">{stats.pendingVerifications}</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Jobs</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeJobs}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Placements</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.successfulPlacements}</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Growth</p>
                    <p className="text-2xl font-bold text-green-600">+{stats.monthlyGrowth}%</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="verifications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="verifications">Verifications</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            {/* Verifications Tab */}
            <TabsContent value="verifications">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {/* <div className="lg:col-span-2">
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-orange-600" />
                            <span>Pending Verifications</span>
                          </CardTitle>
                          <CardDescription>
                            Review and approve user documents
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-600">
                          {stats.pendingVerifications} pending
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {pendingVerifications.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {item.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">Documents: {item.documents}</p>
                              <p className="text-xs text-gray-500">Submitted: {item.submitted}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="text-red-600 border-red-200">
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>*/}

                <div>
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-blue-600" />
                        <span>Recent Activity</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`p-1 rounded-full ${
                              activity.type === 'user' ? 'bg-blue-100' :
                              activity.type === 'job' ? 'bg-green-100' :
                              activity.type === 'verification' ? 'bg-orange-100' :
                              'bg-purple-100'
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                activity.type === 'user' ? 'bg-blue-600' :
                                activity.type === 'job' ? 'bg-green-600' :
                                activity.type === 'verification' ? 'bg-orange-600' :
                                'bg-purple-600'
                              }`}></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                              <p className="text-xs text-gray-600">{activity.user}</p>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>User Management</CardTitle>
                    <div className="flex space-x-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search users..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>User management interface will be implemented here</p>
                    <p className="text-sm">Features: View, edit, suspend, and manage user accounts</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Job Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Job management interface will be implemented here</p>
                    <p className="text-sm">Features: Approve jobs, manage listings, and monitor applications</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span>User Growth</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <PieChart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>User growth analytics chart</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span>Job Placements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Job placement trends chart</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Generate Reports</CardTitle>
                  <CardDescription>
                    Create detailed reports for various metrics and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <Users className="h-6 w-6" />
                      <span>User Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <Building className="h-6 w-6" />
                      <span>Employer Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <FileText className="h-6 w-6" />
                      <span>Job Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <TrendingUp className="h-6 w-6" />
                      <span>Analytics Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <Shield className="h-6 w-6" />
                      <span>Security Report</span>
                    </Button>
                    <Button variant="outline" className="h-24 flex flex-col space-y-2">
                      <Activity className="h-6 w-6" />
                      <span>Activity Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
