import { IPokemonData } from "../../types";
import { Link } from "react-router-dom";

import { Card, Content } from "./StyledPokemonFilter";

interface IFilterPokemon {
  filteredPokemon: IPokemonData[];
}

export default function PokemonFilter({
  filteredPokemon,
}: IFilterPokemon): JSX.Element {
  return (
    <>
      {filteredPokemon?.map((pokemon: IPokemonData) => {
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
    </>
  );
}
