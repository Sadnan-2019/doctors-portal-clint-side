import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section className="flex items-center justify-center    " style={
              {background:`url(${appointment})`}}>
      <div className="flex-1  ">
        <img src={doctor} className="mt-[-120px]    " alt="" />
      </div>
      <div className="flex-1 text-white">
        <h1 className="  text-xl text-primary">Appoinment</h1>
        <h2 className="text-3xl">Make an Appoinment Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          laboriosam, saepe reiciendis nihil non similique quis. Iste et
          distinctio eos tenetur natus ex dolores, fugit, reprehenderit labore
          vero esse cumque temporibus rem minus alias pariatur exercitationem
          magnam amet omnis itaque.
        </p>
        <button class="btn btn-primary mt-6 text-white font-bold bg-gradient-to-r from-green-400 to-blue-500  ">
            Get Started
          </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
