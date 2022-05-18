import React from "react";
import chair from "../../assets/images/chair.png";

import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div class="">
          <h1 class="text-5xl font-bold">Your New Smile Start Here!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-green-400 to-blue-500  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
