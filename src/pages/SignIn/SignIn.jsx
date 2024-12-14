import Lottie from "lottie-react";
import loginLottieData from "../../assets/Animation - 1733900703492.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../common/SocialLogin";


const SignIn = () => {

    const {signInUser} = useContext(AuthContext)
    const location  = useLocation();
    const navigate = useNavigate();
    console.log("In signin page:", location);
    const from = location?.state || '/';


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        //login
        signInUser(email, password)
        .then(result => {
          console.log('Sign in',result.user);
          navigate(from);
        })
        .catch(error => {
          console.log(error.message);
        });
      };


 
  return (
    <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Animation Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-48 md:w-64">
          <Lottie animationData={loginLottieData} />{" "}
          {/* Replace with login Lottie animation */}
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1">
        <form onSubmit={handleSignIn} className="space-y-4">
          {" "}
          {/* Change handleRegister to handleSignIn */}
          <h2 className="text-center text-2xl font-bold text-blue-600">
            Sign In
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
              placeholder="Enter your password"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
          <p className="text-center text-sm text-blue-600">
          Don't have an account?{" "}
            <Link to='/register' href="#" className="link link-hover text-blue-800 font-semibold">
              Register
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignIn;
