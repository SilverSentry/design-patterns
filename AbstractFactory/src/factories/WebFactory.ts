//Fábrica Concreta - Familia Web

//Implementa la interfaz GUIFactory para crear productos con estilo Web/HTML
//Esta fábrica pertenece a la familia "Web" de productos

//Todos los productos creados por esta fábrica son compatibles entre sí
//(tienen el mismo estilo visual y comportamiento web)

import { GUIFactory } from './GUIFactory.interface';
import { Button } from '../products/buttons/button.interface';
import { Checkbox } from '../products/checkbox/checkbox.interface';
import { WebButton } from '../products/buttons/WebButton';
import { WebCheckbox } from '../products/checkbox/WebCheckbox';

//Fábrica concreta para entorno Web
//Crea productos que renderizan HTML y usan eventos JavaScript del navegador
export class WebFactory implements GUIFactory {

  //Crea un botón con estilo web (HTML button)
  createButton(): Button {
    return new WebButton();
  }

  //Crea un checkbox con estilo web (input type checkbox)
  createCheckbox(): Checkbox {
    return new WebCheckbox();
  }
}