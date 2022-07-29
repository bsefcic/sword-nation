import React, { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class CarouselChitila extends Component {
  render() {
    return (
      <div className="w-4/5 lg:w-3/5 xl:w-2/5 m-auto">
        <Carousel>
          <div>
            <img src="/assets/images/chitila1.png" alt="image1" />
          </div>
          <div>
            <img src="/assets/images/chitila2.png" alt="image2" />
          </div>
          <div>
            <img src="/assets/images/chitila3.png" alt="image3" />
          </div>
          <div>
            <img src="/assets/images/chitila4.png" alt="image4" />
          </div>
          <div>
            <img src="/assets/images/chitila5.png" alt="image5" />
          </div>
        </Carousel>
      </div>
    );
  }
}
