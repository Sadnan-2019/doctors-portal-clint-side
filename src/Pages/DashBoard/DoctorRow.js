import React from 'react';

const DoctorRow = ({doctor,i}) => {

     const {name,email,speciality,photo} = doctor;
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
        <button class="btn btn-xs">Delete Doctor</button>
      </td>
      </tr>
               
        
     );
};

export default DoctorRow;