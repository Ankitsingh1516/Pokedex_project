import { useState } from "react";
function usePokemonList(){
    const [PokemonListState,setPokemonListState]=useState({

        pokemonList:[],
        IsLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:''
     });

     async function downloadPokemons(){
        // setIsLoading(true);
        setPokemonListState( (state) => ({...state,IsLoading:true}));
        // const response=await axios.get(pokedexUrl);//This download list of 20 pokemons
         
        const response=await axios.get(PokemonListState.pokedexUrl);
        const pokemonResults=response.data.results;//We get the Array of pokeimons from the  result;Here the array contains the name of pokemon and its url details

        console.log(response.data);
       

         console.log("response is " ,response.data,response.data.next)
        console.log(PokemonListState);

        // setNextUrl(response.data.next);
        setPokemonListState((state)=>({

            ...state,
            nextUrl: response.data.next,
            prevUrl: response.data.previous


     }));
        // setPrevUrl(response.data.previous);
        

        //iterating over the Array of pokemons, and using their url to create the array of promises
        //That will download those 20 pokemons;

       const pokemonResultPromise=pokemonResults.map( (pokemon) => axios.get(pokemon.url))
          

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

    //    setPokemonList(pokeListResult);
    setPokemonListState((state)=>({

        ...state,
        pokemonList:pokeListResult,
        IsLoading:false
    }));
        // setIsLoading(false);
     } 
}
export default usePokemonList;