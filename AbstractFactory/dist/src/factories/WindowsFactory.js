"use strict";
//Fábrica Concreta - Familia Windows
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsFactory = void 0;
const WindowsButton_1 = require("../products/buttons/WindowsButton");
const WindowsCheckbox_1 = require("../products/checkbox/WindowsCheckbox");
//Fábrica concreta para entorno Windows
//Crea productos que renderizan con estilo nativo de aplicación de escritorio
class WindowsFactory {
    //Crea un botón con estilo Windows nativo
    createButton() {
        return new WindowsButton_1.WindowsButton();
    }
    //Crea un checkbox con estilo Windows nativo
    createCheckbox() {
        return new WindowsCheckbox_1.WindowsCheckbox();
    }
}
exports.WindowsFactory = WindowsFactory;
