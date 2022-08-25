import React from 'react';

const MobileBanking = () => {
     return (
          <div>
               <h1>Mobile Bnaking</h1>
               <div className=" ">
      <div className="card w-96 bg-base-100 shadow-xl  ">
        <div className="card-body">
          <h2 className="card-title">Choose your  option</h2>
        <div className=" flex justify-between items-center">
        <button
            
            className="btn btn-outline btn-accent"
          >
            Bkash
          </button>
        
          <button
            
            className="btn btn-outline btn-accent"
          >
            Rocket
          </button>
          <button
            
            className="btn btn-outline btn-accent"
          >
     Nogod
          </button>
        </div>
          
     
        </div>
      </div>
    </div>
          </div>
     );
};

export default MobileBanking;