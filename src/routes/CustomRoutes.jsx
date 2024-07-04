import { Routes,Route } from "react-router-dom";
import Pokedex from "../components/Search/Pokedex/Pokedex";
import PokemonDeatils from "../components/PokemonDeatils/PokemonDeatils";
function CustomRoutes(){
    return ( 
       
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokemonDeatils/>}/>
        </Routes>

    );
}
export default CustomRoutes;