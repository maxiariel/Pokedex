import { useState, useEffect, useRef } from "react";
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
  setFilteredPokemon: React.Dispatch<React.SetStateAction<IPokemonData[]>>;
  pokemonData: IPokemonData[];
  setPokemonData: React.Dispatch<React.SetStateAction<IPokemonData[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
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

  const sortByNumber = () => {
    if (searchText === "") {
      const sortName = [...pokemonData].sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      setPokemonData(sortName);
    } else {
      const sortName = [...filteredPokemon].sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      setFilteredPokemon(sortName);
    }
  };

  const sortByName = () => {
    if (searchText === "") {
      const sortName = [...pokemonData].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setPokemonData(sortName);
    } else {
      const sortName = [...filteredPokemon].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setFilteredPokemon(sortName);
    }
  };
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
