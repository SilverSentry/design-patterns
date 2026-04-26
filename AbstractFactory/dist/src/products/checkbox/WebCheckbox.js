"use strict";
//Producto Concreto - Checkbox para Web
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebCheckbox = void 0;
//Checkbox con renderizado HTML y eventos JavaScript del navegador
class WebCheckbox {
    //Renderiza como elemento <input type="checkbox"> HTML
    render() {
        console.log('<input type="checkbox" class="web-checkbox">');
    }
    //Vincula evento change via JavaScript
    onCheck(callback) {
        console.log('[Web] Vinculando evento change via JavaScript');
        callback();
    }
}
exports.WebCheckbox = WebCheckbox;
