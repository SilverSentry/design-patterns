"use strict";
//Punto de entrada de la aplicación.
//Ejecuta el flujo principal del patrón Abstract Factory:
// 1. Obtiene la fábrica según el entorno (config)
// 2. Crea el cliente (Application) con la fábrica inyectada
// 3. Usa la fábrica para crear productos sin conocer implementaciones concretas
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("./src/app/Application");
const config_1 = require("./src/config");
async function main() {
    //Step 1: Seleccionar la fábrica concreta según el entorno
    const factory = (0, config_1.getFactoryByEnvironment)();
    //Step 2: Inyectar la fábrica en el cliente (Dependency Injection)
    const app = new Application_1.Application(factory);
    //Step 3: El cliente usa la fábrica abstracta, no las concretas
    app.createUI();
    app.renderUI();
    app.handleEvents();
}
main().catch(console.error);
