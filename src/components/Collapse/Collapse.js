import IMG from "./img/collapse.svg";
import { Img, Wrapper } from "./_collapse";

function Collapse({ collapse, onClick }) {
  return (
    <>
      <Wrapper onClick={onClick}>
        <Img alt="collapse" src={IMG} collapse={collapse} />
      </Wrapper>
    </>
  );
}

export default Collapse;
