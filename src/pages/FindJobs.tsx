import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; //  Import to read URL query
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, DollarSign, Building, Heart, Bookmark } from "lucide-react";

const FindJobs = () => {
  const location = useLocation(); // Get current URL
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || ""; //  Extract query from URL

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCorp Solutions", location: "Mumbai, Maharashtra", type: "fulltime", workType: "remote", salary: 400000, posted: "2 days ago", favorite: false, saved: false },
    { id: 2, title: "Customer Support Specialist", company: "ServiceFirst Inc", location: "Bangalore, Karnataka", type: "fulltime", workType: "hybrid", salary: 250000, posted: "3 days ago", favorite: true, saved: false },
    { id: 3, title: "Backend Engineer", company: "CodeWorks Ltd", location: "Delhi, India", type: "parttime", workType: "onsite", salary: 500000, posted: "1 week ago", favorite: false, saved: true },
    { id: 4, title: "UI/UX Designer", company: "PixelPerfect Studios", location: "Pune, Maharashtra", type: "fulltime", workType: "remote", salary: 350000, posted: "5 days ago", favorite: false, saved: false }
  ]);

  const [viewMode, setViewMode] = useState("all"); 
  const [selectedJob, setSelectedJob] = useState(null); 
  const [applyingJob, setApplyingJob] = useState(null);

  //  Filter state now initialized with URL query
  const [filters, setFilters] = useState({
    ability: "all",
    jobType: "all",
    workType: "all",
    location: "",
    salaryRange: "any",
    search: initialQuery,
  });

  useEffect(() => {
    // ✅ Whenever URL query changes, update search
    setFilters((prev) => ({ ...prev, search: initialQuery }));
  }, [initialQuery]);

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFavorite = (id) => {
    setJobs((prev) => prev.map((job) => job.id === id ? { ...job, favorite: !job.favorite } : job));
  };

  const toggleSaved = (id) => {
    setJobs((prev) => prev.map((job) => job.id === id ? { ...job, saved: !job.saved } : job));
  };

  const handleApplyClick = (job) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }
    setApplyingJob(job);
  };

  //  Filtering Logic
  const filteredJobs = jobs.filter((job) => {
    if (viewMode === "favorites" && !job.favorite) return false;
    if (viewMode === "saved" && !job.saved) return false;

    if (filters.search.trim() !== "") {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm);

      if (!matchesSearch) return false;
    }

    if (filters.jobType !== "all" && job.type !== filters.jobType) return false;
    if (filters.workType !== "all" && job.workType !== filters.workType) return false;

    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    if (filters.salaryRange !== "any") {
      if (filters.salaryRange.includes("+")) {
        const min = parseInt(filters.salaryRange.replace("+", ""));
        if (job.salary < min) return false;
      } else {
        const [min, max] = filters.salaryRange.split("-").map(Number);
        if (job.salary < min || job.salary > max) return false;
      }
    }

    return true;
  });

  //  Job Details View
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <Button variant="outline" onClick={() => setSelectedJob(null)}>⬅ Back</Button>
          <h1 className="text-3xl font-bold mt-4">{selectedJob.title}</h1>
          <p className="text-lg text-gray-600">{selectedJob.company}</p>
          <div className="mt-2 text-gray-500">
            📍 {selectedJob.location} | 💼 {selectedJob.type} • {selectedJob.workType} | 💰 ₹{selectedJob.salary.toLocaleString()}
          </div>
          <p className="mt-6">Here you can put full job description and details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  //  Application Form
  if (applyingJob) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <Button variant="outline" onClick={() => setApplyingJob(null)}>⬅ Back</Button>
          <h1 className="text-2xl font-bold mt-4">Apply for {applyingJob.title}</h1>
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded-md" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded-md" required />
            <input type="file" className="w-full border p-2 rounded-md" required />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Submit Application
            </Button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }

  // ✅ Job List View
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="text-center mt-8 mb-6">
        <h1 className="text-4xl font-bold">Find Your Dream Job</h1>
        <p className="text-gray-600 mt-2">Discover opportunities tailored for your abilities</p>
      </div>

      {/* Search & Filters */}
      <Card className="mb-6 shadow-md border-0 max-w-7xl mx-auto mt-6">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-lg">🔍 Job Search & Filters</CardTitle>
        </CardHeader>
        <CardContent className="p-6 grid gap-4">
          <div className="grid md:grid-cols-5 gap-4">
            {/* Search Bar */}
            <div className="col-span-5">
              <Input
                placeholder="Search by job title, skills, or company..."
                value={filters.search}
                onChange={(e) => handleChange("search", e.target.value)}
              />
            </div>

            {/* Ability */}
            <Select onValueChange={(val) => handleChange("ability", val)}>
              <SelectTrigger>
                <SelectValue placeholder="All Abilities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Abilities</SelectItem>
                <SelectItem value="low-vision">Low Vision / Blind</SelectItem>
                <SelectItem value="hearing">Hard of Hearing / Deaf</SelectItem>
                <SelectItem value="physical">Hand or Leg Disability / Physical Disability</SelectItem>
                <SelectItem value="learning">Learning or Memory Difficulty</SelectItem>
                <SelectItem value="multiple">Multiple Disabilities</SelectItem>
              </SelectContent>
            </Select>

            {/* Job Type */}
            <Select onValueChange={(val) => handleChange("jobType", val)}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="parttime">Part-time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>

            {/* Work Type */}
            <Select onValueChange={(val) => handleChange("workType", val)}>
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

            {/* Location */}
            <Input
              placeholder="City, State"
              value={filters.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />

            {/* Salary */}
            <Select onValueChange={(val) => handleChange("salaryRange", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Any Salary" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Salary</SelectItem>
                <SelectItem value="0-10000">₹0 – ₹10,000</SelectItem>
                <SelectItem value="10000-50000">₹10,000 – ₹50,000</SelectItem>
                <SelectItem value="50000-200000">₹50,000 – ₹2 Lakhs</SelectItem>
                <SelectItem value="200000-400000">₹2 – ₹4 Lakhs</SelectItem>
                <SelectItem value="400000-600000">₹4 – ₹6 Lakhs</SelectItem>
                <SelectItem value="600000-1000000">₹6 – ₹10 Lakhs</SelectItem>
                <SelectItem value="1000000+">10+ Lakhs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* View Mode */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3">
        <Button variant={viewMode === "all" ? "default" : "outline"} onClick={() => setViewMode("all")}>All Jobs</Button>
        <Button variant={viewMode === "favorites" ? "default" : "outline"} onClick={() => setViewMode("favorites")}>Favorite Jobs</Button>
        <Button variant={viewMode === "saved" ? "default" : "outline"} onClick={() => setViewMode("saved")}>Saved Jobs</Button>
      </div>

      {/* Job Cards */}
      <div className="max-w-7xl mx-auto py-8 px-4 space-y-6">
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">No jobs found</p>
        )}
        {filteredJobs.map((job) => (
          <Card key={job.id} className="shadow-md border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Building className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
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
                      <span>₹{job.salary.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Icons */}
                <div className="flex space-x-2">
                  <button onClick={() => toggleFavorite(job.id)} className="w-10 h-10 flex items-center justify-center border rounded-md bg-white">
                    <Heart className="h-5 w-5" color={job.favorite ? "red" : "black"} fill={job.favorite ? "red" : "white"} />
                  </button>
                  <button onClick={() => toggleSaved(job.id)} className="w-10 h-10 flex items-center justify-center border rounded-md bg-white">
                    <Bookmark className="h-5 w-5" color="black" fill={job.saved ? "black" : "white"} />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Posted {job.posted}</span>
                <div className="space-x-3">
                  <Button variant="outline" onClick={() => setSelectedJob(job)}>View Details</Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" onClick={() => handleApplyClick(job)}>
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FindJobs;
