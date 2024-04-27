import React from "react";
import { Button } from "./_logout";

function Logout({ setLogout }) {
  return (
    <>
      <Button
        className="btn"
        onClick={() => {
          setLogout(true);
        }}
      >
        Log out
      </Button>
    </>
  );
}

export default Logout;
