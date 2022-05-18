import React from "react";

const Reviews = ({ review }) => {
  return (
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
          </div>
          
             
              <div class="mr-5 ">
                <h2>{review.name}</h2>
                <p>{review.location}</p>
              </div>
           
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
