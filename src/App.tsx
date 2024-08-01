import { useEffect, useRef, useState } from 'react'
import './styles/app.scss'
import Header from './containers/Header'
// import { useContextAPI } from "./context/createContext.tsx";
// import './containers/StickySection';
import StickySection from './containers/StickySection';
import StickySectionImages from './containers/StickySectionImages';
import Section from './containers/Section';
import StickySectionSideroll from './containers/StickySectionSideroll';
import RandomKeys from './containers/RandomKeys';

interface ContentItem {
    id: number;
    text: string;
}

const contentList: ContentItem[] = [
    { id: 1, text: 'Jestem frontend developerem z pasją do programowania' },
    { id: 2, text: 'pisałem swoje pierwsze programy i technologie wokół samego programowania w JS związanego z WEB' },
    { id: 3, text: 'pracowałem nad projektami stron jak i projektowaniu ich od początku w CMS WordPress' },
    { id: 4, text: 'dotąd jest ok' },
    { id: 5, text: 'i aż do końca!' },
    { id: 6, text: 'i aż do końca!' },
];

const siderollList: ContentItem[] = [
    { id: 1, text: 'Jestem frontend developerem z pasją do programowania' },
    { id: 2, text: 'pisałem swoje pierwsze programy i technologie wokół samego programowania w JS związanego z WEB' },
    { id: 3, text: 'pracowałem nad projektami stron jak i projektowaniu ich od początku w CMS WordPress' },
    { id: 4, text: 'dotąd jest ok' },
    { id: 5, text: 'i aż do końca!' },
    { id: 6, text: 'i aż do końca!' },
];

function App() {
    return (
    <div className="container" onScroll={() => console.log('scrolling body')    }>
        <Header />
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <StickySection
            texts={contentList}/>
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <StickySectionSideroll
            texts={siderollList}/>
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <StickySectionImages />
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <Section
            text={'pracowałem wtedy w JS, PHP, scss, webpack WordPress'} />
        <RandomKeys />
        <p>pracowałem wtedy w JS, PHP, scss, webpack WordPress</p>
        <p>Projektem z którego jestem szczególnie dumny z tamtego okresu to Zamek Pszczyna który zaprojektowałem i zaprogramowałem w całości</p>
        <p>Po pewnym czasie dostałem szansę współpracy z developerami pracującymi nad większymi projektami / aplikacjami pisanymi w React</p>
        <p>Od stycznia 2022 zacząłem pracę w Silky Coders jako Frontend Developer w obszarze Stron głównych brandów odzieżowych firmy LPP</p>
        <p>Sinsay, Reserved, Mohito, Cropp House</p>
        <p>Dostaliśmy za zadanie by stopniowo Przeprojektować strony zgodnie z Redesignem któego następstwem była zwiększone możliwości prezentacji treści i wziększona sprzedaż sprzedaż</p>
        <p>Następnym krokiem była stopniowa optymalizacja strony (szybsze czasy odpowiedzi, urozmaicenie technologii uzywanych na stronach, współpraca z backendem nad pisaniem nowych rozwiązań pobierania produktów)</p>
        <p>A także pozbywanie się długu technologicznego (przenoszenie starych technologii na nowe (php i jquery a także czesto niepotrzebne biblioteki na rozwiązania JS + Typescript lub React + Typescript))</p>
        <p>Refaktor, kierunkek reużywalności komponentów kodu</p>
        <p>Rozpląywanie zależności które narastały przez lata i rosły w stos spagetti kodu</p>
        <p>Nalezałem także czasowo do zespołu odpowiedzialnego za Design System (React + Typescript)</p>

    </div>
    )
}

export default App
