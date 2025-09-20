// ==UserScript==
// @name         Hide Yaoi en TMOHentai
// @namespace    https://tmohentai.com/
// @version      2025.09.19
// @author       wernser412
// @description  Oculta automáticamente cualquier contenido marcado como Yaoi
// @icon         https://github.com/wernser412/Hide-TMOHentai/blob/main/ICONO.png?raw=true
// @downloadURL  https://github.com/wernser412/Hide-TMOHentai/raw/refs/heads/main/Hide%20Yaoi%20en%20TMOHentai.user.js
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
