import Styled from "styled-components";

export const Wrapper = Styled.div`
    background-color:#DB092E;
`;

export const Content = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-left: 25px;
`;

export const ContentTitle = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:1.4rem;
    font-family: 'pokemon-solid';
`;

export const ContentIcon = Styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 50%;
    color: #DB092E;
    margin-right:20px;
    font-size:60px;
`;

export const ContentSearch = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &> input{
        width: 80%;
        border-radius: 18px;
        outline: none;
        text-indent: 30px;
        height: 35px;
        border-style: none;
        margin-bottom: 10px;
        margin-left: 15px;
    }
`;

export const ContentIconSearch = Styled.div`
    position: absolute;
    left: 25px;
    top: 128px;
    color: #DB092E;
`;

export const Bar = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const BarButton = Styled.button`
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: #DB092E;
    cursor:pointer;
    transition: transform 0.5s ease-out, box-shadow 0.5s ease-out;
    transform-origin:center center;
    box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
    :hover{
        transform:scale(1.02);
        box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.7);
    }
`;

export const ContentButton = Styled.div`
position: absolute;
    display: flex;
    flex-direction: column;
    top: 172px;
    background: #DB092E;
    right: 0%;
    width: 18%;
    height: 25%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index:50;
     @media (max-width: 912px){
        height:170px;
        width: 22%;
    }
    @media (max-width: 768px){
        width:22%;
    }
    @media (max-width: 412px){
        width: 30%;
    }
`;

export const Text = Styled.p`
    text-align: center;
    color: white;
`;

export const Buttons = Styled.button`
    width: 90%;
    text-align: center;
    margin: 0 auto;
    border-style: none;
    background: white;
    color: #db092e;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    transition: transform 0.4s ease-out, box-shadow 0.8s ease-out;
    transform-origin:center center;
    box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
    :hover{
        transform:scale(1.02);
        box-shadow: 0px 0px 8px rgb(0, 0, 0, 0.7)
    }
    :focus{
        background-color: #db092e;
        color: #ffffff;
    }
`;
