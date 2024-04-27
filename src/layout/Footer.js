import { Copyright, Text, Wrapper } from "./assets/_footer";

function Footer({ displayFooter }) {
  return (
    <>
      <Wrapper displayFooter={displayFooter}>
        <Text>
          <Copyright
            href="https://id.linkedin.com/in/muhjaury"
            target="_blank"
            rel="noreferrer"
          >
            Copyright &#169; 2024 Muhammad Jaury
          </Copyright>
        </Text>
      </Wrapper>
    </>
  );
}

export default Footer;
