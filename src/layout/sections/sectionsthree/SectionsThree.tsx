import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { LookAll } from "../lookall/LookAll";
import { Productions } from "./productions/Productions";
import vasa from "./../../../assets/images/Vasa.webp"
import styled from "styled-components";

export const SectionsThree = () => {
  return (
    <StyledSections>
      <LookAll />
      <FlexWrapper align={"center"} >
      <div>
        <SectionTitle>Актуальные акции на НАШУ ПРОДУКЦИЮ</SectionTitle>
        <h2>
          Учитывая ключевые сценарии поведения, обучения кадров влечет за собой
          процесс внедрения и модернизации распределения
        </h2>
        <button>перейти в каталог</button>
      </div>
      <FlexWrapper wrap={"wrap"} >
        <Productions photo={vasa} title="Kratki"description="Каминная топка Kratki ZUZIA LPT"price="16 490"/>
        <Productions photo={vasa} title="Kratki"description="Каминная топка Kratki ZUZIA LPT"price="16 490"/>
        <Productions photo={vasa} title="Kratki"description="Каминная топка Kratki ZUZIA LPT"price="16 490"/>
        <Productions photo={vasa} title="Kratki" description="Каминная топка Kratki ZUZIA LPT" price="16 490"/>
      </FlexWrapper>

      </FlexWrapper>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  background-color: #b15189;
  min-height: 100vh;
`;
