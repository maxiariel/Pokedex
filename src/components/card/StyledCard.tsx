import Styled from "styled-components";

interface IColorType{
    colorType: string
}

interface IProgress{
    points: number
}

export const Loading = Styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    text-align:center;
    color:white;
    background-color: #DB092E;
    font-size: 3rem;
`

export const Wrapper = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const ContentBackground= Styled.div`
    position: absolute;
    z-index: -50;
    width: 100%;
    height: 100vh;
    background-color: #e5e5e5;
    overflow: hidden;
`
export const ImageBackground = Styled.img`
    width: 100%;
    background: #e5e5e5;
    position: absolute;
    left: 41%;
    height: 100%;
`
export const Cards = Styled.div`
    display: flex;
    width: 80%;
    height: 70%;
    justify-content: space-evenly;
    align-items: center;
    text-transform:capitalize;
    box-shadow: 0px 4px 5px 0px rgb(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: #5f5f5f;
`;

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
    background-color: ${({ colorType })=> color[colorType] || '#ffffff'};
`;

export const ContentName = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 25%;
    align-items:center;
    
`
export const Name = Styled.p`
    margin-top: 0;
    font-size: 1.3rem;
    color: #030303;
`
export const Icon = Styled.div`
    color: #ffffff;
    font-size: 2rem;
    padding-bottom:20px;
    &> a{
        color:white;
        text-decoration:none;
    }
`
export const ContentImg = Styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: baseline;
`
export const IconImg = Styled.div`
    font-size:1.5rem;
    padding-bottom: 20px;
    color: #ffffff;
    &> a{
        color:white;
        text-decoration:none;
    }
`

export const Img = Styled.img`
    object-fit: cover;
    height: 100%;
`
export const ContentType = Styled.div`
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    height:15%;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 10px;
`
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
    background-color: ${({ colorType })=> color[colorType] || '#ffffff'};
`

export const ContentProps = Styled.div`
    display: flex;
    width: 33%;
    height: 95%;
    flex-direction: column;
    justify-content: space-around;
    text-align:center;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 5px;
`;

export const Property = Styled.div`
    border-bottom: 1px solid #e5e5e5;
    color: #a5a5a5;
`

export const Description = Styled.p`
    border-bottom: 1px solid #a5a5a5;
    width: 25%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 3px;
    color: #030303;
`
export const P = Styled.p`
    color: #030303;
`

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
    color: #050505;
    background-color: #b0b791;
`;

export const ProgressBar = Styled.div`
  width: 100%;
  height: 18px;
  border-radius: 6px;
  background-color: #e0e0de;
  overflow: hidden;
`;

export const Progress = Styled.div<IProgress & IColorType>`
  width: ${({points}) => (points / 200) * 100}%;
  height: 100%;
  border-radius: 6px;
  background-color: ${({ colorType })=> color[colorType] || '#ffffff'};
`;






const color:any= {
    normal: '#a8a090',
    fighting: '#a05038',
    flying: '#98a8f0',
    poison: '#b058a0',
    ground:'#e9d6a4',
    rock: '#b8a058',
    bug: '#a8b820',
    ghost: '#6060b0',
    steel: '#a8a8c0',
    fire: '#f05030',
    water: '#3899f8',
    grass: '#78c850',
    electric: '#f8d030',
    psychic: '#f870a0',
    ice: '#58c8e0',
    dragon: '#7860e0',
    dark: '#7a5848',
    fairy: '#e79fe7'
}