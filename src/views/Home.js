import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ItemCard from '../components/itemCard';
import {SearchContext} from '../components/SearchBar/searchProvider';
import {SearchTextContext} from '../components/SearchBar/searchTextProvider';


export default function Home(){

  // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [search , setSearch] = useContext(SearchContext);
    const [searchText,setSearchText] = useContext(SearchTextContext);

    async function getItems(){
      try{
        const { data } = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
        setItems(data);
      } catch(error){
        alert('Ocurrio un error');
      }
    }

    const listItems = () =>{
     setSearch(items);
    }

    useEffect(() =>{
      setTimeout(getItems, 10);
    },[]);

    useEffect(() =>{
      setTimeout(listItems,20);
    })



    const itemResult = () =>{
      if(searchText.length <= 0){
        return items.map(itemObject =>{
          return <ItemCard
                  key={itemObject._id}
                  _id={itemObject._id}
                  product_name={itemObject.product_name}
                  description={itemObject.description}
                  price={itemObject.price}
                  image={itemObject.image}
                  category={itemObject.category}
                  />
        });
      }else{
        return searchText.map(itemObject =>{
          return <ItemCard
                  key={itemObject._id}
                  _id={itemObject._id}
                  product_name={itemObject.product_name}
                  description={itemObject.description}
                  price={itemObject.price}
                  image={itemObject.image}
                  category={itemObject.category}
                  />
        });
      }
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