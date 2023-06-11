import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { IPokemonData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import {
  Content,
  ContentIcon,
  ContentSearch,
  ContentTitle,
  Wrapper,
  ContentIconSearch,
  Bar,
  BarButton,
  ContentButton,
  Buttons,
  Text,
} from "./StyledSearch";

interface IProps {
  filteredPokemon: IPokemonData[];
  setFilteredPokemon: Dispatch<SetStateAction<IPokemonData[]>>;
  pokemonData: IPokemonData[];
  setPokemonData: Dispatch<SetStateAction<IPokemonData[]>>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

export default function SearchPokemon({
  filteredPokemon,
  setFilteredPokemon,
  pokemonData,
  setPokemonData,
  searchText,
  setSearchText,
}: IProps) {
  const [showSortButton, setShowSortButton] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = pokemonData?.filter((pokemon: IPokemonData) => {
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchText(e.target.value);
    setFilteredPokemon(filteredData);
  };

  const useClickOutside = (
    ref: React.RefObject<HTMLDivElement>,
    callback: () => void
  ) => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  };

  const sortPokemon = (sortBy:keyof IPokemonData) =>{
    const targetData= searchText === "" ? pokemonData : filteredPokemon;
    const sortedData = [...targetData].sort((a,b) =>{
      if(a[sortBy] > b[sortBy]){
        return 1
      }
      if(a[sortBy] < b[sortBy]){
        return -1
      }
      return 0
    })
    searchText === "" ? setPokemonData(sortedData): setFilteredPokemon(sortedData)
  }

  const sortByNumber= ()=>{
    sortPokemon("id")
  }

  const sortByName = ()=>{
    sortPokemon("name")
  }
  const handleClickButton = () => {
    return setShowSortButton(!showSortButton);
  };
  const handleOutsideClick = () => {
    setShowSortButton(false);
  };

  useClickOutside(ref, handleOutsideClick);
  return (
    <Wrapper>
      <Content>
        <ContentIcon>
          <Icon icon="mdi:pokeball" />
        </ContentIcon>
        <ContentTitle>
          <h1> Pokédex</h1>
        </ContentTitle>
      </Content>
      <ContentSearch>
        <ContentIconSearch>
          <FontAwesomeIcon icon={faSearch} />
        </ContentIconSearch>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchText}
        />
        <Bar>
          <BarButton type="button" onClick={handleClickButton}>
            <FontAwesomeIcon icon={faBars} />
          </BarButton>
          {showSortButton && (
            <ContentButton ref={ref}>
              <Text>Sort By</Text>
              <Buttons onClick={sortByNumber}>Number</Buttons>
              <Buttons onClick={sortByName}>Name</Buttons>
            </ContentButton>
          )}
        </Bar>
      </ContentSearch>
    </Wrapper>
  );
}
