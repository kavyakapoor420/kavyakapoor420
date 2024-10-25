import { BrowserRouter, Route , Routes} from 'react-router-dom';


import PatientList from './components/PateintList/PatientList';
import BedList from './components/BedList/BedList';
import PatientForm from './components/PatientForm/PatientForm';
import BedBooking from './components/BedBooking/BedBooking';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
       <Navbar/>
     <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path="/patients" element={<PatientList/>} />
          <Route path="/beds" element={<BedList/>} />
          <Route path="/add-patient" element={<PatientForm/>} />
          <Route path="/book-bed" element={<BedBooking/>} />
          </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;