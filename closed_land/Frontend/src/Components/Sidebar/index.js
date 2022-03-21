import React, { useState, useEffect, useContext } from "react";
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
  SidebarLogoutButton,
} from "./SidebarElement";
import { FaEthereum } from "react-icons/fa";
import { UserContext } from "../../Pages/SignIn/SignIn";

const Sidebar = (props) => {
  const user = useContext(UserContext);

  // logout the user
  const handleLogout = () => {
    window.location.reload(false);
    localStorage.clear();
  };

  // const [isOpen, setIsOpen] = React.useState(true);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [eth, setEth] = useState("0");

  // useEffect(() => {
  //   setEth(props.ethprice);
  // }, [props]);

  // console.log(eth);
  // console.log("Sidebar", props);

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggleSidebar}>
      <Icon>
        <CloseIcon onClick={props.toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavEthereumContainer>
            <SidebarLink to="/chart" style={{ fontSize: "30px" }}>
              1 <FaEthereum></FaEthereum>
              {" = " + props.ethTick + " USD"}
            </SidebarLink>
          </NavEthereumContainer>
          <SidebarLink to="/explore">Explore</SidebarLink>
          <SidebarLink to="/stats">Stats</SidebarLink>
          <SidebarLink to="/aboutus">About Us</SidebarLink>
          {user === undefined ? null : (
            <SidebarLink to="/profile">
              Profile
              {/* <ProfileIcon type="button"></ProfileIcon> */}
            </SidebarLink>
          )}
        </SidebarMenu>
        <SideBtnWrap>
          {user === undefined ? (
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          ) : (
            <SidebarLogoutButton onClick={handleLogout}>
              Logout
            </SidebarLogoutButton>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
