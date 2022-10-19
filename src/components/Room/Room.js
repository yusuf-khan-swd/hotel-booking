import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  const { id, title, bed, person, price } = room;
  return (
    <div className="card card-compact w-96 bg-base-300 shadow-xl ">
      <figure><img src="https://placeimg.com/400/225/arch" alt="hotel" /></figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div>
          <p>Price: ${price} </p>
          <p>Bed: {bed} </p>
          <p>Person: {person} </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/room/${id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;