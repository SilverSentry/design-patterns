"use strict";
//Producto Concreto - Checkbox para Windows.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsCheckbox = void 0;
//Checkbox con renderizado y eventos de aplicación Windows.
class WindowsCheckbox {
    //Renderiza con estilo nativo Windows
    render() {
        console.log('[Windows] Renderizando checkbox con estilo nativo');
    }
    //Vincula evento change del sistema Windows
    onCheck(callback) {
        console.log('[Windows] Vinculando evento change');
        callback();
    }
}
exports.WindowsCheckbox = WindowsCheckbox;
