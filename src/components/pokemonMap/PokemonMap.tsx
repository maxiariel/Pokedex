import { useContext, useEffect } from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { IPokemonData } from "../../types";
import { Link } from "react-router-dom";
import { Card, Content } from "./StyledPokemonMap";

export default function PokemonMap(): JSX.Element {
  const { pokemonData, setIsPokemonMap } = useContext(PokemonsContext);

  useEffect(() => {
    setIsPokemonMap(true);
    return () => setIsPokemonMap(false);
  }, []);

  return (
    <>
      {pokemonData?.map((pokemon: IPokemonData) => {
        return (
          <Card key={pokemon.id}>
            <Link to={`/${pokemon.id}`}>
              <Content>
                <p>#{pokemon.id}</p>
              </Content>
              <Content>
                <img
                  src={`${pokemon.sprites.front_default}`}
                  alt={pokemon.name}
                />
              </Content>
              <Content>
                <p>{pokemon.name}</p>
              </Content>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
