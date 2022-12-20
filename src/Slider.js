import React, { Component } from "react";
import Slider from "react-slick";
import dataProducts from "./dataProducts";
import Dish from "./Dish";

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
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
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

    const dishTestimonials = dataProducts.slice(0 , 8).map(function(e){
        return <Dish 
                  img={e.img}
                  title={e.title}
                  description={e.description}
                  rating={e.rate}
                  price={e.price}
                  key={e.id}
                  default="true"
               />
    })


    return (
      <div className="dish__slider">
        <div className="container">
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {dishTestimonials}
          </Slider>
        </div>
      </div>
    );
  }
}