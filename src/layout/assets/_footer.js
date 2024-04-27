import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${(props) => (props.displayFooter ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background: #000000;
  padding: 4px;
  border-top: 2px solid #61677a;
  @media all and (min-width: 1024px) {
    justify-content: right;
  }
  @media all and (min-width: 1024px) {
    display: flex;
  }
`;

export const Text = styled.span`
  margin-right: 0;
  color: #ffe6c7;
  font-size: 12px;
  @media all and (min-width: 1024px) {
    margin-right: 24px;
  }
`;

export const Copyright = styled.a`
  color: #ffe6c7;
  text-decoration: none;

  :hover {
    color: #ffffff;
  }
`;
