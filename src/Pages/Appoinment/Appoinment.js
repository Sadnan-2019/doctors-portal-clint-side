import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinment = () => {
          const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <div className="px-12  mb-4">
        {/* <h3>this is appoinment</h3>     */}

        <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
        <AvailableAppoinment date={date}></AvailableAppoinment>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Appoinment;
