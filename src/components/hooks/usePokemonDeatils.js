import { useEffect, useState } from "react";

import axios from "axios"; 
// import usePokemonList from "./usePokemonList";
function usePokemonDeatils(id,pokemonName){
    // const {id}=useParams();

    const [pokemon,setPokemon]=useState({});

    // let pokemonListHokeResponse=[];

    // const [isLoading,setIsLoading]=useState(true);

    async function downloadPokemons(){
        try {
            let response;
        if(pokemonName){
            response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }
        else{
            response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        

        const pokemonOfSameTypes=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name :''}`)
      setPokemon({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weight:response.data.weight,
        height:response.data.height,
        types:response.data.types.map((t)=>t.type.name),
        similarPokemons:pokemonOfSameTypes.data.pokemon
      });
      // setIsLoading(false);
    //   return response;

    setPokemonListState({...PokemonListState,type:response.data.types ? response.data.types[0].type.name :''})
        } catch (error) {
           console.log("somethings want wrong");  
        }
        
    }

    
    const [pokemonListState, setPokemonListState] = useState({});
        useEffect(()=>{
        downloadPokemons();
    },[]);

    return [pokemon];

}

export default usePokemonDeatils;