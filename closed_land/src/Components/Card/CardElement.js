import Styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const CardContainerElements = Styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 0;
`;

// @media screen and (max-width: 1200px){
//     -webkit-box-flex: 0;
//     flex: 0 0 33.3333333333%;
//     max-width: 33.3333333333%;
// }
// @media screen and (max-width: 768px){
//     -webkit-box-flex: 0;
//     flex: 0 0 50%;
//     max-width: 50%;
// }
// @media screen and (max-width: 540px){
//     -webkit-box-flex: 0;
//     flex: 0 0 50%;
//     max-width: 50%;
// }
// @media screen and (max-width: 500px){
//     -webkit-box-flex: 0;
//     flex: 0 0 70%;
//     max-width: 70%;
// }
// @media screen and (max-width: 400px){
//     -webkit-box-flex: 0;
//     flex: 0 0 80%;
//     max-width: 80%;
// }
// @media screen and (max-width: 340px){
//     -webkit-box-flex: 0;
//     flex: 0 0 94.5%;
//     max-width: 94.5%;
// }
const FadeIn = keyframes`
  0% {opacity:0;};
  100% {opacity:1;};
`;

export const CardContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 140px;
  word-wrap: break-word;
  background-color: #33383d;
  border: 0 solid rgba(0, 0, 0, 0.6);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 10%;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  animation: ${FadeIn} 2s;

  &:hover{
    transform: scale(1.03);
    background-color: #484f57;
    z-index: 1;
    position:relative;
  }
  @media screen and (min-width:1201px) {
    width: 200px;
    height: 270px;
  }
  @media screen and (max-width: 1200px){
    width: 200px
    height: 400px
  }
  @media screen and (max-width: 768px){
    width: 200px
    height: 400px
  }
  @media screen and (max-width: 540px){
    width: 200px
    height: 400px
  }
  @media screen and (max-width: 417px){
    width: 100px
    height: 200px
  }
`;

export const CardImageWrapper = Styled.div`
  position: relative;
  display: block;
`;

export const CardImage = Styled.img`
  width: 100px;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  padding-bottom: 8px;
  height: 100px;
  vertical-align: middle;
  border-style: none;

  &:hover{
    z-index: 1;
    position:relative;
  }

  @media screen and (min-width:1201px) {
    width: 200px;
    height: 200px;
  }
`;

export const CardAlignContainer = Styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: flex-start;
`;

export const CardDetailsContainer = Styled.div`
  display: grid;
  grid-column: 1/4;
  padding-left: 15%;
  justify-content: flex-start;
  width: 45px;
`;

export const CardLeftAlignContainer = Styled.div`
  display: grid;
  justify-content:flex-end;
  grid-column: 4/7;
  width: 45px;
  @media screen and (min-width:1201px) {
    width: 140px;
  }
`;

export const CardTitle = Styled.h4`
  color: #FFFFFF;
  white-space: nowrap;
  font-size: 8px;
  @media screen and (min-width:1201px) {
    font-size: 14px;
  }
`;

export const CardContent = Styled.p`
  color: #FFFFFF;
  white-space: nonwrap;
  font-size:8px;
  @media screen and (min-width:1201px) {
    font-size: 14px;
  }
`;
