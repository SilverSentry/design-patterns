"use strict";
//Fábrica Concreta - Familia Web
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebFactory = void 0;
const WebButton_1 = require("../products/buttons/WebButton");
const WebCheckbox_1 = require("../products/checkbox/WebCheckbox");
//Fábrica concreta para entorno Web
//Crea productos que renderizan HTML y usan eventos JavaScript del navegador
class WebFactory {
    //Crea un botón con estilo web (HTML button)
    createButton() {
        return new WebButton_1.WebButton();
    }
    //Crea un checkbox con estilo web (input type checkbox)
    createCheckbox() {
        return new WebCheckbox_1.WebCheckbox();
    }
}
exports.WebFactory = WebFactory;
