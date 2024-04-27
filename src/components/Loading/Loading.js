import PropTypes from "prop-types";
import { LoadingIco, Wrapper } from "./_loading";

function Loading({ visible, bordercolor }) {
  return (
    <Wrapper visible={visible.toString()}>
      <LoadingIco bordercolor={bordercolor} />
    </Wrapper>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
  bordercolor: PropTypes.string,
};

Loading.defaultProps = {
  visible: true,
  bordercolor: "#ffffff",
};

export default Loading;
