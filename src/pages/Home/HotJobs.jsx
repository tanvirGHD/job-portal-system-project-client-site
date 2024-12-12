import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="my-5 md:my-10">
      <div className="mb-4">
        <h1 className="text-center text-4xl text-blue-400 font-bold">
          Jobs of the day
        </h1>
        <p className="text-gray-500 text-center">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="group border rounded-lg p-4 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 "
          >
            <div className="flex items-center">
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{job.company}</h2>
                <p className="text-gray-600">{job.location}</p>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-blue-600">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{job.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {job.requirements.map((req, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                >
                  {req}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold text-[#91A6FE]">
                {job.salaryRange.min} - {job.salaryRange.max}{" "}
                {job.salaryRange.currency}/month
              </p>
            </div>
            <Link to={`/jobs/${job._id}`}>
            <button className="mt-4 bg-blue-100 w-full text-blue-400 py-2 px-4 rounded transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
              Apply Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
