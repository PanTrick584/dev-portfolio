import './styles/app.scss'
import Nav from './containers/Nav'
// import { useContextAPI } from "./context/createContext.tsx";
// import './containers/StickySection';
import StickySection from './containers/StickySection';
import StickySectionImages from './containers/StickySectionImages';
import Header from './containers/Header';
import Sideroll from './containers/StickySectionSideroll';
import RandomKeys from './containers/RandomKeys';
import { ContentItem } from './types/types';

const header_one = [
    "Hi, I’m",
    "Patryk Chodacki",
    "Frontend Developer"
]
const contentList: ContentItem[] = [
    { id: 1, text: "Welcome to my portfolio!" },
    { id: 2, text: "I'm passionate about crafting dynamic web experiences using modern technologies like JavaScript, React, TypeScript, and PHP" },
    { id: 3, text: "I always try tounderstand more, so im learning Node / Express to fully understand eviroment around my workspace" },
    { id: 4, text: 'My focus is on clean, efficient code, optimization, and continuous improvement.' },
];

const siderollList: ContentItem[] = [
    { id: 1, text: 'JavaScript is at the core of what I do. From interactive features to complex logic' },
    { id: 2, text: "I leverage JS to bring websites to life" },
    { id: 3, text: 'and knowledge of TypeScript and backend enviroment' },
];

const sectionThree: ContentItem[] = [
    { id: 1, text: 'I specialize in refactoring old, poorly written code to make it cleaner,' },
    { id: 2, text: "more efficient, and easier to maintain" },
    { id: 3, text: "Optimization isn't just about speed; it's about creating sustainable, future-proof codebases." },
];

const sectionFour: ContentItem[] = [
    { id: 1, text: 'While my focus is on frontend development' },
    { id: 2, text: "I also have solid experience working with PHP and am currently expanding my skills" },
    { id: 3, text: "with Node.js and Express for backend development." },
    { id: 4, text: "This allows me to handle both client- and server-side programming" },
];

const sectionFive: ContentItem[] = [
    { id: 1, text: 'Optimalizations / code refactor', background: "burlywood" },
    { id: 2, text: "Unity of enviroment", background: "cadetblue" },
    { id: 3, text: "Analyze needs and posibilities", background: "saddlebrown" },
    { id: 4, text: "This allows me to handle both client- and server-side programming", background: "hotpink" },
    { id: 5, text: "This allows me to handle both client- and what about mouse!!", background: "yellowgreen" },
];

function App() {
    return (
        <div className="container">
            <Header texts={header_one} />
            <StickySection texts={contentList} />
            <section className='section section-header'>
                <h3>Building Interactivity<br />with JavaScript</h3>
            </section>
            <Sideroll texts={siderollList} />
            <section className='section section-header'>
                <h3>Refactoring for Performance<br />& Clean Code</h3>
            </section>
            <StickySection texts={sectionThree} />
            <section className='section section-header'>
                <h3>Full-Stack Foundations<br />with PHP & Node/Express</h3>
            </section>
            <Sideroll texts={sectionFour} />
            <section className='section section-header'>
                <h3>Recent Works<br />with brands</h3>
            </section>
            <StickySectionImages content={sectionFive} />
            {/* <Section
                text={"Solving Challenges<br />with New Solutions"} /> */}
            {/* <StickySectionSideroll
                texts={sectionFive} />
            <Section
                text={"Solving Challenges<br />with New Solutions"} />
            <StickySectionSideroll
                texts={sectionFive} /> */}
            {/* <RandomKeys /> */}
            {/* <p>pracowałem wtedy w JS, PHP, scss, webpack WordPress</p>
        <p>Projektem z którego jestem szczególnie dumny z tamtego okresu to Zamek Pszczyna który zaprojektowałem i zaprogramowałem w całości</p>

        <p>Po pewnym czasie dostałem szansę współpracy z developerami pracującymi nad większymi projektami / aplikacjami pisanymi w React</p>
        <p>Od stycznia 2022 zacząłem pracę w Silky Coders jako Frontend Developer w obszarze Stron głównych brandów odzieżowych firmy LPP</p>
        <p>Sinsay, Reserved, Mohito, Cropp House</p>
        1. Poprawa wydajności / optymalizacja kodu
        2. refactor kodu, posprzątanie, uporządkowanie, pozbycie się powtarzających się funkcjonalności / skryptów
        3. Podzielenie kodu na mniejsze fragmenty by lepiej się nad nim pracowało w orzyszłości / na dłuższą metę
        4. Usprawnienie środowiska pracy z kodem takie jak webpack, uspójnienie formatowania / sposobu pisania
        5. Wydzielenie poszczególnych funkcjonalności do poszczególnych plików / funkcjonalności
        6. Analiza potrzeb backendowych, pisanie własnych końcówek zwracającymi tylko potrzebne dane (dużo było zapożyczonych z innych obszarów)
        7. Usprawnienia w użytych technologiach / przerzucenie części technologii na renderowanie asynchroniczne po stronie uzytkownika
        8. Analiza potrzeb biznesu, tego jak uzywają tworzonych przez nas funkcjonalności / dostosowanie do nich budowanej w dłuższej perspektywie logiki jak defaultowe wartości elementów na stronach z wieloma wersjami językowymi, dowolna kolejność elementów na stronie, możliwość włączania lub wyłączania widoczności całych sekcji lub ich części i dostosowanie do tego całej analiyki
        9. Projekt CMS czyli usprawnienie dla biznesu pracy z plikami json, przygotowanie logiki tak by każda strona miała wiele wariantów przygotowanych za wczasu, oraz by mogły różnić się pomiędzy wersjami językowymi oraz by każdy wariant był możliwy do modyfikowania i historia zmian była widoczna oraz by kazda wersja mogła być opublikowana lub być wersją z której można wyjść do dalszego modyfikowania
        10. Do tego strona składa się z dropdownów z wyborek rodzaju sekcji oraz kontentem do uzupełnienia (jak teksty, zdjęcia)
        <p>Dostaliśmy za zadanie by stopniowo Przeprojektować strony zgodnie z Redesignem któego następstwem była zwiększone możliwości prezentacji treści i wziększona sprzedaż sprzedaż</p>
        <p>Następnym krokiem była stopniowa optymalizacja strony (szybsze czasy odpowiedzi, urozmaicenie technologii uzywanych na stronach, współpraca z backendem nad pisaniem nowych rozwiązań pobierania produktów)</p>
        <p>A także pozbywanie się długu technologicznego (przenoszenie starych technologii na nowe (php i jquery a także czesto niepotrzebne biblioteki na rozwiązania JS + Typescript lub React + Typescript))</p>
        <p>Refaktor, kierunkek reużywalności komponentów kodu</p>
        <p>Rozpląywanie zależności które narastały przez lata i rosły w stos spagetti kodu</p>
        <p>Nalezałem także czasowo do zespołu odpowiedzialnego za Design System (React + Typescript)</p> */}
        </div>
    )
}

export default App
