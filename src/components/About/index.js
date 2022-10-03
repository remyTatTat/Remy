import './index.scss'
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import Translations from './translations.json';

const About = () => {
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

        const p1 = JSON.stringify(Translations[lang]['p1']);
        unq = p1.replace(/\"/g, "");
        document.getElementById('p1').innerHTML = unq;

        const p2 = JSON.stringify(Translations[lang]['p1']);
        unq = p2.replace(/\"/g, "");
        document.getElementById('p2').innerHTML = unq;

        const p3 = JSON.stringify(Translations[lang]['p1']);
        unq = p3.replace(/\"/g, "");
        document.getElementById('p3').innerHTML = unq;
    });

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 id="h1"></h1>
                <p id="p1"></p>
                <p id="p2"></p>
                <p id="p3"></p>
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

export default About