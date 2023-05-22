import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPokemonData } from "../../../types";

import {
  ProgressBar,
  Progress,
  ContentStats,
  ContentBar,
} from "./StyledPokemonStats";

export default function PokemonStats() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<IPokemonData>();

  const pokeId = id?.toString().replace(/^0+/, "");
  useEffect(() => {
    const pokemonId = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const data = await response.json();
      setPokemon(data);
    };

    pokemonId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const progressBar = (points: number) => {
    return (
      <ProgressBar>
        <Progress points={points} colorType={pokemon?.types[0].type.name || ""}>
          <div>{points}</div>
        </Progress>
      </ProgressBar>
    );
  };

  return (
    <ContentStats>
      {pokemon?.stats.map((value, index: number) => {
        return (
          <ContentBar key={index}>
            <div>
              <p> {value.stat.name} </p>
            </div>
            <div>
              <p> {progressBar(value.base_stat)}</p>
            </div>
          </ContentBar>
        );
      })}
    </ContentStats>
  );
}
