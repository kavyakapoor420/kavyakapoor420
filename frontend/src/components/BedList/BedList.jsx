import  { useState, useEffect } from 'react';
import axios from 'axios';

function BedList() {
  const [beds, setBeds] = useState([]);

  useEffect(() => {
    const fetchBeds = async () => {
      const res = await axios.get('http://localhost:3000/api/beds');
      setBeds(res.data);
    };
    fetchBeds();
  }, []);

  return (
    <div>
      <h2>Bed List</h2>
      <ul>
        {beds.map(bed => (
          <li key={bed._id}>
            Bed {bed.bedNumber} - {bed.isOccupied ? 'Occupied' : 'Available'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BedList;