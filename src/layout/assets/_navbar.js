import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  height: 100%;
  width: 25%;
  background: #61677a;
  overflow: auto;
  @media all and (min-width: 1024px) {
    display: ${(props) => (props.displayNavbar ? "block" : "none")};
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #000000;
`;

export const ItemNav = styled.div`
  margin: 0px;
  padding: 16px;
  font-family: Arial;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;
