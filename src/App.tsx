import './styles/app.scss'
// import { useContextAPI } from "./context/createContext.tsx";
import Header from './containers/Header';
import StickySection from './containers/StickySection';
import StickySectionImages from './containers/StickySectionImages';
import Sideroll from './containers/StickySectionSideroll';
// import Nav from './containers/Nav'
// import RandomKeys from './containers/RandomKeys';
import { contentList, header_five, header_four, header_one, header_six, header_three, header_two, sectionFive, sectionFour, sectionThree, siderollList } from './consts/data';

function App() {
    return (
        <div className="container">
            <Header texts={header_one} />
            <StickySection texts={contentList} />
            <Header texts={header_two} />
            <Sideroll texts={siderollList} />
            <Header texts={header_three} />
            <StickySection texts={sectionThree} />
            <Header texts={header_four} />
            <Sideroll texts={sectionFour} />
            <Header texts={header_five} />
            <StickySectionImages content={sectionFive} />
            <Header texts={header_six} />
        </div>
    )
}

export default App
