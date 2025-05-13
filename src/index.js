import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/store/store';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEng from './assets/locales/en/translation.json'
import tHi from './assets/locales/hi/translation.json'
import { useEffect } from 'react';
// import i18next from 'https://deno.land/x/i18next/index.js'
// or import i18next from 'https://raw.githubusercontent.com/i18next/i18next/master/src/index.js'
// or import i18next from 'https://cdn.jsdelivr.net/gh/i18next/i18next/src/index.js'


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: tEng
            },
            hi: {
                translation: tHi
        }
    },
        lng: "hi", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();


reportWebVitals();
