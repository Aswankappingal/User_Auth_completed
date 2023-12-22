import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Studentview = () => {



    // const navigate = useNavigate()

    // const Logout = () => {
    //     localStorage.clear();
    //     navigate("/Student_login")
    // }



    // const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    // const [count,setCount]=useState(0)
    const value = JSON.parse(localStorage.getItem('stud_token'));
    const getName = async () => {
        const res = await axios.get("http://localhost:3002/api/home", {
            headers: { Authorization: `Bearer ${value}` },
        })
        setMsg(res.data.msg)
    }

    useEffect(() => {
        getName()
    }, [])


    // const Logout = (e) => {
    //     e.preventDefault();
    //     const confirmed = window.confirm("Are you sure you want to logout?");
    //     if (confirmed) {
    //         localStorage.clear();
    //         navigate("/Adminlogin")
    //     }
    // }



    return (
        <div>
            <div className="serachbox" >
                    <h1><i className="fa fa-user" aria-hidden="true"><span>{msg}</span></i></h1>

                </div>

        </div>
    )
}

export default Studentview
