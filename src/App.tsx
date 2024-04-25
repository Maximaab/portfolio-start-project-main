import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { SectionsOne } from './layout/sections/sectionsOne/SectionsOne';
import { SectionTwo } from './layout/sections/sectionTwo/SectionTwo';
import { SectionsThree } from './layout/sections/sectionsthree/SectionsThree';
import { SectionsFour } from './layout/sections/sectionsFour/SectionsFour';
import { Footer } from './layout/sections/footer/Footer';


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <SectionsOne/>
            <SectionTwo/>
            <SectionsThree/>
            <SectionsFour/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;