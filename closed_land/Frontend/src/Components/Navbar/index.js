import React, { useContext, useState, useEffect } from "react";
import logo from "../../images/Artboard.svg";
import { FaEthereum } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
// import { CgProfile } from "react-icons/cg";
// import Search from "../Search";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavHome,
  NavSearch,
  NavMobileLogo,
  NavImage,
  NavMobileBars,
  NavEthereumContainer,
  NavEthereoumText,
  NavEthereoumLogo,
  NavPageLocation,
  ProfileIcon,
  LogoutButton,
  NavSearchDropdown,
  NavSearchItem,
  NavSearchText,
  NavSearchName,
  NavSearchImg,
  NavCombined,
  // NavSearchBtn,
} from "./NavbarElement";
import { UserContext } from "../../Pages/SignIn/SignIn";
// import Sidebar from "../../Components/Sidebar";

const Navbar = ({ ethTick, toggle }) => {
  const [searchName, setSearchName] = React.useState("");
  const [pressed, setPressed] = useState(false);
  const [names, setNames] = useState([
    {
      ImgUrl: "",
      Name: "",
      StatsCount: 0,
    },
  ]);

  const defSearch = {
    ImgUrl:
      "https://lh3.googleusercontent.com/XMOHn9rIh607U-DaRsYVth4STQw1spx-Twy9nmcTF3IRVJimGRnSZhf6reZqYLYJGRPv6E9jcbJvLUaypy9VXF2ij5RP3mRsVhME=s130",
    Name: "No Name",
    StatsCount: 0,
  };

  const user = useContext(UserContext);
  // console.log("NavBar", ethTick);

  useEffect(() => {
    if (searchName === "") {
      setPressed(false);
    }
  }, [searchName]);

  // logout the user
  const handleLogout = () => {
    window.location.reload(false);
    localStorage.clear();
  };

  const handleSearch = (event) => {
    if (event["code"] === "Enter") {
      axios.post("http://localhost:4573", { search: searchName }).then(
        (response) => {
          console.log(response.data);
          let data = response.data;
          let tempArr = [];

          data.forEach((element) => {
            if (Object.keys(element).length !== 0) {
              tempArr.push(element);
            }
          });
          setNames(tempArr);
        },
        (error) => {
          console.log(error);
        }
      );
      setPressed(true);
    }
  };

  return (
    <div>
      <Nav>
        <NavMobileLogo>
          {/* <NavImage src="https://img.lovepik.com/free-png/20210927/lovepik-cartoon-jeep-png-image_401572129_wh1200.png" /> */}
          <NavImage src={logo} />
          <NavLink to="/">
            <NavHome>ClosedLand</NavHome>
          </NavLink>
        </NavMobileLogo>
        <NavMenu>
          <NavEthereumContainer>
            <NavLink to="/chart">
              1 <FaEthereum></FaEthereum>
              {" = " + ethTick + " USD"}
            </NavLink>
          </NavEthereumContainer>
          <div>
            <NavSearch
              className="fa"
              placeholder="Can't Find Your NFT?"
              onChange={(e) => setSearchName(e.target.value)}
              onKeyPress={(e) => handleSearch(e)}
            >
              {/* <BiSearchAlt /> */}
            </NavSearch>
            {pressed === true ? (
              <NavSearchDropdown>
                {names.map((col, index) => {
                  return (
                    <NavSearchItem key={index}>
                      <NavCombined>
                        <NavSearchImg
                          src={
                            col.ImgUrl !== "NULL"
                              ? col.ImgUrl
                              : defSearch.ImgUrl
                          }
                        />{" "}
                        <NavSearchName>
                          {col.Name !== "NULL" ? col.Name : defSearch.Name}
                        </NavSearchName>
                      </NavCombined>
                      <NavSearchText>
                        <FaEthereum />
                        {col.StatsCount !== "NULL"
                          ? col.StatsCount
                          : defSearch.StatsCount}
                      </NavSearchText>
                    </NavSearchItem>
                  );
                })}
              </NavSearchDropdown>
            ) : null}
          </div>
          <NavEthereumContainer>
            <NavLink to="/explore">
              <NavPageLocation>Explore</NavPageLocation>
            </NavLink>
            <NavLink to="/stats">
              <NavPageLocation>Stats</NavPageLocation>
            </NavLink>
            <NavLink to="/aboutus">
              <NavPageLocation>About Us</NavPageLocation>
            </NavLink>
            {user === undefined ? null : (
              <NavLink to="/profile">
                <ProfileIcon></ProfileIcon>
              </NavLink>
            )}
          </NavEthereumContainer>
        </NavMenu>
        <NavMobileBars>
          <Bars onClick={toggle} />
        </NavMobileBars>
        <NavBtn>
          {user === undefined ? (
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          ) : (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          )}
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
