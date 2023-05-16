import Styled from "styled-components";

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
`;

export const Wrapper = Styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 912px){
        align-items: flex-start;
    }
`;

export const ContentBackground = Styled.div`
    position: absolute;
    z-index: -50;
    width: 100%;
    height: 100vh;
    background-color: #e5e5e5;
    overflow: hidden;
    @media (max-width: 768px){
        overflow:visible;
    }
`;
export const ImageBackground = Styled.img`
    width: 100%;
    background: #e5e5e5;
    position: absolute;
    left: 41%;
    height: 100%;
`;
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
    
    @media (max-width: 912px){
        flex-direction:column;
        margin-top:25px;
        height:90%;
    }
`;
