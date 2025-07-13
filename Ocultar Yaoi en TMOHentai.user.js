// ==UserScript==
// @name         Ocultar Yaoi en TMOHentai
// @namespace    https://tmohentai.com/
// @version      1.0
// @author       wernser412
// @description  Oculta automáticamente cualquier contenido marcado como Yaoi
// @icon         https://tmohentai.com/apple-touch-icon.png
// @match        https://tmohentai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function ocultarYaoi() {
        document.querySelectorAll('.element-thumbnail').forEach(el => {
            if (el.querySelector('.data-type-yaoi')) {
                el.style.display = 'none';
            }
        });
    }

    // Ejecuta al cargar
    ocultarYaoi();

    // Observa cambios por AJAX / scroll
    const observer = new MutationObserver(ocultarYaoi);
    observer.observe(document.body, { childList: true, subtree: true });
})();
