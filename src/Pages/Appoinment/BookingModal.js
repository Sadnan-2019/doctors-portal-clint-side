import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { indexedDBLocalPersistence } from "firebase/auth";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  // console.log(treatment)
  const { _id, name, slots,price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formatedDate = format(date, "PP");
  console.log(user);

  const handleBookService = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    // console.log(_id, slot, name);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      price,
      patientsName: user.displayName,
      patientsEmail: user.email,
      phone: event.target.phone.value,
    };

    fetch(`https://secure-thicket-56846.herokuapp.com/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          toast(`Appoinment done ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `Already Appoinment done ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });

    // console.log(booking)
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle " />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-secondary text-center mb-3">
            Booking for: {name}
          </h3>

          <form
            onSubmit={handleBookService}
            className="grid grid-cols-1 gap-4 justify-items-center  "
          >
            <input
              type="text"
              value={format(date, "PP")}
              class="input input-bordered input-success w-full max-w-xs"
              readOnly
              disabled
            />
            <select name="slot" class="select select-success w-full max-w-xs">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={user?.displayName || ""}
              name="name"
              readOnly
              class="input input-bordered input-success w-full max-w-xs"
            />
            <input
              type="email"
              value={user?.email || ""}
              readOnly
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
