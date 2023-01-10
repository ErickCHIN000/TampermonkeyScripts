// ==UserScript==
// @name         hpenews bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bypass the stupidly basic paywall for hpenews by removing the elements and property's that just hide the content
// @author       ChiChi#1234
// @match        https://www.hpenews.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hpenews.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++)
    {
        if (elements[i].classList.contains("subscription") || elements[i].classList.contains("subscription-required") || elements[i].classList.contains("modal-backdrop") || elements[i].classList.contains("redacted-overlay"))
        {
            elements[i].parentNode.removeChild(elements[i]);
        }
        document.body.style.overflow = "auto";
        elements[i].style.removeProperty("display");
        elements[i].classList.remove("hide");
    }
})();