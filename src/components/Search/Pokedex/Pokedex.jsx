import PokemonList from "../../PokemonList/PokemonList";
import Search from "../Search";

import './Pokedex.css';

function Pokedex(){
    return (
        <div className="Pokedex-wrapper">
       

        {/* <button> Submit</button> */}
        <Search/>
        <PokemonList/>
        </div>
    )
}

export default Pokedex;