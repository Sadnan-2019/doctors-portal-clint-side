import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const { data: doctors, isLoading,refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
    
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <p>manage dotor{doctors.length}</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th> Speciality</th>
              <th> Photo</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <DoctorRow key={doctor._id} doctor={doctor} i={i} refetch ={refetch}></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;