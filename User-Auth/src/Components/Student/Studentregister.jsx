import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Studentregister.css'
import { useNavigate } from 'react-router-dom';

const Studentregister = () => {

    const [val, setVal] = useState({ 
        username: "",
        password: "",
        confirmpassword:""
    
      }
      )

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);
  

    const RegisterData = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("http://localhost:3002/api/addstaff", { ...val,staff: username });
    
          if (res.status === 201) {
            alert("Successfully Registered");
            navigate("/Studentlog")
          } else {
            alert("Data Not Added");
          }
        } catch (error) {
          alert("error", error);
        }
      };

      const Getdata = (e) => {
        e.preventDefault();
        setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    
      }
    







  return (
    <div>


<div className="whole-data-student-reg">
        <div className="Main-part-student-reg">
          <div className="signup-student">
            <form action="submit_registration.php" method="post" encType="multipart/form-data">
              <div className='head-student'><h5>Student Registartion </h5></div>


              <div className='inputs-whole'>

                <input type="text" id="username" name="username" onChange={Getdata} placeholder='Username' required />


                <input type="password" id="password" name="password" onChange={Getdata} placeholder='Password' required />

                <input type="text" id="confirmpassword" name="confirmpassword" onChange={Getdata} placeholder='Confirm-password' required></input>



                <button type="submit" onClick={RegisterData} >Register</button>
              </div>

            </form>







          </div>
        </div>
      </div>





      
    </div>
  )
}

export default Studentregister
