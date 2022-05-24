// import { Children } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Pages/Shared/Loading";
import useAdmin from "./useAdmin";

const RequireAdmin=({children})=>{

          const [user, loading, error] = useAuthState(auth);
          const [admin,adminLoading] = useAdmin(user)

          const location = useLocation();

          if(loading || adminLoading){
                    signOut(auth)
                    return <Loading></Loading>
          }

          if (!user || !admin) {
                   
                    return <Navigate to="/login" state={{ from: location }} replace />;
                  }

          return children;
};

export default RequireAdmin;