import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonList from "../hooks/usePokemonList";
import usePokemonDeatils from "../hooks/usePokemonDeatils";

function PokemonDeatils(){

    const {id}=useParams();

    // const [pokemon,setPokemon]=useState({});

    const [pokemon]=usePokemonDeatils(id);

    // const [isLoading,setIsLoading]=useState(true);

    // async function downloadPokemons(){
    //     const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //   setPokemon({
    //     name:response.data.name,
    //     image:response.data.sprites.other.dream_world.front_default,
    //     weight:response.data.weight,
    //     height:response.data.height,
    //     types:response.data.types.map((t)=>t.type.name)
    //   })
      // setIsLoading(false);
    //   return response;
    // }

    // const [PokemonListState]=usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0] :'fire'}`,true);

    // useEffect(()=>{
    //     downloadPokemons();
    // },[])
 return(
    <div className="pokemon-details-wrapper">

        <img className="pokemon-details-image" src={pokemon.image}/>
        <div className="pokemon-details-name">   <span>{pokemon.name}</span>  </div>


        <div className="pokemon-details-name">Height:{pokemon.height}</div>
        <div className="pokemon-details-name">Weight:{pokemon.weight}</div>

        <div className="pokemon-details-types">
            {pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}
        </div>
        

        
        
        {
           pokemon.types && pokemon.similarPokemons &&
          <div>
          More {pokemon.types[0]}  type pokemons

          <ul>
            
            {  pokemon.similarPokemons .map((p)=>  <li key={p.pokemon.id}>{p.pokemon.name}</li>)}
            
          </ul>
        </div>
        }

    </div>
 );
}

export default PokemonDeatils;