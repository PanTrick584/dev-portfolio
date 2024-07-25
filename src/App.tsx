import { useEffect, useRef, useState } from 'react'
import './styles/app.scss'
import Header from './containers/Header'
// import { useContextAPI } from "./context/createContext.tsx";
// import './containers/StickySection';
import StickySection from './containers/StickySection';
import StickySectionImages from './containers/StickySectionImages';

function App() {
    return (
    <div className="container" onScroll={() => console.log('scrolling body')    }>
        <Header />
        <section className='section section-normal'></section>
        <section className='section section-sticky'>Jestem frontend developerem z pasją do programowania</section>
        <section className='section section-normal'>
            <p>Jestem frontend developerem z pasją do programowania</p>
        </section>
        <StickySection />
        <section className='section section-normal'>
            <p></p>

        </section>
        <section className='section section-normal'>
            <p>pisałem swoje pierwsze programy i technologie wokół samego programowania w JS związanego z WEB</p>

        </section>
        <section className='section section-normal'>
            <p></p>

        </section>
                <StickySectionImages />

        <p>pracowałem nad projektami stron jak i projektowaniu ich od początku w CMS WordPress</p>
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
