/* eslint-disable import/no-anonymous-default-export */
import React, { useContext} from 'react';
import { AppContext } from '../components/Provider';
import Navbar from '../components/Navbar';

export const Cart = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useContext(AppContext);
  const totalPrice = state.reduce((acc, curr) => acc + curr.price, 0);

  const removeFromCart = (item) =>{
    console.log('funciono', item);
    const cartItems = [...state];
    const index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
    setState(cartItems);
  }


  return ( 
    <>
    <Navbar/>
    <div className="p-20 pt-10">
    {
      state.map(item =>(
        <div className="flex p-10">
        <div className="flex-none w-48 relative">
          <img src={item.img} alt={item.name} className="absolute rounded inset-0 w-full h-full object-cover" />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              {item.name}
            </h1>
            <div className="text-xl font-semibold text-gray-500">
              ${item.price}
            </div>
          </div>
          <div className="flex space-x-3 mb-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3 flex-row-reverse">
              <button
              style={{backgroundColor: "red"}}
              type="button" onClick={() => removeFromCart(item)} className="p-4 mt-2 flex items-center justify-center rounded-md border border-gray-300 justify-items-end">Eliminar</button>
            </div>
          </div>
        </form>
      </div>
      ))
    }
    <div className="flex mb-4 text-2xl">
    <h4 className="flex-auto flex space-x-3 flex-row-reverse">Total: ${totalPrice}</h4>
    </div>
    </div>
    </>
   );
}

