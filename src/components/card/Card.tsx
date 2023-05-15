import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IPokemonData } from "../../types";
import pokeball from ".//pokeball.svg";
import {
  Loading,
  Wrapper,
  Cards,
  ContentInfo,
  ContentProps,
  ContentStats,
  Property,
  P,
  Description,
  ContentName,
  Name,
  ContentImg,
  Img,
  ContentType,
  Types,
  Icon,
  ContentBackground,
  ImageBackground,
  IconImg,
  ProgressBar,
  Progress,
} from "./StyledCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  const { id }: any = useParams();
  const [pokemon, setPokemon] = useState<IPokemonData>();
  const [currentId, setCurrentId] = useState<number>(parseInt(id));
  const navigate = useNavigate()

  const pokeId = id?.toString().replace(/^0+/, "");
  const pokemonId = pokeId?.toString().padStart(3, "0");
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

  const handleCLickNext = async () => {
    const nextId = currentId + 1;
    setCurrentId(nextId);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextId}`);
    const data = await response.json();
    setPokemon(data);
    navigate(`/${nextId}`); // Navigate programmatically
  };

  const handleClickPreviuos = async () => {
    const prevId = currentId - 1;
    setCurrentId(prevId);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${prevId}`);
    const data = await response.json();
    setPokemon(data);
    navigate(`/${prevId}`); // Navigate programmatically
  };

  useEffect(()=>{
    setCurrentId(parseInt(id))
  },[id])

  if (!pokemon) {
    return <Loading>Loading....</Loading>;
  }

  const progressBar = ({ points }: any) => {
    return (
      <ProgressBar>
        <Progress points={points} colorType={pokemon?.types[0].type.name}>
          <div>{points}</div>
        </Progress>
      </ProgressBar>
    );
  };

  return (
    <Wrapper>
      <ContentBackground>
        <ImageBackground src={pokeball} alt="pokeball-background" />
      </ContentBackground>
      <Cards>
        <ContentInfo colorType={pokemon?.types[0].type.name}>
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
            <IconImg>
              <Link to={`/${currentId}`}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={handleClickPreviuos}
                  role="button"
                />
              </Link>
            </IconImg>
            <Img
              src={`${pokemon?.sprites.front_default}`}
              alt={pokemon?.name}
            />
            <IconImg>
              <Link to={`/${currentId}`}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={handleCLickNext}
                  role="button"
                />
              </Link>
            </IconImg>
          </ContentImg>
          <ContentType>
            {pokemon?.types.map((value: any, index: number) => {
              return (
                <Types key={index} colorType={value.type.name}>
                  <p>{value.type.name}</p>
                </Types>
              );
            })}
          </ContentType>
        </ContentInfo>
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
          <div>
            <Description>Moves</Description>
            {pokemon?.abilities.map((value, index: number) => {
              return <P key={index}>{value.ability.name}</P>;
            })}
          </div>
        </ContentProps>

        <ContentStats>
          {pokemon?.stats.map((value, index: number) => {
            return (
              <div key={index}>
                <div>
                  <p> {value.stat.name} </p>
                </div>
                <div>
                  <p> {progressBar({ points: value.base_stat })}</p>
                </div>
              </div>
            );
          })}
        </ContentStats>
      </Cards>
    </Wrapper>
  );
}
