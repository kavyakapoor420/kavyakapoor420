import { useState } from 'react';
import axios from 'axios';

function PatientForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/patients', { name, email, phone });
      alert('Patient added successfully');
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      alert(`Error adding patient: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
}

export default PatientForm;
