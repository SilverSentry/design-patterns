//Interfaz de Fábrica Abstracta

//Define el contrato que TODAS las fábricas concretas deben implementar
//Cada fábrica concreta será responsable de crear una familia completa de productos
//(Button + Checkbox) que son compatibles entre sí

//Esta interfaz es la que conoce el cliente (Application), no las fábricas concretas

import { Button } from '../products/buttons/button.interface';
import { Checkbox } from '../products/checkbox/checkbox.interface';

//Contrato para fábricas concretas del sistema
//Cada implementación debe proporcionar
// - createButton(): Instancia de un Button (Web o Windows)
// - createCheckbox(): Instancia de un Checkbox (Web o Windows)

export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}