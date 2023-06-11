import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPokemonData } from "../../../types";
import {
  ContentInfo,
  ContentName,
  Icon,
  Name,
  ContentImg,
  IconImg,
  Img,
  ContentType,
  Types,
  ContentIcon,
} from "./StyledPokemonInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PokemonInfo() {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<IPokemonData>();
  const [currentId, setCurrentId] = useState<number>(parseInt(id || "1", 10));
  const navigate = useNavigate();
  const urlInfo = process.env.REACT_APP_API_URL_INFO;

  const pokeId = id?.toString().replace(/^0+/, "");
  const pokemonId = pokeId?.toString().padStart(3, "0");
  useEffect(() => {
    const pokemonId = async () => {
      const response = await fetch(`${urlInfo}${pokeId}`);
      const data = await response.json();
      setPokemon(data);
    };

    pokemonId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleCLickNext = async () => {
    const nextId = currentId + 1;
    setCurrentId(nextId);
    const response = await fetch(`${urlInfo}${nextId}`);
    const data = await response.json();
    setPokemon(data);
    navigate(`/${nextId}`); // Navigate programmatically
  };

  const handleClickPreviuos = async () => {
    const prevId = currentId - 1;
    setCurrentId(prevId);
    const response = await fetch(`${urlInfo}${prevId}`);
    const data = await response.json();
    setPokemon(data);
    navigate(`/${prevId}`); // Navigate programmatically
  };

  useEffect(() => {
    setCurrentId(parseInt(id || "1"));
  }, [id]);

  return (
    <ContentInfo colorType={pokemon?.types[0].type.name || ""}>
      <ContentName>
        <Icon>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </Icon>
        <Name>{pokemon?.name}</Name>
        <Name>#{pokemonId}</Name>
      </ContentName>
      <ContentImg>
        <Img src={`${pokemon?.sprites.front_default}`} alt={pokemon?.name} />
      </ContentImg>
      <ContentIcon>
        <IconImg>
          {currentId > 1 ? (
            <Link to={`/${currentId}`}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={handleClickPreviuos}
                role="button"
              />
            </Link>
          ) : (
            <FontAwesomeIcon icon={faChevronLeft} style={{ display: "none" }} />
          )}
        </IconImg>
        <IconImg>
          {currentId < 151 ? (
            <Link to={`/${currentId}`}>
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={handleCLickNext}
                role="button"
              />
            </Link>
          ) : (
            <FontAwesomeIcon icon={faChevronLeft} style={{ display: "none" }} />
          )}
        </IconImg>
      </ContentIcon>
      <ContentType>
        {pokemon?.types.map((value: any, index: number) => {
          return (
            <Types key={index} colorType={value.type.name || ""}>
              <p>{value.type.name}</p>
            </Types>
          );
        })}
      </ContentType>
    </ContentInfo>
  );
}
