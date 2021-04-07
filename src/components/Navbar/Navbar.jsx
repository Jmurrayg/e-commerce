/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import payload from '../../utils/payload';
import {ReactComponent as CartLogo} from '../../assets/shoppingCart.svg';
import {SearchContext} from '../SearchBar/searchProvider';
import {SearchTextContext} from '../SearchBar/searchTextProvider';
import logo from '../../assets/rubber-duck.png'




export default function Navbar(){
    const user = payload();
    const [text,setText] = useState("");
    const [search , setSearch] = useContext(SearchContext);
    const [searchText, setSearchText] = useContext(SearchTextContext);
    let result = [];
    

    
    
    const searchItems = () =>{

        if(result.length < 0){
            // eslint-disable-next-line array-callback-return
            return search.map(e => {
                if(e.product_name.includes(text)){
                    result.push(e);
                    console.log(result);
                }
            })
        }else {
            result = [];
            // eslint-disable-next-line array-callback-return
            return search.map(e => {
                if(e.product_name.includes(text)){
                    result.push(e);
                }
            })
        }
    }
    async function passData(){
        console.log('esperando');
        await searchItems();
        console.log(result, 'termine');
        setSearchText(result);


    }



    return(
      <header className=" md:flex md:items-center md:justify-between p-4 pr-20 pb-0 md:pb-4"
      style={{backgroundColor: "#2f3640"}}>
      <div className="flex items-center justify-between mb-4 md:mb-0">
      <img src={logo} className="w-11" alt="Logo" />
          <h1 className="leading-none text-2xl text-white">
          <Link className="no-underline text-white hover:text-black" to="/">
          Golden Duckling Store
          </Link>
          </h1>

          <Link className="text-black hover:text-orange md:hidden" to="#">
          <i className="fa fa-2x fa-bars"></i>
          </Link>
      </div>
      <div className="flex mb-4 w-full md:mb-0 md:w-1/4">
          <label className="hidden" for="search-form">Search</label>
          <input onChange={(evento) => setText(evento.target.value)} className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text"/>
          <button className="w-1/3 ml-3 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" onClick={passData} >Buscar</button>
      </div>
      <nav>
              {
              user
              ?
              <ul className="list-reset md:flex md:items-center">
              <Link to="/cart"><CartLogo/></Link>
              <div className="md:ml-4">
                  <div className="dropdown inline-block ml-3 relative">
                      <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                          <span className="sr-only">Open user menu</span>
                        {
                            user.profile_img
                            ?<img className="h-8 w-8 rounded-full" src={user.profile_img} alt=""/>
                            :<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        }
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      {
                          user.role === "ADMIN"
                          ?<li className=""><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/add">Agregar Item</Link></li>
                          :""
                      }
                          <li className=""><Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/logout">Logout</Link></li>
                      </ul>
                  </div>
              </div>
              </ul>
              :
              <ul className="list-reset md:flex md:items-center">
              <li className="md:ml-4">
                  <Link className="block no-underline hover:underline py-2 text-white hover:text-black md:border-none md:p-0" to="/login">
                  Login
                  </Link>
              </li>
              <li className="md:ml-4">
                  <Link className="border-t block no-underline hover:underline py-2 text-white hover:text-black md:border-none md:p-0" to="/signup">
                  Registro
                  </Link>
              </li>
              </ul>
              }
      </nav>
  </header>
    )
}


