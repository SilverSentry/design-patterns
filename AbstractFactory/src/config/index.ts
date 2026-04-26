//Configuración centralizada del patrón
//Este módulo decide qué fábrica concreta usar según el entorno
//El entorno se lee de la variable de entorno UI_ENV

//Valores posibles:
// - "windows": Usa WindowsFactory (estilo nativo Windows)
// - "web": Usa WebFactory (estilo HTML/Web)
// - (cualquier otro): Lanza error

//Esta es la única parte del código que conoce ambas fábricas concretas

import { GUIFactory } from '../factories/GUIFactory.interface';
import { WindowsFactory } from '../factories/WindowsFactory';
import { WebFactory } from '../factories/WebFactory';

//Factory method que selecciona la implementación según el entorno
//Una de las fábricas concretas (Web o Windows)

export function getFactoryByEnvironment(): GUIFactory {
  //Leer entorno: si no existe, usar 'windows' por defecto
  const env = process.env.UI_ENV || 'windows';
  
  switch (env.toLowerCase()) {
    case 'windows':
      return new WindowsFactory();
    case 'web':
      return new WebFactory();
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}