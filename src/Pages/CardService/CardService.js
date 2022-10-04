import React from "react";

const CardService = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 mx-10  px-12 py-8">
        <div className="  transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
          <img
            className="p-4"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
          <div className="card-body">
            <h2 className="card-title">Nurses</h2>
            <p className="mt-1 text-sm text-left text-gray-800 poppins-t  ">
              HealthCare at home offers most comprehensive and hollistic nursing
              care at home. They provide physical & psychological support to the
              patients.Our nurses administer oral & parenteral medication.All
              time they are analysis heartbeat, BP, Temperature, Oxygen
              saturation, & blood glucose.
            </p>
            <div className="card-actions  ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  odd: bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Physiotherapy !</h2>
            <p className="mt-1 text-sm text-left text-gray-800 poppins-t lg:text-justify">
              HealthCare at home has got a good number of diploma and B.Sc
              physiotherapists. They are experienced & specially trained.Most of
              them carry instruments such as IRR, TENS, Ultrasound. They are
              qualified to take care of patients of all ages.They can address
              Musculoskeletal, Neurological, Post-operative, Stroke patients'
              condition.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="mt-1 text-sm text-left text-gray-800 poppins-t lg:text-justify">
              HealthCare at home offers most comprehensive and hollistic nursing
              care at home. They provide physical & psychological support to the
            </p>
            <div className="card-actions justify-end ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;
