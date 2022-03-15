import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const Nav = styled.nav`
  background: #0b0c10;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  align-items: center;
  z-index: 2000;
  position: fixed;
  top: 0;
  font-family: "Work Sans";
  font-weight: 500;
`;

export const NavMobileLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  grid-column: 1 / 2;
`;

export const NavMobileBars = styled.div`
  display: none;
  @media screen and (max-width: 845px) {
    display: flex;
    grid-column: 6 / 6;
    justify-content: flex-end;
    margin-right: 12%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-column: 2 / 6;

  @media screen and (max-width: 845px) {
    display: none;
  }
`;

export const NavEthereumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: -10px;
  font-size: 25px;
  color: #ffffff;

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1260px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1240px) {
    font-size: 14px;
    // padding: 5px !important;
  }
  @media screen and (max-width: 860px) {
    font-size: 12px;
  }
`;

export const NavEthereoumText = styled.span`
  font-size: 25px;
  color: #ffffff;

  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1260px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1240px) {
    font-size: 12px;
  }
  @media screen and (max-width: 860px) {
    font-size: 10px;
  }
`;

export const NavEthereoumLogo = styled.img`
  height: 25px;
  width: 20px;
  // margin-left: 1rem;
`;

export const NavPageLocation = styled.span`
  font-size: 25px;
  color: #ffffff;

  &:hover {
    transition: all 0.2s ease-in-out;
    // background: #e5dfe8;
    color: #0d6efd;
  }

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1260px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1240px) {
    font-size: 14px;
  }
  @media screen and (max-width: 860px) {
    font-size: 12px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }

  @media screen and (max-width: 845px) {
    grid-column: 2 / 3;
  }
`;

export const NavSearch = styled.input`
  height: 40px;
  width: 400px;
  font-size: 16px;
  border-radius: 1rem;
  padding-left: 10px;
  border: none;

  @media screen and (max-width: 1300px) {
    width: 200px;
    height: 20px;
    font-size: 14px;
  }
  @media screen and (max-width: 1280px) {
    width: 200px;
    height: 20px;
    font-size: 14px;
  }
  @media screen and (max-width: 1260px) {
    width: 260px;
    height: 30px;
    font-size: 14px;
  }
  @media screen and (max-width: 1240px) {
    width: 200px;
    height: 30px;
    font-size: 12px;
  }
  @media screen and (max-width: 870px) {
    width: 150px;
    height: 30px;
    font-size: 10px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff2f00;
  padding: 10px 10px;
  margin-top: 1rem;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (min-width: 1050px) {
    margin-top: 0 !important;
  }
  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1260px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1240px) {
    font-size: 12px;
  }
  @media screen and (max-width: 860px) {
    font-size: 10px;
  }
`;

export const NavSearchBtn = styled(FaSearch)`
  font-size: 1.8rem;
  background: #fff;
  height: 40px;
  width: 60px;
  color: black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e5dfe8;
    color: #010606;
  }
`;

// const breatheAnimation = keyframes`
// from {
//     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 30px #e60073, 0 0 20px #fff, 0 0 10px #fff;
//   }
//   to {
//     text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 40px #ff4da6, 0 0 30px #ff4da6, 0 0 20px #fff;
//   }
// `;

const flickerAnimation = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
  } 
`;

// const typeWritter = keyframes`
//   from { width: 0 }
//   to { width: 100% }
// `;

export const NavSpan = styled.h1`
  font-size: 35px;
  color: #FFFFFF;
}
`;
// text-shadow:
//     0 0 7px #15cdfc,
//     0 0 10px #15cdfc,
//     0 0 21px #15cdfc,
//     0 0 42px #0fa,
//     0 0 82px #0fa,
//     0 0 92px #0fa,
//     0 0 102px #0fa,
//     0 0 151px #0fa;

export const NavHome = styled.h1`
  font-size: 20px !important;
  font-weight: bold;
  padding-top: 10px;
  color: #66cfcf;

  @media screen and (max-width: 1240px) {
  }
  // @media screen and (max-width: 1000px) {
  //   font-size: 25px !important;
  // }
  @media screen and (max-width: 885px) {
    font-size: 20px !important;
  }
`;
// text-shadow:
//     0 0 7px #15cdfc,
//     0 0 10px #15cdfc,
//     0 0 21px #15cdfc,
//     0 0 42px #0fa,
//     0 0 82px #0fa,
//     0 0 92px #0fa,
//     0 0 102px #0fa,
//     0 0 151px #0fa;
// animation: ${flickerAnimation} 1.5s infinite alternate;

export const NavImageWrapper = styled.div`
  postition: relative;
  padding-top: 10px;
  border-radius: 1rem;

  @media screen and (max-width: 845px) {
    grid-column: 1 / 2;
  }
`;

export const NavImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 9rem;

  @media screen and (max-width: 1240px) {
    height: 60px;
    width: 60px;
  }
  @media screen and (max-width: 1000px) {
    height: 50px;
    width: 50px;
  }
  @media screen and (max-width: 800px) {
    height: 40px;
    width: 40px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 845px) {
    display: block;
    justify-content: flex-end;
    font-size: 1.8rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: flex-end;
  margin-left: 30px;
  padding-left: 10px;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @media screen and (max-width: 1050px) {
    font-size: 10px;
    height: 30%;
    width: 70%;
  }
  @media screen and (max-width: 845px) {
    display: none;
  }
`;

export const ProfileIcon = styled(CgProfile)`
  width: 35px;
  height: 35px;
  // padding: 0 !important;
  position: absolute;
  margin: 0 15px;
`;
