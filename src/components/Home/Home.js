import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div>
      <h2>This is Home Component</h2>
      <div>
        {rooms.map(room => <Room key={room.id} room={room}></Room>)}
      </div>
    </div>
  );
};

export default Home;