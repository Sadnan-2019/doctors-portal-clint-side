import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({deletingDoctor ,refetch,setDeletingDoctor}) => {
     const {name,email} =deletingDoctor;


     const handleDelete = (email) => {
          fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                toast.success(`Doctor :${name} is deleted `);
                setDeletingDoctor(null)
                refetch();
              }
            });
        };
     return (
          <div>
              

 
<input type="checkbox" id="delete-confirm-doctor" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are you sure delete this doctor name: <span className='font-bold text-2xl text-red-700'>{name}</span></h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <button class="btn  " onClick={() => handleDelete(email)}>
          Delete Doctor
        </button>
      <label for="delete-confirm-doctor" class="btn">Cansel</label>
    </div>
  </div>
</div>
          </div>
     );
};

export default DeleteConfirm;