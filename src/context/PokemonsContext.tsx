import { createContext, useState, useEffect } from "react";
import { IPokemonData } from "../types";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  ContentLoading,
  LoadingPokemonCircle,
  NoMoreContent,
} from "./StyledLoading";

interface IProps {
  children: React.ReactNode;
}

interface IPropsContext {
  pokemonData: IPokemonData[];
  setPokemonData: React.Dispatch<React.SetStateAction<IPokemonData[]>>;
  setIsPokemonMap: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonsContext = createContext<IPropsContext>({
  pokemonData: [],
  setPokemonData: () => {},
  setIsPokemonMap: () => {},
  setIsCard: () => {},
});

export default function PokemonsProvider({ children }: IProps) {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isPokemonMap, setIsPokemonMap] = useState(true);
  const [isCard, setIsCard] = useState(true);
  const limit = 10;

  const fetchPokemons = async () => {
    const offset = pokemonData.length;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    const newPokemons = await Promise.all(
      data.results?.map(async (pokemon: IPokemonData) => {
        const reponse = await fetch(pokemon.url);
        const pokemonData = await reponse.json();
        const id = pokemonData.id.toString().padStart(3, "0");
        return { ...pokemonData, id };
      })
    );
    setPokemonData((prevData) => {
      const filteredPokemons = newPokemons.filter(
        (pokemon) => !prevData.some((p) => p.id === pokemon.id)
      );
      return [...prevData, ...filteredPokemons];
    });
    if (offset >= 140) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleFetchMorePokemons = () => {
    fetchPokemons();
  };
  const NoMorePokemon = () => {
    if (!hasMore && isPokemonMap) {
      return (
        <NoMoreContent>
          <p>No more Pokemon to load.</p>
        </NoMoreContent>
      );
    }
  };

  const value = {
    pokemonData,
    setPokemonData,
    setIsPokemonMap,
    setIsCard,
  };

  return (
    <PokemonsContext.Provider value={value}>
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={handleFetchMorePokemons}
        hasMore={hasMore}
        loader={
          <ContentLoading>
            <LoadingPokemonCircle />
          </ContentLoading>
        }
        endMessage={NoMorePokemon()}
      >
        {children}
      </InfiniteScroll>
    </PokemonsContext.Provider>
  );
}
