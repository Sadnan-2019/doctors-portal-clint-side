import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,i,refetch}) => {
          const {email,role} = user;
          const handleMakeAdmin=()=>{

            fetch(`http://localhost:5000/user/admin/${email}`,{
              method: "PUT",
              headers:{

                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              }
            })
            .then(res=> {

              if(res.status === 403){
                toast.error("not permission ")
              }
              res.json()
            })
            .then(data =>{

              if(data.modifiedCount  > 0){}
              refetch();
              toast.success("Make admin success")
            })
          }
         
          return (
                  
                            <tr>
                <th>{i+1}</th>
                <td className=''>{email}</td>
                <td>{ role !== "admin"  && <button class="btn btn-xs " onClick={handleMakeAdmin}>Make Admin</button>
               
                }</td>
               <td><button class="btn btn-xs">Remove user</button></td> 
                
              </tr>   
               
          );
};

export default UserRow;