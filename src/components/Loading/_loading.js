import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: ${({ visible }) => (visible === "true" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIco = styled.div`
  border: 8px solid
    ${(props) => (props.bordercolor ? props.bordercolor : "#ffffff")};
  border-radius: 50%;
  border-top: 8px solid #821199;
  border-left: 8px solid #821199;
  border-bottom: 8px solid #821199;
  width: 56px;
  height: 56px;
  animation: ${spin} 2s linear infinite;
`;
