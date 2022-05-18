import React from "react";
const InfoCard = ({ img, cardTitle, Bclass }) => {
  return (
    <div>
      <div class={`card lg:card-side   shadow-xl ${Bclass}`}>
        <figure class="pl-4">
          <img src={img}  alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white   ">{cardTitle}</h2>
          <p class="text-white">Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
