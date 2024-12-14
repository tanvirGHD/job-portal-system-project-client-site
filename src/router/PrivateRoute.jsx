import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => { // Changed Children to children
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("Location is:", location);

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }
    if (user) {
        return children; // Use children here
    }
    return <Navigate to="/signin" state={location?.pathname} replace />;
};


export default PrivateRoute;