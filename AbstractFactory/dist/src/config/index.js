"use strict";
//Configuración centralizada del patrón
//Este módulo decide qué fábrica concreta usar según el entorno
//El entorno se lee de la variable de entorno UI_ENV
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFactoryByEnvironment = getFactoryByEnvironment;
const WindowsFactory_1 = require("../factories/WindowsFactory");
const WebFactory_1 = require("../factories/WebFactory");
//Factory method que selecciona la implementación según el entorno
//Una de las fábricas concretas (Web o Windows)
function getFactoryByEnvironment() {
    //Leer entorno: si no existe, usar 'windows' por defecto
    const env = process.env.UI_ENV || 'windows';
    switch (env.toLowerCase()) {
        case 'windows':
            return new WindowsFactory_1.WindowsFactory();
        case 'web':
            return new WebFactory_1.WebFactory();
        default:
            throw new Error(`Unknown environment: ${env}`);
    }
}
