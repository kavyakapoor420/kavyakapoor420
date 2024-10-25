import './Register.css'
import {useState} from 'react'
import axios from 'axios'

const Register=()=>{ 
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const validate = () => {
        const { name, email, password } = user;
        if (name && email && password ) {
          axios
            .post("http://localhost:3000/register", user)
            .then((res) => console.log(res))
            .catch((error) => console.log("Error:", error));
        } else {
          alert("Invalid input. Please check your details.");
        }
      };       
          return (
            <div className="register">
              {/* {console.log(user)} */}
              <h1>Register</h1>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              <button className="button" onClick={validate}>
                Register
              </button>
              <div>or</div>
              <button className="button">Login</button>
            </div>

    )
}


export default Register ;