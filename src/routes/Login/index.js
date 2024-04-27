/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import {
  ADMIN_CHANNEL,
  ADMIN_GUEST_CHANNEL,
  CLIENT_CHANNEL,
} from "../../constant/channel";
import { url } from "../../constant/url";
import {
  deleteUserDataStore,
  userDataStore,
} from "../../redux/action/userData.action";
import "./../../assets/css/Login.scss";
import ERROR from "./../../assets/img/error.png";
import {
  CardLogin,
  CardWrapper,
  ContentWrapper,
  DeleteButton,
  DeleteButtonWrapper,
  DeleteDescription,
  ErrorButton,
  ErrorButtonWrapper,
  Form,
  Input,
  LoginButton,
  LoginError,
  LoginErrorWrapper,
  LoginIcon,
  LoginIconDesktop,
  LoginTitle,
  MarginTop,
  MedicineText,
  ServerError,
  ServerErrorDescription,
  ServerErrorWrapper,
  Title,
  TopInWrapper,
  TopWrapper,
  Wrapper,
} from "./_login";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataFromRedux = useSelector((state) => state.userData);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    document.title = "AXA Technical Test";
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (dataFromRedux?.isLogin) {
      navigate("/main-menu");
    }
  }, [dataFromRedux]);

  const handleSubmit = (e) => {
    setLoading(true);
    axios
      .post(url + "u/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        setLoading(false);
        const data = res.data.data;
        if (data.message === "SUCCESS") {
          dispatch(
            userDataStore({
              userData: data.userData,
              key: data.key,
              isLogin: true,
            })
          );
          navigate("/main-menu");
        } else {
          setPopup(true);
        }
      })
      .catch(() => {
        setServerError(true);
      });
    e.preventDefault();
  };

  const handleServerError = () => {
    dispatch(deleteUserDataStore());
    setServerError(false);
    setLoading(false);
  };

  return (
    <Wrapper>
      <Loading visible={loading} bordercolor="#efefef" />
      {!loading && (
        <>
          <TopWrapper>
            <TopInWrapper>
              <LoginTitle>AXA Technical Test</LoginTitle>
            </TopInWrapper>
          </TopWrapper>
          <CardWrapper>
            <ContentWrapper>
              {/* <LoginIconDesktop src={LOGIN_ICON} alt="Login Icon Desktop" /> */}
            </ContentWrapper>
            <ContentWrapper>
              <CardLogin>
                <Title>Log in</Title>
                <Form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    autoComplete="off"
                    required
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <MarginTop />
                  <LoginButton type="submit" value="Log in" />
                </Form>
              </CardLogin>
            </ContentWrapper>
          </CardWrapper>
        </>
      )}
      <Modal
        title=""
        isDisplay={popup}
        onClose={() => {
          setPopup(false);
        }}
      >
        <LoginErrorWrapper>
          <LoginError src={ERROR} alt="Error" />
        </LoginErrorWrapper>
        <DeleteDescription>Username or password is wrong</DeleteDescription>
        <DeleteButtonWrapper>
          <DeleteButton
            className="btn"
            onClick={() => {
              setPopup(false);
            }}
          >
            Oke
          </DeleteButton>
        </DeleteButtonWrapper>
      </Modal>
      <Modal title="" isDisplay={serverError} onClose={handleServerError}>
        <ServerErrorWrapper>
          <ServerError src={ERROR} alt="Error" />
        </ServerErrorWrapper>
        <ServerErrorDescription>
          Saat ini sistem sedang mengalami gangguan. Mohon coba lagi nanti.
        </ServerErrorDescription>
        <ErrorButtonWrapper>
          <ErrorButton className="btn" onClick={handleServerError}>
            Oke
          </ErrorButton>
        </ErrorButtonWrapper>
      </Modal>
    </Wrapper>
  );
}

export default Login;
