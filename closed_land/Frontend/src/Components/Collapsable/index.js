import React from "react";
import {
  ButtonContainer,
  ContentContainer,
  ItemCountContainer,
  ItemNumber,
} from "./CollapsableElement";

const Collapsable = (props) => {
  return (
    <ButtonContainer onClick={props.function}>
      <ContentContainer>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <i className="fa fa-book"></i>
        {props.name}
        <ItemCountContainer>
          <ItemNumber>{props.totalNumber}</ItemNumber>
          <i class="fa fa-sort-desc" aria-hidden="true"></i>
        </ItemCountContainer>
      </ContentContainer>
    </ButtonContainer>
  );
};

export default Collapsable;
