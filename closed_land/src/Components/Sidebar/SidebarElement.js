import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
  font-family: "Work Sans";
  font-weight: 600;
`;

export const ProfileIcon = styled(CgProfile)`
  width: 100%;
  height: 100%;
  color: #fff;
  &:hover {
    color: #f8c101;
    transition: 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  &:hover {
    color: red !important;
    transition: 0.2s ease-in-out;
  }
`;

export const NavEthereumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10px;
  color: #ffffff;
  font-size: 1.5rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  justify-content: center;
  align-itmes: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-styled: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f8c101;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #ff2f00;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
