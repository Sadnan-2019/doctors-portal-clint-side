import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      class="flex    items-center justify-center my-12  container   "
      style={{ background: `url(${appointment})` }}
    >
      <div class="flex-1 ">
        <img src={doctor} class="mt-[-120px]    " alt="" />
      </div>
      <div class="flex-1 text-white px-5">
        <h1 class="  text-xl text-primary">Appoinment</h1>
        <h2 class="text-3xl py-5">Make an Appoinment Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          laboriosam, saepe reiciendis nihil non similique quis. Iste et
          distinctio eos tenetur natus ex dolores, fugit, reprehenderit labore
          vero esse cumque temporibus rem minus alias pariatur exercitationem
          magnam amet omnis itaque.
        </p>
        <button class="btn btn-primary mt-6 mb-5 text-white font-bold bg-gradient-to-r from-green-400 to-blue-500  ">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
