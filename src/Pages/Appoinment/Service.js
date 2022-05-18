import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card   bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another day</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces " : "space " } 
              available
          </p>
          <div class="card-actions justify-end">
            <button
              disabled={slots.length === 0}
              class="btn  text-white font-bold bg-gradient-to-r from-green-400 to-blue-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
