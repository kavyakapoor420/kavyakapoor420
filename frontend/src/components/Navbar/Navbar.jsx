import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return (
        <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
    
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/beds">Beds</Link></li>
          <li><Link to="/add-patient">Add Patient</Link></li>
          <li><Link to="/book-bed">Book Bed</Link></li>
        </ul>
        </nav>
    )
 
}


export default Navbar ;