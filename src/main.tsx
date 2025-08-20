import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Job[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Favorite Jobs</h1>
      {favorites.length === 0 ? (
        <p>No favorite jobs yet.</p>
      ) : (
        favorites.map(job => (
          <div key={job.id} className="border p-4 mb-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
            </div>
            <button
              className="ml-4 px-4 py-1 bg-blue-500 text-white rounded"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}
