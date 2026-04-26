"use strict";
//Producto Concreto - Button para Web
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebButton = void 0;
//Botón con renderizado HTML y eventos JavaScript del navegador
class WebButton {
    //Renderiza como elemento <button> HTML
    render() {
        console.log('<button class="web-btn">Botón Web</button>');
    }
    //Vincula evento click via JavaScript
    onClick(callback) {
        console.log('[Web] Vinculando evento click via JavaScript');
        callback();
    }
}
exports.WebButton = WebButton;
