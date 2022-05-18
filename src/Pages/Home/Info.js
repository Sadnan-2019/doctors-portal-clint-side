import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5    py-6">
      <InfoCard
        cardTitle="Opening Houre"
        img={clock}
      Bclass="bg-gradient-to-r from-green-400 to-blue-500"
      ></InfoCard>
      <InfoCard
        cardTitle="Visit 1363 X 838"
        img={marker}
      Bclass="bg-accent"
      ></InfoCard>
      <InfoCard
        cardTitle="Contuct us now"
        img={phone}
      Bclass="bg-gradient-to-r from-green-400 to-blue-500"
      ></InfoCard>
    </div>
  );
};

export default Info;
