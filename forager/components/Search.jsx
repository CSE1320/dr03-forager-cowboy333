import { useState } from "react";
const Search = ({onSearch}) => {
    const [list, setList] =  useState("");
    const handleInput = (input) => {
        const value = input.target.value;
        setList(value);
        onSearch(value);
    };
    return(
        <div>
            <input type="text" placeholder="Search" value={list} onChange={handleInput} className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"/>
        </div>
    );
};
export default Search;