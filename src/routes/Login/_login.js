import styled from "styled-components";
import BG from "./../../assets/img/login-background.jpg";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const TopWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1024px) {
    display: none;
  }
`;
export const TopInWrapper = styled.div`
  width: 85%;
  position: relative;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: auto;
  background: #000000;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

export const LoginIcon = styled.img`
  height: 48px;
  width: 48px;
`;
export const LoginTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 24px;
  margin-bottom: 16px;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;

export const LoginIconDesktop = styled.img`
  display: none;
  height: 320px;
  width: 320px;

  @media all and (min-width: 1024px) {
    display: block;
  }
`;

export const CardLogin = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #000000;
  padding: 24px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);

  @media all and (min-width: 1024px) {
    height: auto;
    width: 320px;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  width: 80%;
  background: #821199;
  margin-bottom: 32px;
  margin-left: -28px;
  padding: 8px 8px 8px 24px;
  color: #ffffff;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  font-size: 24px;
  font-weight: 600;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: 12px 20px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorIcon = styled.i`
  color: #ffffff;
  padding-top: 5px;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;

  @media all and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const LoginButton = styled.input`
  width: 100%;
  margin: 0px;
  background: #821199;
  color: #ffffff;
  display: inline-block;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background: #660d78;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const LoginErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginError = styled.img`
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

export const DeleteButton = styled.button`
  border-radius: 10px;
  background: #821199;
  color: #ffffff;
  font-weight: 500;

  &:hover {
    background: #821199;
    color: #ffffff;
  }
`;

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

export const WhatsappWrapper = styled.a`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const WhatsappIco = styled.img`
  height: 56px;
  width: 56px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const MedicineText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
`;

export const MarginTop = styled.div`
  height: 16px;
`;
