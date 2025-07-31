import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, MapPin, Clock, DollarSign, Building, Users, Filter, Heart, Bookmark } from "lucide-react";

const FindJobs = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    ability: "",
    jobType: "",
    workType: "",
    location: "",
    salaryRange: ""
  });

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      workType: "Remote",
      salary: "₹4,00,000 - ₹7,00,000",
      abilities: ["Visual Impairment", "Mobility Impairment"],
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 days ago",
      saved: false
    },
    {
      id: 2,
      title: "Customer Support Specialist",
      company: "ServiceFirst Inc",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      workType: "Hybrid",
      salary: "₹2,50,000 - ₹4,00,000",
      abilities: ["Hearing Impairment", "Mobility Impairment"],
      skills: ["Communication", "Problem Solving", "CRM"],
      posted: "3 days ago",
      saved: true
    },
    {
      id: 3,
      title: "Data Entry Operator",
      company: "DataTech Services",
      location: "Delhi, NCR",
      type: "Part-time",
      workType: "On-site",
      salary: "₹1,80,000 - ₹2,50,000",
      abilities: ["Visual Impairment", "Cognitive Impairment"],
      skills: ["Typing", "MS Office", "Attention to Detail"],
      posted: "1 week ago",
      saved: false
    },
    {
      id: 4,
      title: "Content Writer",
      company: "Creative Media Hub",
      location: "Pune, Maharashtra",
      type: "Full-time",
      workType: "Remote",
      salary: "₹3,00,000 - ₹5,00,000",
      abilities: ["Mobility Impairment", "Multiple Disabilities"],
      skills: ["Writing", "SEO", "Content Strategy"],
      posted: "4 days ago",
      saved: false
    }
  ];

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Job</h1>
            <p className="text-lg text-gray-600">Discover opportunities tailored for your abilities</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Job Search & Filters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Main Search */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search by job title, skills, or company..."
                      value={filters.keyword}
                      onChange={(e) => setFilters({...filters, keyword: e.target.value})}
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-8"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                  </Button>
                </div>

                {/* Advanced Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label>Ability Category</Label>
                    <Select onValueChange={(value) => setFilters({...filters, ability: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Abilities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Abilities</SelectItem>
                        <SelectItem value="visual">Visual Impairment</SelectItem>
                        <SelectItem value="hearing">Hearing Impairment</SelectItem>
                        <SelectItem value="mobility">Mobility Impairment</SelectItem>
                        <SelectItem value="cognitive">Cognitive Impairment</SelectItem>
                        <SelectItem value="multiple">Multiple Disabilities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Job Type</Label>
                    <Select onValueChange={(value) => setFilters({...filters, jobType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Work Type</Label>
                    <Select onValueChange={(value) => setFilters({...filters, workType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Work Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Work Types</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input
                      placeholder="City, State"
                      value={filters.location}
                      onChange={(e) => setFilters({...filters, location: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Salary Range</Label>
                    <Select onValueChange={(value) => setFilters({...filters, salaryRange: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Salary" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Salary</SelectItem>
                        <SelectItem value="0-2">₹0 - ₹2 Lakhs</SelectItem>
                        <SelectItem value="2-4">₹2 - ₹4 Lakhs</SelectItem>
                        <SelectItem value="4-6">₹4 - ₹6 Lakhs</SelectItem>
                        <SelectItem value="6-10">₹6 - ₹10 Lakhs</SelectItem>
                        <SelectItem value="10+">₹10+ Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Available Jobs</h2>
              <p className="text-gray-600">{jobs.length} jobs found</p>
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                <SelectItem value="relevance">Most Relevant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type} • {job.workType}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant={job.saved ? "default" : "outline"}
                        size="sm"
                        className={job.saved ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        <Heart className={`h-4 w-4 ${job.saved ? "fill-current" : ""}`} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-700">Suitable for:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.abilities.map((ability, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-700">Required Skills:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                    <div className="space-x-3">
                      <Button variant="outline">
                        View Details
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8 py-3">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindJobs;
