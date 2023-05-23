import Styled from "styled-components";

export const Card = Styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-direction:column;
    width:10%;
    height:5%;
    flex-wrap:wrap;
    box-shadow: 3px 4px 3px 3px rgb(0, 0, 0, 0.3);
    margin: 5px;
    border-radius: 10px;
    position:relative;
    &> a{
        text-decoration:none;
        color:#030303;
        text-transform:capitalize;
        text-align:center;
    }

    ::before{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:40%;
        background-color:#f5f5f5;
        z-index:-1;
    }
    @media (max-width: 1100px){
        width: 15%;
        height: 8%;
    }
    @media (max-width: 746px){
        width: 20%;
        height: 10%;
    }
    @media (max-width: 450px){
        width: 40%;
        height: 15%;
    }
    
`;

export const Content = Styled.div`  
    &> a{
        text-decoration:none;
        color:#030303;
        text-transform:capitalize;
    }

`;
