import React from "react";

import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div>
      <div
        class="hero mt-10 mb-10   "
        style={{ background: `url(${appointment})` }}
      >
        <div class="hero-content flex-col  ">
          <h1 class="text-center font-bold text-3xl text-primary">
            Contact Us
          </h1>
          <h1 class="text-center text-primary"> Stay Connected With us </h1>
          {/* <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div class="card flex-shrink-0     shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Meassage</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered input-lg w-full max-w-xs"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
