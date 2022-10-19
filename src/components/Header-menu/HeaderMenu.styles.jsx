import styled from "styled-components";
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap ;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    @media (max-width: 768px){
        display: none;
    }
`
export const Option = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
        margin-bottom: 6px;

    }
    span{
        color : rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative;
    &::before{
        content: "";
        display: block;
        background-color: rgb(249,249,249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }
    }

    &:hover{
        span::before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }

`