import styled from "styled-components";

export const HeaderContainer =styled.div`
    position: sticky;
    top:0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;

`
export const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height:70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`
export const Login =styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;
    &:hover{
        background-color: #f9f9f9;
        color:#000 ;
        border:transparent;
    }
`