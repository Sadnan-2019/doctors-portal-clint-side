import React from "react";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div class=" container mx-auto">
      <div class="row  ">
        <div class="hero min-h-screen   ">
          <div class="hero-content flex-col lg:flex-row">
            <div class="p-12  ">
              <img src={treatment} class="     rounded-lg shadow-2xl" alt="" />
            </div>
            <div class=" p-12">
              <h5 class="text-5xl font-bold">
                Exceptional Dental care on your treatment!
              </h5>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-green-400 to-blue-500  ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
