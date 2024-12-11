import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
    <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-green-500 text-white hover:bg-green-600 flex items-center justify-center"
      >
        <img
          src="https://img.icons8.com/?size=100&id=4hR4Ih04Je2t&format=png&color=000000"
          alt="Google Icon"
          className="w-6 h-6 mr-2"
        />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
