import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Navbar from '../components/Navbar';

export default function Login(){

    const history = useHistory();

    const sendForm = (inputs) => {
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', inputs)
        .then(({data, status}) =>{
            console.log(inputs);
            const { token } = data;
            window.localStorage.setItem('token', token);
            history.push('/');
        })
        .catch(error =>{
            console.log(error.response.data);
        })
    }
    const {
        inputs,
        handleSubmit,
        handleInputs
    } = useForm(sendForm,{});

    return(
    <>
        <Navbar/>
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div  className="container mx-auto">
                <div style={{backgroundColor: "#bdc3c7"}} className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200">Login</h1>
                        <p className="text-black dark:text-gray-400">Inicia secion para empezar a comprar.</p>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm text-black dark:text-gray-400">Correo</label>
                                <input type="email" id="email" placeholder="Email" required value={inputs.email} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="password" className="text-sm text-black dark:text-gray-400">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="Contraseña" required value={inputs.password} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Iniciar Secion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
        )


}