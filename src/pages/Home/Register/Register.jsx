import Lottie from "lottie-react";
import registerLottieData from "../../../assets/Animation - 1733900703492.json";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation regex (at least 6 characters, 1 uppercase, 1 lowercase, and 1 number)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Check if password is valid
    if (!regex.test(password)) {
      alert(
        "Password must be at least 6 characters long, with 1 uppercase, 1 lowercase, and 1 number."
      );
      return;
    }
    
    console.log(email, password);
  };

  return (
    <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={registerLottieData} />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form onSubmit={handleRegister} className="space-y-4">
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Register
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
            >
              Register
            </button>
          </div>

          <p className="text-center text-sm text-blue-600">
            Already have an account?{" "}
            <a href="#" className="link link-hover text-blue-800 font-semibold">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
