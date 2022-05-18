import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Reviews from "../Reviews";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Henry",
      review: "",
      location:"dhaka",
      img: people1,
    },
    {
      id: 1,
      name: "Winson Henry",
      review: "",
      location:"dhaka",
      img: people2,
    },
    {
      id: 1,
      name: "Winson Henry",
      review: "",
      location:"dhaka",
      img: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl text-primary">Testimonial</h1>
          <h1>What our patients sayes</h1>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {

                    reviews.map(review=><Reviews key={review.id} review={review}></Reviews>)
          }


      </div>
    </section>
  );
};

export default Testimonial;
