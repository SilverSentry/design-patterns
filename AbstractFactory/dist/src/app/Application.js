"use strict";
//Cliente del patrón Abstract Factory
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    //Constructor recibe una fábrica abstracta (no una concreta)
    //Implementación de GUIFactory (WebFactory o WindowsFactory)
    constructor(factory) {
        this.factory = factory;
    }
    //Crea los productos usando la fábrica inyectada
    //El tipo de producto depende de qué fábrica se usó
    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }
    //Renderiza los productos (sin saber si son Web o Windows)
    renderUI() {
        this.button.render();
        this.checkbox.render();
    }
    //Asocia eventos a los productos (polimorfismo)
    handleEvents() {
        this.button.onClick(() => console.log('Botón clickeado'));
        this.checkbox.onCheck(() => console.log('Checkbox cambiado'));
    }
}
exports.Application = Application;
