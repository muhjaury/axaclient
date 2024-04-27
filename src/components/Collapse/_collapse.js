import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 4px;
  background: #61677a;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const Img = styled.img`
  height: 24px;
  width: 24px;

  transform: ${(props) => (props.collapse ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.5s;
`;
