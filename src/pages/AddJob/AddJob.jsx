import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {

  const {user} = useAuth()
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob);

    fetch("http://localhost:3000/jobs",{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been added",
            showConfirmButton: false,
            timer: 1500
          });
          Navigate('/myApplication')
        }
    })
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-4xl p-6 my-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Post a New Job
        </h2>
        <form onSubmit={handleAddJob} className="space-y-4">
          {/* Title and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-blue-700"
              >
                Job Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job title"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-blue-700"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job location"
              />
            </div>
          </div>

          {/* Job Type and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-blue-700"
              >
                Job Type
              </label>
              <select
                name="jobType"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-blue-700"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job category"
              />
            </div>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <label
                  htmlFor="minSalary"
                  className="block text-sm font-medium text-blue-700"
                >
                  Min Salary
                </label>
                <input
                  type="number"
                  name="min"
                  className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter minimum salary"
                />
              </div>
              <div>
                <label
                  htmlFor="currency"
                  className="block text-sm font-medium text-blue-700"
                >
                  Currency
                </label>
                <select
                  name="currency"
                  className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label
                  htmlFor="maxSalary"
                  className="block text-sm font-medium text-blue-700"
                >
                  Max Salary
                </label>
                <input
                  type="number"
                  name="max"
                  className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter maximum salary"
                />
              </div>
            </div>
          </div>

          {/* HR Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="hrName"
                className="block text-sm font-medium text-blue-700"
              >
                HR Name
              </label>
              <input
                type="text"
                name="hrName"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter HR name"
              />
            </div>
            <div>
              <label
                htmlFor="hrEmail"
                className="block text-sm font-medium text-blue-700"
              >
                HR Email
              </label>
              <input
                type="email"
                name="hrEmail"
                defaultValue={user?.email}
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter HR email"
              />
            </div>
          </div>

          {/* Requirements, Responsibilities, Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="requirements"
                className="block text-sm font-medium text-blue-700"
              >
                Requirements
              </label>
              <textarea
                name="requirements"
                rows="4"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job requirements (one per line)"
                defaultValue={`JavaScript
                  React
                  Node.js
                  MongoDB`}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="responsibilities"
                className="block text-sm font-medium text-blue-700"
              >
                Responsibilities
              </label>
              <textarea
                name="responsibilities"
                rows="4"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job responsibilities (one per line)"
                defaultValue={`Develop and maintain software
                  Collaborate with the team
                  Participate in code reviews`}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="applicationDeadline"
                className="block text-sm font-medium text-blue-700"
              >
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-blue-700"
            >
              Job Description
            </label>
            <textarea
              name="description"
              className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter job description"
            />
          </div>

          {/* Company and Logo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-blue-700"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label
                htmlFor="company_logo"
                className="block text-sm font-medium text-blue-700"
              >
                Company Logo URL
              </label>
              <input
                type="url"
                name="company_logo"
                className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter company logo URL"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
