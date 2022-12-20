import React, { Component } from "react";
import Slider from "react-slick";
import clientsData from "./clientsData";
import Client from "./Client";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
      ]
    };

    const clientsTestimonials = clientsData.map(function(e){
        return <Client 
                  img={e.img}
                  name={e.name}
                  job={e.job}
                  rating={e.rating}
                  testimonial={e.testimonial}
                  key={e.id}
                  top='true'
               />
    })


    return (
      <div className="main__slider">
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