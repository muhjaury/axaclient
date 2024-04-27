import { Wrapper } from "./_error";

function Error() {
  return (
    <Wrapper>
      <h1
        style={{
          color: "black",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "800",
        }}
      >
        Error 404
      </h1>
      <h3
        style={{ color: "black", fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        Page not Found
      </h3>
    </Wrapper>
  );
}

export default Error;
