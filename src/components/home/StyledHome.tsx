import Styled from "styled-components";

export const Wrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    @media (max-width: 450px){
        justify-content: space-around;
    }
`;

export const NotFound = Styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-style: italic;
    color: #DB092E;
    font-weight: 600;

`;
