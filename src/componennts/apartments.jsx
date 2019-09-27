import React from "react";

const Apartments = ({ apartments }) => {
  return (
    <div>
      {apartments.map(a => (
        <ul key={a._id}>
          <li>{a.name}</li>
          <li>{a.address}</li>
          <li>{a.price}</li>
          <li>{a.contact}</li>
        </ul>
      ))}
    </div>
  );
};

export default Apartments;
