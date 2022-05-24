import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [appoinment, setAppoinment] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  let i = 1;

  useEffect(() => {
    if (user) {
      console.log(user.email);
      fetch(`http://localhost:5000/booking?patientsEmail=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
                console.log("res", res) 

                if(res.status === 401 || res.status === 403){

                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/")

                }
               return res.json()
        })
        .then((data) => {
                setAppoinment(data)
        });
    }
  }, [user]);
  return (
    <div>
      {/* <h4>my appoinment:{appoinment.length}</h4> */}
      <div class="overflow-x-auto">
        <h3 className="text-2xl text-center text-secondary mb-4">Appoinment List</h3>
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>Date</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {appoinment.map((app) => (
              <tr>
                <th>{i++}</th>
                <td>{app.patientsName}</td>
                <td>{app.treatment}</td>
                <td>{app.date}</td>
                <td>{app.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
