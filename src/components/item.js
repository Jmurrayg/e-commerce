import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import payload from '../utils/payload';
import { useParams } from 'react-router-dom';
import {useContext} from 'react';
import {AppContext} from '../components/Provider';


//import CartProvider from '../contexts/CartContext';


const Item = () =>{
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useContext(AppContext);
    const user = payload();
    const [item, setItem] = useState({});
    const { idItem } = useParams();
    const getItem = async () =>{
        const SINGLE_ITEM_URL = `https://ecomerce-master.herokuapp.com/api/v1/item/${idItem}`;
        const { data } = await axios.get(SINGLE_ITEM_URL);
        setItem( data );
    }
    useEffect(() =>{
        getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const addToCart = () =>{
        const count = 1;
        const addedItems = { count, id: item._id, name: item.product_name, price: item.price, description: item.description, img: item.image, sku: item.sku}
        setState(currentState => [...currentState, addedItems]);
        console.log(state);
    }



    return(
        <>
            <Navbar/>
            {
                item.product_name
                ?
                <div className="lg:flex h-screen p-20 pt-10 rounded overflow-hidden shadow-lg">
                <img className="lg:w-auto" src={ item.image } alt={ item.product_name }/>
                    <div className="lg:flex-row pl-4">
                    <div className="px-6 py-4">
                        <div className="font-bold text-3xl mb-2">{ item.product_name }</div>
                            <h6 className="text-xs font-semibold text-gray-700 mr-2 mb-2">SKU { item.sku }</h6>
                            <p className="text-gray-700 text-lg">
                                { item.description }
                            </p>
                            <div className="text-3xl font-semibold text-gray-700 mr-2 mb-2">$MXN { item.price }</div>
                    </div>
                        {!user ?<p>Inicia secion para comprar</p> : ""}
                        <button onClick={addToCart} className="box-content max-h-20 w-1/4 px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none disabled:opacity-50" disabled={!user}>Comprar</button>
                        
                    </div>
                </div>
                :<h2>Cargando...</h2>
            }
            </>
    )
}

export default Item;