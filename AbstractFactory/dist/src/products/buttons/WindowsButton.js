"use strict";
//Producto Concreto - Button para Windows
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsButton = void 0;
//Botón con renderizado y eventos de aplicación Windows
class WindowsButton {
    //Renderiza con estilo nativo Windows
    render() {
        console.log('[Windows] Renderizando botón con estilo nativo');
    }
    //Vincula evento click del sistema Windows
    onClick(callback) {
        console.log('[Windows] Vinculando evento click');
        callback();
    }
}
exports.WindowsButton = WindowsButton;
