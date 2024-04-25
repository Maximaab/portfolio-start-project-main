import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { Phone } from "./phone number/Phone";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Thema } from "../../styles/Thema";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={"center"} >
          <Logo />
          <ListAbout>
          <Phone />
          <Menu />
          </ListAbout>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`

  padding: 15px 0;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 99999;
`;
const ListAbout = styled.div`
  width: 100%;
  
`;