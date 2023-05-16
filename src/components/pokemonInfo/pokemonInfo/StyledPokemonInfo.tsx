import Styled from "styled-components";

interface IColorType {
  colorType: string;
}

export const ContentInfo = Styled.div<IColorType>`
    display: flex;
    width: 33%;
    height: 95%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    margin-left: 3px;
    background-color: ${({ colorType }) => color[colorType] || "#ffffff"};

    @media (max-width: 912px){
    width: 95%;
    height: 35%;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 6px 7px;
    }
`;

export const ContentName = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 25%;
    align-items:center;
`;
export const Name = Styled.p`
    margin-top: 0;
    font-size: 1.3rem;
    color: #030303;
    
    @media (max-width: 912px){
        font-size:2rem;
    }
    @media (max-width: 412px){
        font-size:1.5rem;
    }
`;
export const Icon = Styled.div`
    color: #ffffff;
    font-size: 2rem;
    padding-bottom:20px;
    &> a{
        color:white;
        text-decoration:none;
    }
    @media (max-width: 912px){
        font-size:3rem;
        padding-bottom:30px;
    }
    @media (max-width: 412px){
        font-size:2rem;
    }
`;
export const ContentImg = Styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    @media (max-width: 912px){
        justify-content: space-evenly;
    }
`;
export const IconImg = Styled.div`
    font-size:1.5rem;
    padding-bottom: 20px;
    color: #ffffff;
    &> a{
        color:white;
        text-decoration:none;
    }
    @media (max-width: 912px){
        font-size:2.3rem;
    }
    @media (max-width: 412px){
        font-size:1.8rem;
    }
`;

export const Img = Styled.img`
    object-fit: cover;
    height: 100%;
`;
export const ContentType = Styled.div`
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    height:15%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
`;
export const Types = Styled.div<IColorType>`
    width: 30%;
    color:white;
    margin: 0;
    height: 30px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px 50px 50px 50px;
    background-color: ${({ colorType }) => color[colorType] || "#ffffff"};
    @media (max-width: 412px){
        height:20px;
    }
    `;

const color: any = {
  normal: "#a8a090",
  fighting: "#a05038",
  flying: "#98a8f0",
  poison: "#b058a0",
  ground: "#e9d6a4",
  rock: "#b8a058",
  bug: "#a8b820",
  ghost: "#6060b0",
  steel: "#a8a8c0",
  fire: "#f05030",
  water: "#3899f8",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f870a0",
  ice: "#58c8e0",
  dragon: "#7860e0",
  dark: "#7a5848",
  fairy: "#e79fe7",
};
