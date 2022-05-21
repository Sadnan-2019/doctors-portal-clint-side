import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate= format(date,"PP")
  const {data:services,isLoading, refetch} =useQuery(['available', formattedDate],()=> 
  fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
      .then((res) => res.json()) )


      if(isLoading){

        return <Loading></Loading>
      }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);
  return (
    <div>
      <h2 className="text-center text-3xl text-primary mb-4">
        Available appoinment on:{format(date, "PP")}.
      </h2>
      <p className="text-center text-2xl text-primary mb-4">
        Please select service
      </p>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
     <div>
     {treatment && <BookingModal setTreatment={setTreatment}  treatment={treatment} date={date} refetch={refetch}></BookingModal>}
     </div>
    </div>
  );
};

export default AvailableAppoinment;
