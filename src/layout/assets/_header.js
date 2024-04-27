import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${(props) => (props.displayHeader ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background: #000000;
`;

export const Desktop = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Mobile = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 56px;
  left: calc(100% / 2);
  border-bottom-left-radius: 8px;
  width: 100%;
  background: #61677a;
  z-index: 2;

  overflow: hidden;
  max-height: ${(props) => (props.collapse ? "500px" : "0")};
  transition: max-height 0.5s ease-out;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  padding: 8px 8px 8px 16px;
  width: 100%;
  font-family: Arial;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 1px solid #000000;
  cursor: pointer;
`;

export const NavbarLogout = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px 8px 8px 16px;
  width: 100%;
  border-bottom: 1px solid #000000;
  cursor: pointer;
`;

export const NavbarLogoutImage = styled.img`
  height: 24px;
  width: 24px;
`;

export const NavbarLogoutText = styled.div`
  font-family: Arial;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin: 0 8px;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Arial;
  @media all and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const LogoutWrapper = styled.div`
  display: none;
  @media all and (min-width: 1024px) {
    display: block;
  }
`;
