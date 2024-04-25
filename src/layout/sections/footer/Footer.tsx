import styled from "styled-components";
import { TopFooter } from "./footercomponents/TopFooter";
import { BottomFooter } from "./footercomponents/BottomFooter";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Footer = () => {
  return (
    <FooterSection>
      <TopFooter />
      
      <BottomFooter />
      <Copiright>674 Gonzales Drive. Washington, PA 15301</Copiright>

      
    </FooterSection>
  );
};

const FooterSection = styled.section`
  min-height: 30vh;
  background-color: #ac9a9a;
  
  
`;

const Copiright = styled.small`

`;
