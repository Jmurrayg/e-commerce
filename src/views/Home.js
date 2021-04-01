import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ItemCard from '../components/itemCard';


export default function Home(){

    const [items, setItems] = useState("");

    async function getItems(){
      try{
        const { data } = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
        setItems(data);
      } catch(error){
        alert('Ocurrio un error');
      }
    }

    useEffect(() =>{
      setTimeout(getItems, 10);
    },[]);

    const itemResult = () =>{
      return items.map(itemObject =>{
        return <ItemCard
                key={itemObject.id}
                _id={itemObject.id}
                product_name={itemObject.product_name}
                description={itemObject.description}
                price={itemObject.price}
                image={itemObject.image}
                />
      });
    }

    return (
        <>
            <Navbar />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {
                items.length 
                ? itemResult()
                : <p>Cargando...</p>
              }
            </div>
        </>
    )

}