import PokemonList from "../../PokemonList/PokemonList";
import Search from "../Search";

import './Pokedex.css';

function Pokedex(){
    return (
        <div className="Pokedex-wrapper">
        <h1 id="pokedex-heading">Pokedex</h1>

        {/* <button> Submit</button> */}
        <Search/>
        <PokemonList/>
        </div>
    )
}

export default Pokedex;