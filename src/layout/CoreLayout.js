import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import { ADMIN_GUEST_CHANNEL } from "../constant/channel";
import { deleteUserDataStore } from "../redux/action/userData.action";
import ERROR from "./../assets/img/error.png";
import WARNING from "./../assets/img/warning.png";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import {
  ErrorButton,
  ErrorButtonWrapper,
  ServerError,
  ServerErrorDescription,
  ServerErrorWrapper,
} from "./_coreLayout";
import {
  Button,
  Content,
  DeleteButtonWrapper,
  DeleteDescription,
  LogoutWarning,
  LogoutWarningWrapper,
  Wrapper,
  WrapperContent,
} from "./assets/_coreLayout";
import { useWidget } from "../context/Context";

function CoreLayout({ displayHeader, displayNavbar, displayFooter, children }) {
  //Start - Logout
  const [logout, setLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(deleteUserDataStore());
    navigate("/login");
  };
  //End - Logout

  const dataFromRedux = useSelector((state) => state.userData);

  const { serverError } = useWidget();

  return (
    <>
      <Wrapper>
        <Header displayHeader={displayHeader} setLogout={setLogout} />
        <WrapperContent displayFooter={displayFooter}>
          <Navbar displayNavbar={displayNavbar} />
          <Content>{children}</Content>
        </WrapperContent>
        <Footer displayFooter={displayFooter} />
      </Wrapper>

      {/* Start - Logout */}
      <Modal
        title=""
        isDisplay={logout}
        onClose={() => {
          setLogout(false);
        }}
      >
        <LogoutWarningWrapper>
          <LogoutWarning src={WARNING} alt="Warning" />
        </LogoutWarningWrapper>
        <DeleteDescription>
          Are you sure{" "}
          {dataFromRedux?.channel === ADMIN_GUEST_CHANNEL
            ? "go back ?"
            : "log out the account ?"}
        </DeleteDescription>
        <DeleteButtonWrapper>
          <Button className="btn" onClick={handleLogOut}>
            Yes
          </Button>
        </DeleteButtonWrapper>
      </Modal>
      <Modal
        title="Warning"
        isDisplay={serverError}
        onClose={() => {
          dispatch(deleteUserDataStore());
          navigate("/login");
        }}
      >
        <ServerErrorWrapper>
          <ServerError src={ERROR} alt="Error" />
        </ServerErrorWrapper>
        <ServerErrorDescription>
          Sorry, we are expecting some issue in our system. Please try again
          later.
        </ServerErrorDescription>
        <ErrorButtonWrapper>
          <ErrorButton
            className="btn"
            onClick={() => {
              dispatch(deleteUserDataStore());
              navigate("/login");
            }}
          >
            Okay
          </ErrorButton>
        </ErrorButtonWrapper>
      </Modal>
      {/* End - Logout */}
    </>
  );
}

CoreLayout.propTypes = {
  displayHeader: PropTypes.bool,
  displayNavbar: PropTypes.bool,
  displayFooter: PropTypes.bool,
};

CoreLayout.defaultProps = {
  displayHeader: true,
  displayNavbar: true,
  displayFooter: true,
};

export default CoreLayout;
