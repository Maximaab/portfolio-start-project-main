import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import duschewaya from "./../../../assets/images/Duschewaya.webp";
import kitchen from "./../../../assets/images/kitchen.webp";
import kitchentwo from "./../../../assets/images/KitchenTwo.webp";
import mirrorAndShower from "./../../../assets/images/MirrorAndShower.webp";
import mirrorAndShowerTwo from "./../../../assets/images/MirrorAndShowerTwo.webp";

export const SectionsFour = () => {
  return (
    <StyledSections>
      <HeadersSection>
        <SectionTitle>идеи для <h1>вдохновения</h1></SectionTitle>
        <div>
          <button>+</button>
          <button>+</button>
        </div>
      </HeadersSection>
      <FlexWrapper align={"center"}>
        
          <div>
            <Duschewaya src={duschewaya}></Duschewaya>
          </div>
          <div>
            <Kitchen src={kitchen}></Kitchen>
            <Kitchentwo src={kitchentwo}></Kitchentwo>
          </div>
          <div>
            <MirrorAndShower src={mirrorAndShower}></MirrorAndShower>
            <MirrorAndShowerTwo src={mirrorAndShowerTwo}></MirrorAndShowerTwo>
          </div>
        
      </FlexWrapper>
        <button>Смотреть еще больше фотографий</button>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  background-color: #e7e578;
  min-height: 100vh;
`;
const HeadersSection = styled.section`
    align-items: center;
    justify-content: space-between;
`

const Duschewaya = styled.img`
  width: 500px;
  height: 100%;
`;
const Kitchen = styled.img`
  width: 350px;
  height: 370px;
`;
const Kitchentwo = styled.img`
  width: 350px;
  height: 370px;
`;
const MirrorAndShower = styled.img`
  width: 350px;
  height: 370px;
`;
const MirrorAndShowerTwo = styled.img`
  width: 350px;
  height: 370px;
`;
