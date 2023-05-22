import { useContext, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { IPokemonData } from "../../types";
import SearchPokemon from "../Search/SearchPokemon";
import { NotFound, Wrapper } from "./StyledHome";

import PokemonMap from "../pokemonMap/PokemonMap";
import PokemonFilter from "../pokemonFilter/PokemonFIlter";

export default function Home() {
  const { pokemonData, setPokemonData } = useContext(PokemonsContext);
  const [searchText, setSearchText] = useState<string>("");

  const [filteredPokemon, setFilteredPokemon] = useState<IPokemonData[]>(
    pokemonData || []
  );

  const notFoundPokemon = () => {
    if (filteredPokemon.length === 0 && searchText) {
      return <NotFound> Pokemon not Found</NotFound>;
    }
  };

  return (
    <>
      <SearchPokemon
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Wrapper>
        {notFoundPokemon()}
        {!searchText ? <PokemonMap /> : <PokemonFilter filteredPokemon={filteredPokemon}/>}
      </Wrapper>
    </>
  );
}
