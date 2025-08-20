import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, DollarSign, Building, Heart, Bookmark } from "lucide-react";

const FindJobs = () => {
  const location = useLocation(); 
  const params = new URLSearchParams(location.search); 

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCorp Solutions", location: "Mumbai, Maharashtra", type: "Full-time", workType: "Remote", salary: "₹4,00,000 - ₹7,00,000", posted: "2 days ago", favorite: false, saved: false },
    { id: 2, title: "Customer Support Specialist", company: "ServiceFirst Inc", location: "Bangalore, Karnataka", type: "Full-time", workType: "Hybrid", salary: "₹2,50,000 - ₹4,00,000", posted: "3 days ago", favorite: true, saved: false },
    { id: 3, title: "Backend Engineer", company: "CodeWorks Ltd", location: "Delhi, India", type: "Part-time", workType: "On-site", salary: "₹5,00,000 - ₹9,00,000", posted: "1 week ago", favorite: false, saved: true },
    { id: 4, title: "UI/UX Designer", company: "PixelPerfect Studios", location: "Pune, Maharashtra", type: "Full-time", workType: "Remote", salary: "₹3,50,000 - ₹6,50,000", posted: "5 days ago", favorite: false, saved: false }
  ]);

  const [viewMode, setViewMode] = useState("all"); 
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const queryFromURL = params.get("query") || "";
    if (queryFromURL) {
      setSearchTerm(queryFromURL);
    }
  }, [location.search]); 

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

  const handleSearch = () => {
    console.log("Searching with:", searchTerm);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    if (viewMode === "favorites") return job.favorite && matchesSearch;
    if (viewMode === "saved") return job.saved && matchesSearch;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 🔹 Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md px-4 py-2 w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          Search Jobs
        </Button>
      </div>

      {/* View Mode Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3">
        <Button variant={viewMode === "all" ? "default" : "outline"} onClick={() => setViewMode("all")}>All Jobs</Button>
        <Button variant={viewMode === "favorites" ? "default" : "outline"} onClick={() => setViewMode("favorites")}>Favorite Jobs</Button>
        <Button variant={viewMode === "saved" ? "default" : "outline"} onClick={() => setViewMode("saved")}>Saved Jobs</Button>
      </div>

      {/* 🔹 Job Details View */}
      {selectedJob ? (
        <div className="max-w-4xl mx-auto py-8 px-4">
          <Card className="shadow-lg border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Building className="h-5 w-5" />
                <span>{selectedJob.company}</span>
              </div>
              <p className="text-gray-700 mb-3">
                <MapPin className="inline h-4 w-4 mr-1" /> {selectedJob.location}
              </p>
              <p className="text-gray-700 mb-3">
                <Clock className="inline h-4 w-4 mr-1" /> {selectedJob.type} • {selectedJob.workType}
              </p>
              <p className="text-gray-700 mb-3">
                <DollarSign className="inline h-4 w-4 mr-1" /> {selectedJob.salary}
              </p>
              <p className="text-sm text-gray-500">Posted {selectedJob.posted}</p>

              <div className="mt-6 flex gap-3">
                <Button variant="outline" onClick={() => setSelectedJob(null)}>Back to Jobs</Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" onClick={() => handleApplyClick(selectedJob)}>Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* 🔹 Job List */
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
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Icons */}
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
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" onClick={() => handleApplyClick(job)}>Apply Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FindJobs;
