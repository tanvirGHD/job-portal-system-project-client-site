import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    axios.get(`http://localhost:3000/job-application?email=${user.email}`)
    .then(res => setJobs(res.data))


  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setJobs(jobs.filter((job) => job._id !== id));
      });
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        My Applications: {jobs.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Logo</th>
              <th className="border border-gray-300 px-4 py-2">Job Title</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Skills</th>
              <th className="border border-gray-300 px-4 py-2">Experience</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={job._id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50`}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="h-12 w-12 mx-auto object-contain"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center font-medium text-blue-800">
                  {job.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">{job.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.applicant_email}
                </td>
                <td className="border border-gray-300 px-4 py-2">{job.skills}</td>
                <td className="border border-gray-300 px-4 py-2">{job.experience}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
