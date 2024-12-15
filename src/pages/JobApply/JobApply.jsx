import Lottie from "lottie-react";
import React from "react";
import loginLottieData from "../../assets/Animation - 1734200309818.json";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
//   console.log(id, user);

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const resume = form.resume.files[0];
    const linkedInUrl = form.linkedInUrl.value;
    const githubUrl = form.githubUrl.value;
    const resumeUrl = form.resumeUrl.value;
    const portfolioUrl = form.portfolioUrl.value;
    const skills = form.skills.value;
    const projects = form.projects.value;
    const experience = form.experience.value;

    // console.log("Applicant Details:", {
    //   name,
    //   email,
    //   resume,
    //   linkedInUrl,
    //   githubUrl,
    //   resumeUrl,
    //   portfolioUrl,
    //   skills,
    //   projects,
    //   experience,
    // });

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      name,
      resume,
      linkedInUrl,
      githubUrl,
      resumeUrl,
      portfolioUrl,
      skills,
      projects,
      experience,
    };

    fetch('http://localhost:3000/job-applications',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplications')
        }
    })

  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-blue-600">
        Job Apply
      </h2>
      <div className="card bg-blue-50 w-full max-w-4xl mx-auto md:mt-14 mt-10 md:mb-10 mb-5 md:p-6 p-3 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Animation Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-48 md:w-64">
              <Lottie animationData={loginLottieData} />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={handleJobApply} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-blue-800 font-medium">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-blue-800 font-medium">
                      LinkedIn URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="linkedInUrl"
                    placeholder="Enter your LinkedIn profile URL"
                    className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-blue-800 font-medium">
                      GitHub URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="githubUrl"
                    placeholder="Enter your GitHub profile URL"
                    className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-blue-800 font-medium">
                      Portfolio URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    placeholder="Enter your portfolio URL"
                    className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-blue-800 font-medium">
                      Resume URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="resumeUrl"
                    placeholder="Enter your online resume URL"
                    className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 font-medium">
                    Programming Skills
                  </span>
                </label>
                <textarea
                  name="skills"
                  placeholder="List your programming skills (e.g., HTML, CSS, JavaScript, React)"
                  className="textarea textarea-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 font-medium">
                    Project Details
                  </span>
                </label>
                <textarea
                  name="projects"
                  placeholder="Describe one or two of your best projects"
                  className="textarea textarea-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 font-medium">
                    Work Experience (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Mention any relevant work experience"
                  className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 font-medium">
                    Resume (PDF)
                  </span>
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  className="file-input file-input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
