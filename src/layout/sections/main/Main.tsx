import styled from "styled-components";
import photo from "./../../../assets/images/Duschewaya.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Thema } from "../../../styles/Thema";
import { Container } from "../../../components/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackGrounds from "../../../assets/images/BackgroundMain.png";
export const Main = () => {
  return (
    <Styledmain>
      <BackGround src={BackGrounds}></BackGround>

      <Container>
        <FlexWrapper
          align={"center"}
          justify={"space-between"}
          content={"flex-end"}
        >
          <PhotoWrapper>
            <Photo src={photo}></Photo>
          </PhotoWrapper>
          <ListSection>
            <BlackContainer>
            <SectionsGrey>камень с душой</SectionsGrey>
            <SectionsWhite>Каменные изделия </SectionsWhite>
            <SectionsGreen>для вашего дома</SectionsGreen>
            <Buttons>
              <ButtonGreen>Рассчитать стоимость</ButtonGreen>
              <ButtonBlack>Связаться с нами</ButtonBlack>
            </Buttons>

            </BlackContainer>

            <Buttons>
              <ArrowDivOne>
                <ArrowBackIosIcon sx={{ color: "white" }} />
              </ArrowDivOne>
              <ArrowDivTwo>
                <ArrowForwardIosIcon sx={{ color: "white" }} />
              </ArrowDivTwo>
            </Buttons>
            <Pagination>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Pagination>
          </ListSection>
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};

const ListSection = styled.div`
  padding-left: 100px;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: +3;
`;

const Styledmain = styled.div`
position: relative;
  min-height: 100vh;
  display: flex;
`;
const SectionsGreen = styled.h1`
  color: ${Thema.colors.fontGreen};
`;
const SectionsWhite = styled.h1`
  padding-top: 10px;
  color: ${Thema.colors.secondaryBg};
`;
const SectionsGrey = styled.h3`
  color: ${Thema.colors.fontGrey};
`;
const ButtonGreen = styled.button`
  background-color: ${Thema.colors.fontGreen};
  color: aliceblue;
  width: 270px;
  height: 60px;
`;
const ButtonBlack = styled.button`
  background-color: ${Thema.colors.accent};
  color: aliceblue;
  width: 270px;
  height: 60px;
`;
const Buttons = styled.div`
  padding-top: 20px;

  gap: 20px;
  display: flex;
  align-items: center;
`;

const ArrowDivOne = styled.button`
  background-color: ${Thema.colors.primeryBg};
  height: 45px;
  width: 45px;
  border: 1px solid white;
`;
const ArrowDivTwo = styled.button`
  background-color: ${Thema.colors.fontGreen};
  height: 45px;
  width: 45px;
`;

const Pagination = styled.span`
  padding-bottom: 15px;
  padding-top: 60px;

  span {
    display: inline-block;
    background-color: green;
    height: 5px;
    width: 40px;
    margin: 5px;
  }
`;
const Photo = styled.img`
  width: 1040px;
  height: auto;
  object-fit: cover;
  
`;
const BackGround = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const BlackContainer = styled.div`
  position: absolute;
  
  /* height: 330px; */
  /* width: 710px; */
  bottom: 170px;
  left: -15px;
  /* z-index: -1; */
  background-color: ${Thema.colors.primeryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  padding-left: 50px;
  margin-left: 0;
`;

const PhotoWrapper = styled.div`
  position: absolute;
    right: 0px;
    height: min(600px, 100%);
    z-index: +1;
    overflow: hidden;
  
`