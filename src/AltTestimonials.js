import React, { Component } from "react";
import Slider from "react-slick";
import clientsData from "./clientsData";
import Client from "./Client";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const clientsTestimonials = clientsData.map(function(e){
        return <Client 
                  img={e.img}
                  name={e.name}
                  job={e.job}
                  rating={e.rating}
                  testimonial={e.testimonial}
                  key={e.id}
                  bottom='true'
               />
    })


    return (
      <div className="main__slider alt__slider">
        <div className="container">
        <h2 className='clients__title'>What your client says</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {clientsTestimonials}
          </Slider>
        </div>
      </div>
    );
  }
}