import { useEffect, useState } from "react";
import PokemonList from "../../PokemonList/PokemonList";
import Search from "../Search";

import './Pokedex.css';
import PokemonDeatils from "../../PokemonDeatils/PokemonDeatils";

function Pokedex(){

    const [searchTerm,setSearchTerm]=useState('');

    // useEffect(()=>{},[searchTerm]);     
    return (
        <div className="Pokedex-wrapper">
       

        {/* <button> Submit</button> */}
        <Search updateSearchTerm={setSearchTerm}/>
        
        {(!searchTerm)?<PokemonDeatils key={searchTerm}pokemonName={searchTerm} />:''}
        </div>
    )
}

export default Pokedex;