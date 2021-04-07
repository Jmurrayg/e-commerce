import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Navbar from '../components/Navbar';

//import axios from 'axios';

/* {email: "paquitainc@robi.com", password: "robi99"} */


export default function Signup(){

    const history = useHistory();

    const sendForm = (inputs) => {
        console.log('Estos son los inputs', inputs)
        if(inputs.password === inputs.password_confirmation){
            delete inputs.password_confirmation;
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', inputs)
            .then(({ data , status}) => {
                console.log(data, status);
                history.push('/');
            })
            .catch(error => {
                console.error(error.response.data);
            })
        } else {
            alert('las contraseñas no coinciden');
        }
    };

    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {});

    return(
    <>
        <Navbar/>
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <div style={{backgroundColor: "#bdc3c7"}} className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200">Registro</h1>
                        <p className="text-black dark:text-gray-400">Registrate para empezar a comprar.</p>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm text-black dark:text-gray-400">Correo</label>
                                <input type="email" id="email" placeholder="Email" required value={inputs.email} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="first_name" className="block mb-2 text-sm text-black dark:text-gray-400">Nombre</label>
                                <input type="text" name="first_name" id="first_name" placeholder="Primer Nombre" required value={inputs.first_name} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="last_name" className="block mb-2 text-sm text-black dark:text-gray-400">Apellidos</label>
                                <input type="text" name="last_name" id="last_name" placeholder="Apellido" required value={inputs.last_name} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <label for="birth_date" className="block mb-2 text-sm text-black dark:text-gray-400">Fecha de nacimiento</label>
                                <input type="date" name="birth_date" id="birth_date" required value={inputs.birth_date} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <label for="profile_img" className="block mb-2 text-sm text-black dark:text-gray-400">Imagen de perfil</label>
                                <input type="text" name="profile_img" id="profile_img" placeholder="Imagen de perfil" required value={inputs.profile_img} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="password" className="text-sm text-black dark:text-gray-400">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="Contraseña" required value={inputs.password} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="password_confirmation" className="text-sm text-black dark:text-gray-400">Confirmar Contraseña</label>
                                <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirmación de contraseña" required value={inputs.password_confirmation} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Registro</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}