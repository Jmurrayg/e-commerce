import React from 'react';
import payload from '../utils/payload';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../styles/hover.css';




export default function Profile(){
    const user = payload();
    const token = window.localStorage.getItem('token');
    if(token){
        const config = {
            headers: {
                'Authorization': `JWT ${token}`
            }
        }
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${user.id}`, config)
        .then(({ data, status}) =>{
            console.log(data, status);
        })
        .catch(error =>{
            console.error(error.response.data);
        })
    }

    return(
        <>
        <Navbar/>
        <div style={{backgroundColor: "black", width: "100%"}} className="h-screen p-10"></div>
        </>
    )
}