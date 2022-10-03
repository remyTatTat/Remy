import { Route, Link } from 'react-router-dom'
import Loader from 'react-loaders';
import './index.scss';
import { useState, useEffect} from 'react';
import Translations from './translations.json';

const Portfolio = () => {
    const [lang, setLang] = useState("en-us");
    
    function updateLangEn() {
        setLang(prevLang => "en-us");
    }
    function updateLangEs() {
        setLang(prevLang => "es-co");
    }
    function updateLangIt() {
        setLang(prevLang => "it");
    }

    useEffect(() => {
        var unq;
        const h1 = JSON.stringify(Translations[lang]['h1'])
        unq = h1.replace(/\"/g, "");
        document.getElementById('h1').innerHTML = "";

        unq.split('').forEach(letter => {
            var span = document.createElement('span');
            span.className = "letter";
            span.innerHTML = letter;
            document.getElementById('h1').append(span);
        });

        const h2 = JSON.stringify(Translations[lang]['h2']);
        unq = h2.replace(/\"/g, "");
        document.getElementById('h2').innerHTML = unq;
    });

    return (
        <div className="container portfolio-page">
            <div className="div-zone">
                <h1 id="h1"></h1>
                <h2 id="h2"></h2>

                <a href="https://github.com/remyTatTat/Game-Of-Life" target="blank">
                    <div className="project-box" id="game-of-life">
                        <p>Conway's Game Of Life</p>
                    </div>
                </a>
                <a href="https://github.com/remyTatTat/Deuteranopia-Tracker" target="blank">
                    <div className="project-box" id="deut">
                        <p>Deuteranopia Tracker</p>
                    </div>
                </a>
                <a href="https://github.com/remyTatTat/Asteroids" target="blank">
                    <div className="project-box" id="asteroids">
                        <p>Asteroids</p>
                    </div>
                </a>
                <a>
                    <div className="project-box" id="dungeon">
                        <p>Dungeon Design</p>
                    </div>
                </a>
                <a>
                    <div className="project-box" id="magic-garden">
                        <p>Magic Garden</p>
                    </div>
                </a>
                <a>
                    <div className="project-box">
                        <p>Coming Soon</p>
                    </div>
                </a>
            </div>
            <div className="button-box">
                <div className="flat-button" onClick={updateLangEn}>EN</div>
                <div className="flat-button" onClick={updateLangEs}>ES</div>
                <div className="flat-button" onClick={updateLangIt}>IT</div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </div>
    )
}

export default Portfolio