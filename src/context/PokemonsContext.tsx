import { createContext, useState, useEffect } from "react";
import { IPokemonData } from "../types";

interface IProps {
  children: React.ReactNode;
}

interface IPropsContext {
  pokemonData: IPokemonData[];
  setPokemonData: React.Dispatch<React.SetStateAction<IPokemonData[]>>;
}

export const PokemonsContext = createContext<IPropsContext>({
  pokemonData: [],
  setPokemonData: () => {},
});

export default function PokemonsProvider({ children }: IProps) {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    const data = await response.json();
    const pokemonDetail = await Promise.all(
      data.results?.map(async (pokemon: IPokemonData) => {
        const reponse = await fetch(pokemon.url);
        const pokemonData = await reponse.json();
        const id = pokemonData.id.toString().padStart(3, "0");
        return { ...pokemonData, id };
      })
    );
    setPokemonData(pokemonDetail);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const value = {
    pokemonData,
    setPokemonData,
  };
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
}
