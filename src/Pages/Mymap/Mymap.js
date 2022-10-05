import React from "react";

const Mymap = () => {
  return (
    <div>
      {/* <iframe
        src="https://maps.google.com/maps?q='+90.41861087115821+','+23.791912419482312+'&hl=es&z=14&amp;output=embed"
        style={{
          width: "800",
          height: "170",
          frameborder: "0",
          scrolling: "no",
          marginheight: "0",
          marginwidth: "0",
        }}
      ></iframe>
      <br />
      <small>
        <a
          href="https://maps.google.com/maps?q='+90.41861087115821+','+23.791912419482312+'&hl=es;z=14&amp;output=embed"
          target="_blank"
          className="text-left"
          style={{ color: "#0000FF" }}
        >
          See map bigger
        </a>
      </small> */}
      <div className='align-items-center justify-content-center d-flex p-4'>
<iframe className='broder rounded-3' 
 src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3650.7490889132346!2d90.41645411434928!3d23.791947643106184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.7919271!2d90.418686!4m5!1s0x3755c712067b4975%3A0x78f7e1870533e90e!2sArtLand%20Dhaka%20niloy%20house%2011%2C%20flat%20501%2C%20road%20108%2C%20gulshan%202%20near%20gulshan%20youth%20club%20Dhaka%201212!3m2!1d23.791843699999998!2d90.4186216!5e0!3m2!1sen!2sbd!4v1664948951631!5m2!1sen!2sbd"
 style={{width:"100%",height:"450px",border:"0"}}  
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>
    </div>
 
    
  );
};

export default Mymap;
