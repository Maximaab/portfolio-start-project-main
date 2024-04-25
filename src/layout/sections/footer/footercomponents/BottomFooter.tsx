import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Logo } from "../../../../components/logo/Logo"
import { Contact } from "./contact/Contact"

export const BottomFooter = () =>{
    return<FlexWrapper align={"center"}>
    <Logo/>
        <StyledListLinks>

        <ListMenu>МЕНЮ</ListMenu>
        <ul>
          <li>Delivery & returns</li>
          <li>FAQ</li>
          <li>Contacts</li>
          <li>Blog</li>
        </ul>
        </StyledListLinks>
        <StyledListLinks>

        <ListMenu>КАТАЛОГ</ListMenu>
        <ul>
          <li>New arrivals</li>
          <li>Trending now</li>
          <li>Sales</li>
          <li>Brands</li>
        </ul>
        </StyledListLinks>
        <Contact/>
    </FlexWrapper>
}

const ListMenu = styled.p`
  flex-direction: column;
  
`

const StyledListLinks = styled.div`
  direction: column;
`