import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";


export const Contact = () => {
  return (
    <ContactStyled>
      <h6>КОНТАКТЫ ДЛЯ СВЯЗИ</h6>
      <p>Телефон (405) 555-0128</p>
      <p>Почта hello@createx.com</p>
      <SocialList>
        <SocialItem>
          <SocialLink href="">
            <Icon iconId={"facebooc"}></Icon>
          </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink href="">
            <Icon iconId={"inst"}></Icon>
          </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink href="">
            <Icon iconId={"Twitter"}></Icon>
          </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink href="">
            <Icon iconId={"Youtube"}></Icon>
          </SocialLink>
        </SocialItem>
        <SocialItem>
        <SocialLink href="">
            <Icon iconId={"pinterest"}></Icon>
          </SocialLink>
        </SocialItem>
      </SocialList>
    </ContactStyled>
  );
};

const ContactStyled = styled.p`

`;
const SocialList = styled.ul`
display: flex;
flex-direction: row;
`;
const SocialItem = styled.li`

`;
const SocialLink = styled.a`

`;
