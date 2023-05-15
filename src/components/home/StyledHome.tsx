import Styled from "styled-components"

export const Wrapper = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
`

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
`

export const Content = Styled.div`  
    &> a{
        text-decoration:none;
        color:#030303;
        text-transform:capitalize;
    }

`