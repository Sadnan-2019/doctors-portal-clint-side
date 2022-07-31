import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, i, refetch, setDeletingDoctor }) => {
  const { name, email, speciality, photo } = doctor;

  

  return (
    <tr>
      <th>{i + 1}</th>

      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={photo} alt={name} />
          </div>
        </div>
      </td>

      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-doctor"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>

        
      </td>
    </tr>
  );
};

export default DoctorRow;
