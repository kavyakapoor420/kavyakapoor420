import  { useState } from 'react';
import axios from 'axios';

function BedBooking() {
  const [bedNumber, setBedNumber] = useState('');
  const [patientId, setPatientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/beds/book', { bedNumber, patientId });
      alert('Bed booked successfully');
      setBedNumber('');
      setPatientId('');
    } catch (err) {
      alert('Error booking bed',err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Bed</h2>
      <input
        type="text"
        placeholder="Bed Number"
        value={bedNumber}
        onChange={(e) => setBedNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />
      <button type="submit">Book Bed</button>
    </form>
  );
}

export default BedBooking;