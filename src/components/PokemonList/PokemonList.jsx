import { useEffect,useState } from "react";

import axios from "axios";

import './PokemonList.css';

import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){

     const [pokemonList, setPokemonList]=useState([]);
     //Till ouer data is dowloading 

     const [IsLoading,setIsLoading]=useState(true);

     const POKEDEX_URL='https://pokeapi.co/api/v2/pokemon';

     async function downloadPokemons(){
        const response=await axios.get(POKEDEX_URL);//This download list of 20 pokemons
        
        const pokemonResults=response.data.results;//We get the Array of pokeimons from the  result;Here the array contains the name of pokemon and its url details

        console.log(response.data);

        //iterating over the Array of pokemons, and using their url to create the array of promises
        //That will download those 20 pokemons;

       const pokemonResultPromise=pokemonResults.map( (pokemon) => axios.get(pokemon.url));
          

       // Passing that promise array to axios.all
       const pokemonData=await axios.all(pokemonResultPromise);//Array of 20 pokemons details data 

       console.log(pokemonData);

       //now iterate the  data of each pokemon ,and  extract id,name, image , types 

       const pokeListResult=pokemonData.map((pokeData) => { 

        const pokemon=pokeData.data;

        return {
            id:pokemon.id,
            name: pokemon.name, 
            image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
            type:pokemon.types
        }
       } );
       console.log(pokeListResult);

       setPokemonList(pokeListResult);
        setIsLoading(false);
     }
   useEffect( () => {
    
      downloadPokemons();
   },[] );

//    const [x, setX] = useState(0);
//    const [y, setY] = useState(0);

    return (
        // <>
        <div className="Pokemon-List_wrapper">
                 
           

              <div className="pokemon-wrapper">
              {(IsLoading)?'Loading.....': pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)}
              </div>

              <div className="Controls">
                <button>Prev</button>
                <button>Next</button>
              </div>
               
          
        </div>
        
        // </>
    )
}
export default PokemonList;