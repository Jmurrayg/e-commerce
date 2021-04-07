/* eslint-disable import/no-anonymous-default-export */
import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [search,setSearch] = useState([]);
    return (
            <SearchContext.Provider value={[search,setSearch]}>
                {children}
            </SearchContext.Provider> 
    );
}

export const SearchContext = createContext();