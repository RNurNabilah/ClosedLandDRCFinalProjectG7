import Styled, { keyframes } from "styled-components";

export const ButtonContainer = Styled.button`
  background-color: #094a4b;
  border: 20px solid black;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 10px;

  &:hover{
  background-color: #073636;
  }
`;

export const ContentContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;

export const ItemCountContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ItemNumber = Styled.span`
  padding-right: 8px;
`;
