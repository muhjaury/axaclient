import styled from "styled-components";
import { color } from "../../constant/color";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const WrapperContent = styled.div`
  position: absolute;
  display: flex;
  margin-top: 56px;
  height: ${(props) =>
    props.displayFooter ? "calc(100% - 96px)" : "calc(100% - 50px)"};
  width: 100%;
  @media all and (min-width: 1024px) {
    height: calc(100% - 96px);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 8px;
  background: aliceblue;

  @media all and (min-width: 1024px) {
    padding: 16px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  background: ${color.a1};
  color: #ffffff;
  font-weight: 500;

  &:hover {
    background: ${color.a1};
    color: #ffffff;
  }
`;

export const LogoutWarningWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutWarning = styled.img`
  height: 160px;
  width: 160px;
`;

export const DeleteDescription = styled.div`
  padding-top: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;

  @media all and (min-width: 1024px) {
    padding-top: 32px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  > button {
    width: 100%;
    background: ${color.a1};
    &:hover {
      background: #660d78;
    }
  }
  @media all and (min-width: 1024px) {
    margin-top: 24px;
    justify-content: right;
    padding-right: 24px;
    > button {
      width: 100px;
    }
  }
`;
