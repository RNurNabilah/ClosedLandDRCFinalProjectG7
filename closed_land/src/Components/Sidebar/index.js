import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  NavEthereumContainer,
  ProfileIcon,
} from "./SidebarElement";
import { FaEthereum } from "react-icons/fa";

const Sidebar = (props) => {
  // const [isOpen, setIsOpen] = React.useState(true);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [eth, setEth] = useState("0");

  // useEffect(() => {
  //   setEth(props.ethprice);
  // }, [props]);

  // console.log(eth);
  console.log("Sidebar", props);

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggleSidebar}>
      <Icon>
        <CloseIcon onClick={props.toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavEthereumContainer>
            <SidebarLink to="/chart">
              1 <FaEthereum className="eth"></FaEthereum>
              {" = " + props.ethTick + " USD"}
            </SidebarLink>
          </NavEthereumContainer>
          <SidebarLink to="/explore">Explore</SidebarLink>
          <SidebarLink to="/stats">Stats</SidebarLink>
          <SidebarLink to="/aboutus">About Us</SidebarLink>
          <ProfileIcon type="button"></ProfileIcon>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign Out</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
