import Styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(360deg);
    }

`;

export const ContentLoading = Styled.div`
    width:90%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const LoadingPokemonCircle = Styled.div`
    display:block;
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: ${rotateAnimation} 1s linear infinite;


`;

export const NoMoreContent = Styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DB092E;
    color: white;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 600;

`;
