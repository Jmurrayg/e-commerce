import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Navbar from '../components/Navbar';

export default function Add(){

    const history = useHistory();

    const sendForm = (inputs) =>{
        console.log(inputs)
        const token = window.localStorage.getItem('token');
        console.log(token)
        if(token){
            const config = {
                headers: {
                    'Authorization': `JWT ${token}`
                }
            }
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/item',inputs, config)
            .then(({ data, status}) =>{
                console.log(data, status);
                history.push('/');
            })
            .catch(error =>{
                console.error(error.response.data);
            })
        } else {
            history.push('/');
        }
    };

    const {
        inputs,
        handleInputs,
        handleSubmit,
    } =useForm(sendForm,{})


    return(
        <>
        <Navbar/>
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Registro</h1>
                        <p className="text-gray-400 dark:text-gray-400">Agregar Nuevo Producto.</p>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label for="product" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre del Producto</label>
                                <input type="text" id="product_name" placeholder="Producto" required value={inputs.product_name} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="description" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Descripcion</label>
                                <input type="text" name="description" id="description" placeholder="Descripcion" required value={inputs.description} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="last_name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Precio</label>
                                <input type="number" name="price" id="price" placeholder="$00" required value={inputs.price} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <label for="brand" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Marca</label>
                                <input type="text" name="brand" id="brand" required value={inputs.brand} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <label for="image" className="text-sm text-gray-600 dark:text-gray-400">Imagen</label>
                                <input type="text" name="image" id="image" placeholder="URL" required value={inputs.image} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label for="sku" className="text-sm text-gray-600 dark:text-gray-400">Sku</label>
                                <input type="text" name="sku" id="sku" placeholder="sku" required value={inputs.sku} onChange={handleInputs} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Agregar Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}