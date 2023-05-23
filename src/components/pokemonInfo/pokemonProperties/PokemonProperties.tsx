import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ContentProps,
  Property,
  Description,
  P,
  ContentAbilities,
  Ability,
} from "./StyledPokemonProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";
import { IPokemonData } from "../../../types";

export default function PokemonProperties() {
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

  return (
    <ContentProps>
      <Property>
        <FontAwesomeIcon icon={faWeightHanging} />
        <Description>weight </Description>
        <P>{pokemon?.weight}</P>
      </Property>
      <Property>
        <FontAwesomeIcon icon={faRulerVertical} />
        <Description>height</Description>
        <P>{pokemon?.height} </P>
      </Property>
      <ContentAbilities>
        <Description>Moves</Description>
        <Ability>
          {pokemon?.abilities.map((value, index: number) => {
            return <P key={index}>{value.ability.name}</P>;
          })}
        </Ability>
      </ContentAbilities>
    </ContentProps>
  );
}
