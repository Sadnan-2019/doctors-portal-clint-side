import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
          return (
                    <div className='px-12'>
                      
                        <Banner></Banner>  
                        <Info></Info> 
                        <Services></Services> 
                        <Treatment></Treatment>
                        <MakeAppointment></MakeAppointment> 
                        <Testimonial></Testimonial> 
                    </div>
          );
};

export default Home;