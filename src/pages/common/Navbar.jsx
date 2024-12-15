import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import logo from "../../assets/jobIcon.png"
const Navbar = () => {

  const {user, signOutUser} = useContext(AuthContext);

  //signout function
  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log('successful sign Out')
    })
    .catch(error => {
      console.log("Failed to sign out stay here, don't leave me alone")
    })
  }



  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/myApplications'>MyApplications</NavLink></li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" flex justify-center items-center">
          <img className="h-10 w-10 md:h-14 md:w-14" src={logo} alt="" />
          <h3 className="text-lg md:text-3xl font-bold">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {
          user ? <> 
          <button onClick={handleSignOut} className="btn bg-blue-500 text-white hover:bg-blue-600">Sign Out</button>
          </> : <>
          <Link to="/register" className="btn bg-blue-500 text-white hover:bg-blue-600">Register</Link>
          <Link to="/signin" className="btn bg-blue-500 text-white hover:bg-blue-600">Sign In</Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
