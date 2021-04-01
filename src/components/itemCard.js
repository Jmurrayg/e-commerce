import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ _id, product_name, image, description, price}) => {
    return(
        <Link to={`item/${_id}`}>
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
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
      </Link>
    )
}

export default ItemCard;