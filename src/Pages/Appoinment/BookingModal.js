import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, treatment,setTreatment }) => {

  // console.log(treatment)
  const { _id,name, slots } = treatment;

 const  handleBookService =(event)=>{
           event.preventDefault();
           const slot=event.target.slot.value;
           console.log(_id,slot,name)
           setTreatment(null)

          // console.log("here")
 }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle " />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-secondary text-center mb-3">
            Booking for: {name}
          </h3>

          <form onSubmit={handleBookService} className="grid grid-cols-1 gap-4 justify-items-center  ">
            <input
              type="text"
              value={format(date, "PP")}
              class="input input-bordered input-success w-full max-w-xs"
              readOnly
              disabled
            />
            <select name="slot" class="select select-success w-full max-w-xs">
              
               {slots.map(slot=><option value={slot}>{slot}</option>)}
            </select>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="email     "
              placeholder="Email"
              name="email"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              class="btn btn-secondary  w-full max-w-xs"
            />
          </form>
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
