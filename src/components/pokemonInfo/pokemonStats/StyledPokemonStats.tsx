import Styled from "styled-components";

interface IColorType {
  colorType: string;
}

interface IProgress {
  points: number;
}

export const ContentStats = Styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 95%;
    justify-content: space-around;
    font-size: 0.7rem;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    margin-right: 3px;
    text-align: center;
    color: #ffffff;
    background-color: #b0b791;
    @media (max-width: 912px){
      flex-direction:row;
      flex-wrap:wrap;
      width:95%;
      height:35%;
      font-size:1.05rem;
      margin:0 auto;
      
    }
    @media (max-width:768px){
      font-size: 0.9rem;
      color:#ffffff;
    }
    @media (max-width: 412px){
      font-size:0.9rem;
    }
`;

export const ContentBar = Styled.div`
  @media (max-width: 912px){
    width:45%;
    height:25%;
  }
  @media (max-width: 768px){
    height:20%;
  }
`;

export const ProgressBar = Styled.div`
  width: 98%;
  height: 15px;
  border-radius: 6px;
  background-color: #e0e0de;
  overflow: hidden;
  margin: 0 auto;
  @media(max-width:912px){
    height: 25px;
  }
  @media (max-width: 768px){
    height: 20px;
  }
  @media (max-width: 412px){
      height:18px;
    }
`;

export const Progress = Styled.div<IProgress & IColorType>`
  width: ${({ points }) => (points / 200) * 100}%;
  height: 100%;
  border-radius: 6px;
  background-color: ${({ colorType }) => color[colorType] || "#ffffff"};
`;

const color: Record<string, string> = {
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
