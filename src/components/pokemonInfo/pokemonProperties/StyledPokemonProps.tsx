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
        height:18%;
        align-items:center;
        border:none;
        font-size: 1.15rem;
    }
    @media (max-width: 412px){
      font-size:1rem;
      height:20%;
    }
`;

export const Property = Styled.div`
    border-bottom: 1px solid #e5e5e5;
    color: #a5a5a5;
    @media (max-width: 912px){
        width:30%;
        border:none;
        margin: 0 auto;
    }
`;
export const ContentAbilities = Styled.div`
    border-bottom: 1px solid #a5a5a5;
    width: 25%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 3px;
    color: #030303;
    @media (max-width: 912px){
        width:30%;
        border:none;
    }

`
export const Description = Styled.p`
    border-bottom: 1px solid #a5a5a5;
    width: 25%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 3px;
    color: #030303;
    @media (max-width: 912px){
        width:70%;
        color:#030303;
    }
`;
export const P = Styled.p`
    color: #030303;
`;