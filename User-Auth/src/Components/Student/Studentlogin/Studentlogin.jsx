import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Studentlogin = () => {

    const [ username,setusername]=useState("");
    const [password,setpassword]=useState("");

    const navigate = useNavigate()

    const handleLogin_student = async (e) => {
      e.preventDefault();
      try {
          // console.log(admission_id, date);
          const response = await axios.post("http://localhost:3002/api/login", {
            username: username,
            password: password,
          });
  
          const data = response.data;
          console.log(data.token);
  
          if (response.status !== 404) {
              const stud_token = data.token;
              localStorage.setItem("stud_token", JSON.stringify(stud_token));
              
              // Navigate immediately after setting the token
              navigate("/Studentview");
          } else {
              alert(data.msg);
          }
      } catch (error) {
          alert("Student ID Or Date Of Birth Incorrect");
      }
  };
  



  return (
    <div>

<div className="fullerr-staff-login">
                <div className="main-staff-login">
                    <div className="signup-staff-login">
                   
                        <form>
                        <div className='Back'><Link  to={'/'} ><button>back</button></Link></div>

                            <label htmlFor="chk" id='labelll' aria-hidden="true">Student Login</label>
                            <div className='usr'><input type="email" className='one-input-staff' name="username" onChange={(e) =>setusername(e.target.value)} placeholder="username" required="" />

                            </div>

                            <div className='pwd'><input type="password" className='one-input-staff' name="date" placeholder="password" onChange={(e) =>setpassword(e.target.value)}  required="" /></div>
                            {/* <div className='Links-login-only'><Link className='Fort' to='/Forgotusername'>Forgot Username</Link>
                                <Link className='Fort' to='/Forgotpassword'>Forgot Password</Link></div> */}
                            <button id='btn-staff-login' onClick={handleLogin_student} >Login</button>




                        </form>


                    </div>

                </div>

            </div>
      
    </div>
  )
}

export default Studentlogin
