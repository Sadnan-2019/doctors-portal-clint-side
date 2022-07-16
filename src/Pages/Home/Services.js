import React from "react";
import flouride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import Service from "./Service";


const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Floride Treatement",
      desceiption: "",
      img: flouride,
    },
    {
      _id: 1,
      name: "Whitening Treatement",
      desceiption: "",
      img: whitening,
    },
    {
      _id: 1,
      name: "Cavity Treatement",
      desceiption: "",
      img: cavity,
    },
  ];
  return (
    <div>
      <div class="my-9">
        <h1 class="text-center font-bold text-3xl text-primary	">
          Our Services
        </h1>
        <h1 class="text-center font-bold text-3xl	">Service We Provide</h1>
      </div>
      <div class="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
