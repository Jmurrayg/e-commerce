import React from 'react';
import { Link } from 'react-router-dom';

const SearchItemCard = ({ _id, product_name, image, description, price, category}) => {
    return(
        <Link style={{backgroundColor: "#ffffff", borderColor: "#b2bec3"}} className="border-2" to={`item/${_id}`}>
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={ image } alt={ product_name }/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{ product_name }</div>
                        <h6 className="text-sm font-semibold text-gray-700 mr-2 mb-2">${ price }</h6>
                        <p className="text-gray-700 text-base">
                            { description }
                        </p>
                </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
            </div>
        </div>
      </Link>
    )
}

export default SearchItemCard;