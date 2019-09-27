import React, { Component } from "react";

class Section extends Component {
  state = {};
  render() {
    return (
      <div className="fixed-size-container">
        {/* All images used on this platform was lifted off image.google.come */}
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566150945/apt1.jpg"
            alt="house"
          />
        </div>
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566150943/43240499.jpg"
            alt="house"
          />
        </div>
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566149801/the-royale-188-east-64th-street-ph3.jpg"
            alt="house"
          />
        </div>
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566149801/the-royale-188-east-64th-street-ph3.jpg"
            alt="house"
          />
        </div>
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566149763/186026163.jpg"
            alt="house"
          />
        </div>
        <div className="fixed-size">
          <img
            src="https://res.cloudinary.com/azmotech/image/upload/c_scale,h_261,w_380/v1566149755/Beautiful_Apartment_5.jpg"
            alt="house"
          />
        </div>
      </div>
    );
  }
}

export default Section;
