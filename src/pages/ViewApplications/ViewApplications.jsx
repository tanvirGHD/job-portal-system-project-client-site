
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) =>{
    console.log(e.target.value, id)
    const data = {
        status: e.target.value
    }
    fetch(`http://localhost:3000/job-applications/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            title: 'Success!',
            text: 'Status updated successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        View Applications ({applications.length})
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Skills</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Experience</th>
              <th className="border border-gray-300 px-4 py-2 text-left">LinkedIn</th>
              <th className="border border-gray-300 px-4 py-2 text-left">GitHub</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Resume</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{app.name}</td>
                <td className="border border-gray-300 px-4 py-2">{app.applicant_email}</td>
                <td className="border border-gray-300 px-4 py-2">{app.skills}</td>
                <td className="border border-gray-300 px-4 py-2">{app.experience}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={app.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Resume
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="border border-gray-300 px-2 py-1 rounded"
                  >
                    <option disabled>Change Status</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Set Interview">Set Interview</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
