import React from 'react';
import AboutSection from './AboutSection';

function AboutContainer() {
  return (
    <div className='content__container'>
        <AboutSection altstyle= 'false' 
                      title= 'Chicken'
                      description='Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.' 
                      img='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png'
         />
        <AboutSection altstyle= 'true' 
                      title= 'Burger'
                      description='Some of the world’s best cheese is made close to home! All our deliciously melty Mozzarella is made with 100% Canadian milk. We’re proud to support Canadian dairy farmers.' 
                      img= 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-6.png'
         />
        <AboutSection altstyle= 'false' 
                      title= 'Pizza Douch'
                      description='Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.' 
                      img='https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-7.png'
         />
    </div>
  )
}

export default AboutContainer