import { useEffect, useRef, useState } from 'react'
import './styles/app.scss'
import Header from './containers/Header'
// import { useContextAPI } from "./context/createContext.tsx";

function App() {
    return (
    <div className="container">
        <Header />
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <p>Jestem frontend developerem z pasją do programowania</p>
        <p>pierwsze kroki stawiałem samodzielnie ucząc się programowania, poznając świat technologii i fascynując sie przyjemnością płynącą z pisania kodu</p>
        <p>pisałem swoje pierwsze programy i technologie wokół samego programowania w JS związanego z WEB</p>
        <p>zacząłem pracę w IT we wrześniu 2020</p>
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
