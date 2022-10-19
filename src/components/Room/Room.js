import React from 'react';

const Room = ({ room }) => {
  const { title, bed, person, price } = room;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure><img src="https://placeimg.com/400/225/arch" alt="hotel" /></figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>Price: ${price} </p>
        <p>Bed: {bed} </p>
        <p>Person: {person} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Room;