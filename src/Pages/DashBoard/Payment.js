import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51LRCK3IYd4v9xQ61TM6JP87C5yP7HRBOoD6uTYCRyi4grRtm0nXAeUaiuN2bldHB5jlJR4C7oDCG82Q8vgRdBUEZ00SCLwR1eY');


const Payment = () => {
  
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data:appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if(isLoading){
     return <Loading></Loading>
  }

  return (
    <div>
      <h2 className="text-red-500 text-2xl text-center font-bold">Payment Details</h2>
      <div class="card max-w-3xl mx-auto shadow-2xl bg-base-100 my-10">
      <div class="card-body">
          <p className="text-2xl font-semibold text-blue-500 ">Patients Name : {appoinment.patientsName}</p>
          <h2 className="text-2xl font-semibold text-red-500  ">Pay for {appoinment.treatment}</h2>
          <p className="text-2xl font-semibold  ">Your appoinment date : <span className="text-2xl font-semibold text-red-500">{appoinment.date} at {appoinment.slot}</span></p>
          <p className="text-2xl font-semibold text-red-500  " >Price : ${appoinment.price}</p>
       
        
      </div>
    </div>
      
     
    <div class="card max-w-2xl  w-full  mx-auto shadow-2xl bg-base-100 my-10">
      <div class="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm appoinment = {appoinment}/>
  </Elements>
        
      </div>
    </div>
   
    </div>
  );
};

export default Payment;
