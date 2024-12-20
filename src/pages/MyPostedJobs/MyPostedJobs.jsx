import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }, [user.email]);

    const openModal = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold mb-8">My Posted Jobs: {jobs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition relative"
                    >
                        <img
                            src={job.company_logo}
                            alt={`${job.company} logo`}
                            className="w-16 h-16 rounded-full absolute top-4 right-4 border border-gray-200"
                        />
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-sm text-gray-600">
                            <strong>Company:</strong> {job.company}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Location:</strong> {job.location}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Salary:</strong> {job.salaryRange.min} - {job.salaryRange.max}{" "}
                            {job.salaryRange.currency}
                        </p>
                        <button
                            onClick={() => openModal(job)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                        >
                            <img className="h-6 w-6" src="https://img.icons8.com/?size=100&id=52134&format=png&color=000000" alt="" />
                        </button>
                        <img
                            src={selectedJob.company_logo}
                            alt={`${selectedJob.company} logo`}
                            className="w-20 h-20 rounded-full mx-auto mb-4 border border-gray-200"
                        />
                        <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
                        <p className="text-sm text-gray-600">
                            <strong>Company:</strong> {selectedJob.company}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Location:</strong> {selectedJob.location}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Job Type:</strong> {selectedJob.jobType}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Requirements:</strong> {selectedJob.requirements.join(", ")}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Responsibilities:</strong> {selectedJob.responsibilities.join(
                                ", "
                            )}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Salary:</strong> {selectedJob.salaryRange.min} -{" "}
                            {selectedJob.salaryRange.max} {selectedJob.salaryRange.currency}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Application Deadline:</strong>{" "}
                            {selectedJob.applicationDeadline}
                        </p>
                        <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-700 mt-4">{selectedJob.description}</p>
                            <p className="text-gray-700 mt-4 font-bold">Application Count: {selectedJob.applicationCount}</p>
                        </div>
                        <div>
                            <Link to={`/viewApplication/${selectedJob._id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            View Application
                            </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPostedJobs;
