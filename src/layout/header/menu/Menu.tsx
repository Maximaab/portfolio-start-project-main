import styled from "styled-components";
import { Thema } from "../../../styles/Thema";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">КАТАЛОГ</a>
        </li>
        <li>
          <a href="">АКЦИИ</a>
        </li>
        <li>
          <a href="">БЛОГ</a>
        </li>
        <li>
          <a href="">СОТРУДНИЧЕСТВО</a>
        </li>
        <li>
          <a href="">ОПЛАТА И ДОСТАВКА</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
background-color: ${Thema.colors.primeryBg};

  ul {
    
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
    background-color: 141414;

  }
`;
