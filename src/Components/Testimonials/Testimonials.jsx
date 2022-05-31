import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/pagination";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  // fake data do not use production
  const data = [
    {
      id: 1,
      image: avatar1,
      name: "Mahmud",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Similique itaque vitae illum dolores ratione minus autem atque! Nulla a, pariatur repudiandae esse animi natus minima inventore magnam doloremque illum. Esse.",
    },
    {
      id: 2,
      image: avatar2,
      name: "Mahmud",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Similique itaque vitae illum dolores ratione minus autem atque! Nulla a, pariatur repudiandae esse animi natus minima inventore magnam doloremque illum. Esse.",
    },
    {
      id: 3,
      image: avatar3,
      name: "Mahmud",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Similique itaque vitae illum dolores ratione minus autem atque! Nulla a, pariatur repudiandae esse animi natus minima inventore magnam doloremque illum. Esse.",
    },
    {
      id: 4,
      image: avatar4,
      name: "Mahmud",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Similique itaque vitae illum dolores ratione minus autem atque! Nulla a, pariatur repudiandae esse animi natus minima inventore magnam doloremque illum. Esse.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt="profile" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
