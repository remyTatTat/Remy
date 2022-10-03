import { Link } from 'react-router-dom'
import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import Translations from './translations.json';

const Home = () => {
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

        const button = JSON.stringify(Translations[lang]['button']);
        unq = button.replace(/\"/g, "");
        document.getElementById('button').innerHTML = unq;
    });

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1 id="h1"></h1>
                <h2 id="h2"></h2>
                <Link to="/about" className='flat-button' id="button"></Link>
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

export default Home