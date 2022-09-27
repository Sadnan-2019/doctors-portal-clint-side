import React from 'react';
 
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Luckey = () => {
  
     var settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
     return (
          <div>
        

<div className=' '>
        <h2>Auto Play</h2>
        <Slider {...settings}>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12   ">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/254910986_3010956795817626_994705618588666_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3r8qBwByeY4AX967uqs&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8pWPJdPwLtkMBiJrpGJlKx2NcKdK5NKbBl_53cN_jmmQ&oe=633740F9"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>name</h2>
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12   ">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/254910986_3010956795817626_994705618588666_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3r8qBwByeY4AX967uqs&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8pWPJdPwLtkMBiJrpGJlKx2NcKdK5NKbBl_53cN_jmmQ&oe=633740F9"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>name</h2>
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12   ">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/254910986_3010956795817626_994705618588666_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3r8qBwByeY4AX967uqs&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8pWPJdPwLtkMBiJrpGJlKx2NcKdK5NKbBl_53cN_jmmQ&oe=633740F9"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>name</h2>
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
        <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12  ">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/254910986_3010956795817626_994705618588666_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3r8qBwByeY4AX967uqs&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8pWPJdPwLtkMBiJrpGJlKx2NcKdK5NKbBl_53cN_jmmQ&oe=633740F9"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>name</h2>
              <p>location</p>
            </div>
          </div>
        </div>
      </div>
        
        </Slider>
      </div>
          </div>
     );
};

export default Luckey;