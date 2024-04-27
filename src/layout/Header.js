import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Collapse from "../components/Collapse/Collapse";
import Logout from "../components/Logout";
import { ADMIN_GUEST_CHANNEL } from "../constant/channel";
import { MENU_LIST } from "../constant/menu";
import {
  Desktop,
  LeftWrapper,
  LogoWrapper,
  LogoutWrapper,
  Mobile,
  Navbar,
  NavbarLogout,
  NavbarLogoutImage,
  NavbarLogoutText,
  RightWrapper,
  Title,
  Wrapper,
} from "./assets/_header";
import EXIT from "./image/exit.png";

function Header({ displayHeader, setLogout }) {
  const [collapse, setCollapse] = useState(false);

  const navigate = useNavigate();
  const dataFromRedux = useSelector((state) => state.userData);

  const handleTitleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Wrapper displayHeader={displayHeader}>
        <Desktop>
          <LeftWrapper>
            <LogoWrapper></LogoWrapper>
            <Title
              onClick={() => {
                handleTitleClick();
              }}
            >
              AXA Technical Test
            </Title>
          </LeftWrapper>
          <RightWrapper>
            <LogoutWrapper>
              <Logout setLogout={setLogout} />
            </LogoutWrapper>
            <Collapse
              collapse={collapse}
              onClick={() => {
                setCollapse(!collapse);
              }}
            />
          </RightWrapper>
        </Desktop>
        <Mobile collapse={collapse}>
          {MENU_LIST.map((item, index) => {
            return (
              <Navbar
                key={index}
                onClick={() => {
                  navigate(item.value);
                }}
              >
                {item.key}
              </Navbar>
            );
          })}
          <NavbarLogout
            onClick={() => {
              setLogout(true);
            }}
          >
            <NavbarLogoutImage alt="logout" src={EXIT} />
            <NavbarLogoutText>
              {dataFromRedux?.channel === ADMIN_GUEST_CHANNEL
                ? "Back"
                : "Log Out"}
            </NavbarLogoutText>
          </NavbarLogout>
        </Mobile>
      </Wrapper>
    </>
  );
}

export default Header;
