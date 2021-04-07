/* eslint-disable import/no-anonymous-default-export */
import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [searchText,setSearchText] = useState([]);
    return (
            <SearchTextContext.Provider value={[searchText,setSearchText]}>
                {children}
            </SearchTextContext.Provider> 
    );
}

export const SearchTextContext = createContext();