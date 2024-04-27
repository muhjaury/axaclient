import { useNavigate } from "react-router";
import { MENU_LIST } from "../constant/menu";
import { Item, ItemNav, Wrapper } from "./assets/_navbar";

function Navbar({ displayNavbar }) {
  const navigate = useNavigate();
  return (
    <Wrapper displayNavbar={displayNavbar}>
      {MENU_LIST.map((item, index) => {
        return (
          <Item
            key={index}
            onClick={() => {
              navigate(item.value);
            }}
          >
            <ItemNav>{item.key}</ItemNav>
          </Item>
        );
      })}
    </Wrapper>
  );
}

export default Navbar;
