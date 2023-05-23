import Styled from "styled-components";

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
    @media (max-width: 912px){
        flex-direction:row;
        width:95%;
        height:24%;
        align-items:center;
        border:none;
        font-size: 1.15rem;
    }
    @media (max-width: 768px){
        font-size:1.03rem;
    }
    @media (max-width: 412px){
      font-size:1rem;
      height:20%;
    }
`;

export const Property = Styled.div`
    border-bottom: 1px solid #b5b5b5;
    color: #a5a5a5;
    font-size:1rem;
    height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 912px){
        width:30%;
        border:none;
        margin: 0 auto;
    }
`;
export const ContentAbilities = Styled.div`
    width: 100%;
    margin: 0 auto;
    color: #030303;
    height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 912px){
        width:30%;
        border:none;
    }
`;

export const Ability = Styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    @media (max-width: 1180px){
        flex-direction: column;
        
    }

`;
export const Description = Styled.p`
    border-bottom: 1px solid #a5a5a5;
    width: 25%;
    margin: 0 auto;
    padding-bottom: 15px;
    color: #030303;
    @media (max-width: 912px){
        width:70%;
        color:#030303;
    }
`;
export const P = Styled.p`
    color: #030303;
`;
