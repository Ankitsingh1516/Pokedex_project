import { useEffect,useState } from "react";

import axios from "axios";

import './PokemonList.css';

import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../hooks/usePokemonList";

function PokemonList(){

    //  const [pokemonList, setPokemonList]=useState([]);
     //Till ouer data is dowloading 

    //  const [IsLoading,setIsLoading]=useState(true);

    //  const [pokedexUrl,setPokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon');

    //  const [NextUrl,setNextUrl]=useState('');

    //  const [PrevUrl,setPrevUrl]=useState('');
          

    const [PokemonListState,setPokemonListState]=usePokemonList(false);
    

//    const [x, setX] = useState(0);
//    const [y, setY] = useState(0);

    return (
        // <>
        <div className="Pokemon-List_wrapper">
                 
           

              <div className="pokemon-wrapper">
              {(PokemonListState.IsLoading)?'Loading.....': PokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
              </div>

              <div className="Controls">
                {/* <button disabled={PokemonListState.PrevUrl == null} onClick={()=> setPokedexUrl(PrevUrl)}>Prev</button>
                <button  disabled={PokemonListState.NextUrl == null} onClick={()=> setPokedexUrl(NextUrl)} >Next</button> */}
                 <button disabled={PokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = PokemonListState.prevUrl;
                    setPokemonListState({ ...PokemonListState, pokedexUrl: urlToSet})
                }}>Prev</button>
                <button disabled={PokemonListState.nextUrl == null} onClick={() => {
                    console.log(PokemonListState)
                    const urlToSet = PokemonListState.nextUrl;
                    setPokemonListState({ ...PokemonListState, pokedexUrl: urlToSet})
                }}>Next</button>
              </div>
               
          
        </div>
        
        // </>
    )
}
export default PokemonList;