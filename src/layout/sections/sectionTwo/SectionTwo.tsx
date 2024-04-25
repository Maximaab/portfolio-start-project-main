import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import photoOne from "./../../../assets/images/Phototabletop.webp";
import photoTwo from "./../../../assets/images/PhotoUnderWindow.webp";
import photoThree from "./../../../assets/images/PhotoSink.webp";
import photoFour from "./../../../assets/images/PhotoPanel.webp";
import { LookAll } from "../lookall/LookAll";
export const SectionTwo = () => {
  return (
    <StyledSections>
      <div>
        <SectionTitle>Изделия из натурального камня</SectionTitle>
        <div>
          <button>+</button>
          <button>+</button>
        </div>
      </div>
      <LookAll/>
      <div>
        <Phototabletop src={photoOne}></Phototabletop>
        <PhotoUnderWindow src={photoTwo}></PhotoUnderWindow>
      </div>
      <div>
        <PhotoSink src={photoThree}></PhotoSink>
        <PhotoPanel src={photoFour}></PhotoPanel>
      </div>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  background-color: #5aecd4;
  min-height: 100vh;
`;

const Phototabletop = styled.img`
  width: 490px;
  height: 340px;
`;
const PhotoUnderWindow = styled.img`
  width: 740px;
  height: 340px;
`;
const PhotoSink = styled.img`
  width: 740px;
  height: 340px;
`;
const PhotoPanel = styled.img`
  width: 490px;
  height: 340px;
`;
