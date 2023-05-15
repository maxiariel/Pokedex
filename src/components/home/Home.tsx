import { useContext, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { IPokemonData } from "../../types";
import SearchPokemon from "../Search/SearchPokemon";
import { Card, Content, Wrapper } from "./StyledHome";
import { Link } from "react-router-dom";

export default function Home() {
  const { pokemonData, setPokemonData } = useContext(PokemonsContext);
  const [searchText, setSearchText] = useState<string>("");

  const [filteredPokemon, setFilteredPokemon] = useState<IPokemonData[]>(
    pokemonData || []
  );

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
        {!searchText
          ? pokemonData?.map((pokemon: IPokemonData) => {
              return (
                <Card key={pokemon.id}>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <p>#{pokemon.id}</p>
                    </Link>
                  </Content>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <img
                        src={`${pokemon.sprites.front_default}`}
                        alt={pokemon.name}
                      />
                    </Link>
                  </Content>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <p>{pokemon.name}</p>
                    </Link>
                  </Content>
                </Card>
              );
            })
          : filteredPokemon?.map((pokemon: IPokemonData) => {
              return (
                <Card key={pokemon.id}>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <p>#{pokemon.id}</p>
                    </Link>
                  </Content>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <img
                        src={`${pokemon.sprites.front_default}`}
                        alt={pokemon.name}
                      />
                    </Link>
                  </Content>
                  <Content>
                    <Link to={`/${pokemon.id}`}>
                      <p>{pokemon.name}</p>
                    </Link>
                  </Content>
                </Card>
              );
            })}
      </Wrapper>
    </>
  );
}
