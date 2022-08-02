import { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class CarouselSports extends Component {
  render() {
    return (
      <div className="w-4/5 lg:w-3/5 xl:w-2/5 m-auto">
        <Carousel>
          <div>
            <img src="/assets/images/sports2.png" alt="image1" />
          </div>
          <div>
            <img src="/assets/images/sports3.png" alt="image2" />
          </div>
        </Carousel>
      </div>
    );
  }
}
