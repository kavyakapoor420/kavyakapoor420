import './Login.css'

import {useState} from 'react'
import axios from 'axios'

const Login=()=>{ 
    const [user, setUser] = useState({
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
        const {  email, password } = user;
        if (email && password ) {
          axios
            .post("http://localhost:3000/login", user)
            .then((res) => console.log(res))
            .catch((error) => console.log("Error:", error));
        } else {
          alert("Invalid input. Please check your details.");
        }
      };       
          return (
            <div className="login">
              <h1>Login</h1>
              <div className='email'>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
              </div>
              <div className='password'>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
              </div>
              <button className="button" onClick={validate}>
                Register
              </button>
              <div>or</div>
              <button className="button">Login</button>
            </div>

    )
}


export default Login ;
