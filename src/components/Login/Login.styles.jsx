import styled from "styled-components";
import img from "../../assets/images/login-background.jpg"

export const Container =styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`
export const Content =styled.div`
margin-bottom: 10vw;
width:100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`
export const BgImage =styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-image: url(${img});
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
export const CTA =styled.div`
    max-width: 650px;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`
export const CTALogoOne =styled.img`
   margin-bottom: 12px;
   max-width: 600px;
   min-height: 1px;
   display: block;
   width: 100%;
`
export const SignUp =styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;

    }
`
export const Description = styled.p`
    color: hsla(0,0%,95.3%,1);
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
export const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;

`