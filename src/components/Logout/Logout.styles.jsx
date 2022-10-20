import styled from "styled-components";
export const DropDown = styled.div`
   position:absolute;
   top:48px;
   right :0 ;
   background: rgb(19,19,19);
   border:1px solid rgba(151,151,151,0.34);
   border-radius: 4px;
   box-shadow: rgb(0 0 0 /50%) 0 0 18px 0px;
   padding:10px;
   font-size: 14px;
   letter-spacing: 3px;
   width: 100px;
   opacity: 0;
`
export const SignOut =styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration:1s;
        }
    }
`
