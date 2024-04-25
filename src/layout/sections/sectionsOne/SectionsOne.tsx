import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionTitleGreen } from "../../../components/SectionTitle";
import photo from "../../../assets/images/SectionsPhotoOne.webp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Thema } from "../../../styles/Thema";

export const SectionsOne = () => {
  return (
    <StyledSections>
      <SectionTitle>наши преимущества - </SectionTitle>
      <SectionTitleGreen>ваш результат</SectionTitleGreen>
      <FlexWrapper align="center" justify="space-between">
        <div>
          <ul>
            <li>Новейшее итальянское оборудование Donatoni</li>
            <UnderList> 
  <ExpandMoreIcon/>
  <UnderLine></UnderLine>
  <div></div>
            </UnderList>
            <li>Собственное произодство</li>
            <li>Широкий ассортимент</li>
          </ul>
        </div>
        <div>
          <Photo src={photo}></Photo>
        </div>
        <div>
          <ul>
            <li>Изделия из наличи</li>
            <li>Работаем под ключ</li>
            <li>Консультации по уходу за иделием из камня</li>
          </ul>
        </div>
      </FlexWrapper>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  background-color: ${Thema.colors.secondaryBg};
  min-height: 100vh;
  li {
    color: ${Thema.colors.accent};
  }
`;

const Photo = styled.img`
  width: 1003pxpx;
  height: 575px;
`;

const UnderLine = styled.span`
  height: 5px;
  width: 50px;
  color: ${Thema.colors.fontGreen};
`

const UnderList = styled.div`
  display: flex;
  align-items: center;

`