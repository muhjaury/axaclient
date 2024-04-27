import styled from "styled-components";

export const ServerErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServerError = styled.img`
  height: 160px;
  width: 160px;
`;

export const ServerErrorDescription = styled.div`
  padding-top: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;

  @media all and (min-width: 1024px) {
    padding-top: 32px;
  }
`;

export const ErrorButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  > button {
    width: 100%;
    background: #821199;
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

export const ErrorButton = styled.button`
  border-radius: 10px;
  background: #821199;
  color: #ffffff;
  font-weight: 500;

  &:hover {
    background: #821199;
    color: #ffffff;
  }
`;
