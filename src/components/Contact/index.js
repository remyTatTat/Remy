import './index.scss'
import Loader from 'react-loaders';
import { useState, useEffect, useRef } from 'react';
import Translations from './translations.json';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [lang, setLang] = useState("en-us");
    const form = useRef();
    
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

        const p = JSON.stringify(Translations[lang]['p']);
        unq = p.replace(/\"/g, "");
        document.getElementById('p').innerHTML = unq;
    }, [lang]);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ps1nie1', 'template_vg2a75q', form.current, 'uMLufOfst57QmZaPs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          .then(
              () => {
                alert('Messages sent successfully.')
                window.location.reload(false);
              },
              () => {
                alert('Failed to send message, please try again.');              }
          );
    };

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 id="h1"></h1>
                <p id="p"></p>

                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required></input>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="Send"></input>
                            </li>
                        </ul>
                    </form>
                </div>
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

export default Contact