import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,i,refetch}) => {

     const {name,email,speciality,photo} = doctor;

     const handleDelete = (email) => {

      fetch(`http://localhost:5000/doctor/${email}`,{

      method : "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount){
          toast.success(`Doctor :${name} is deleted `)
          refetch()
        }
      })


     }


     return (
          
                <tr>
        <th>{i + 1}</th>
      
        <td>{name}</td>
        <td>{email}</td>
        <td>{speciality}</td>
        <td><div class="avatar">
  <div class="w-20 rounded">
    <img src={photo
}alt={name} />
  </div>
</div></td>
        
        <td>
        <button class="btn btn-xs" onClick={ ()=> handleDelete(email)}>Delete Doctor</button>
      </td>
      </tr>
               
        
     );
};

export default DoctorRow;