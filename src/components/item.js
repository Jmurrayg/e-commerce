import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import payload from '../utils/payload';
import { useParams } from 'react-router-dom';

const Item = () =>{
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

    return(
        <>
            <Navbar/>
            {
                item.product_name
                ?
                <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={ item.image } alt={ item.product_name }/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{ item.product_name }</div>
                            <h6 className="text-sm font-semibold text-gray-700 mr-2 mb-2">${ item.price }</h6>
                            <p className="text-gray-700 text-base">
                                { item.description }
                            </p>
                            {
                                user
                                ?<button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none disabled:opacity-50">Comprar</button>
                                :<button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none disabled:opacity-50" disabled>Comprar</button>
                            }

                    </div>
                </div>
                :<h2>Cargando...</h2>
            }
        </>
    )
}

export default Item;