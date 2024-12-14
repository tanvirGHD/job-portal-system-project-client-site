import { div } from "motion/react-client";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div>
        <h2 className="md:text-3xl text-xl border-b border-[#d3dbfd] py-3 font-bold text-[#91A6FE] text-center">Job details for {title}</h2>
        <div className="my-10 flex justify-center px-4">
            <div className="max-w-5xl w-full border rounded-lg shadow-lg p-6 bg-white">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center md:justify-between border-b pb-6 mb-6">
                    <div className="flex items-center">
                        <img
                            src={company_logo}
                            alt={company}
                            className="w-16 h-16 mr-4 rounded-full"
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{company}</h2>
                            <p className="text-gray-600">{location}</p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right">
                        <h3 className="text-xl font-bold text-blue-500">{title}</h3>
                        <p className="text-sm text-gray-500">Category: {category}</p>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Job Description:</h4>
                        <p className="text-gray-700 mb-4">{description}</p>

                        <h4 className="font-bold text-lg mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            {requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-lg mt-4 mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside text-gray-700">
                            {responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-2">Job Details:</h4>
                        <p><span className="font-bold">Job Type:</span> {jobType}</p>
                        <p><span className="font-bold">Application Deadline:</span> {applicationDeadline}</p>
                        <p>
                            <span className="font-bold">Salary Range:</span>{" "}
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                        </p>
                        <p><span className="font-bold">Status:</span> {status}</p>

                        <h4 className="font-bold text-lg mt-4 mb-2">HR Contact:</h4>
                        <p>
                            {hr_name} -{" "}
                            <a
                                href={`mailto:${hr_email}`}
                                className="text-blue-500 underline"
                            >
                                {hr_email}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2">Company:</h4>
                        <p className="text-gray-700">{company}</p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link to={`/jobApply/${_id}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                            Apply Now
                        </button>
                        </Link>
                        <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300">
                            Save Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;
