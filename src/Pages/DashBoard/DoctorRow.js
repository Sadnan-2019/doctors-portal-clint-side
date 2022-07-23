import React from 'react';

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
      .then(data => console.log(data))


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