import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>This is Home Component</h2>
      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Single Person!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;