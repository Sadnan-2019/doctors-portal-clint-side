import React from "react";
import Footer from "../../Footer/Footer";
import CardService from "../CardService/CardService";
import Luckey from "../Luckey/Luckey";
import Mymap from "../Mymap/Mymap";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <div class="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
   
        <ContactUs></ContactUs>
        <Mymap></Mymap>
        {/* <Luckey></Luckey> */}
        <CardService></CardService>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
