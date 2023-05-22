import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonData } from "../../types";
import pokeball from "../../assets/pokeball.svg";
import PokemonInfo from "../pokemonInfo/pokemonInfo/PokemonInfo";
import PokemonProperties from "../pokemonInfo/pokemonProperties/PokemonProperties";
import PokemonStats from "../pokemonInfo/pokemonStats/PokemonStats";
import {
  Loading,
  Wrapper,
  Cards,
  ContentBackground,
  ImageBackground,
} from "./StyledCard";
import { PokemonsContext } from "../../context/PokemonsContext";

export default function Card() {
  const { id } = useParams();
  const { setIsCard } = useContext(PokemonsContext);
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



  useEffect(()=>{
    setIsCard(true)
    return(()=>{
      setIsCard(false)
    })
  }, [])

  
  if (!pokemon) {
    return <Loading>Loading....</Loading>;
  }



  return (
    <Wrapper>
      <ContentBackground>
        <ImageBackground src={pokeball} alt="pokeball-background" />
      </ContentBackground>
      <Cards>
        <PokemonInfo />
        <PokemonProperties />
        <PokemonStats />
      </Cards>
    </Wrapper>
  );
}
