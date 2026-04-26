//Fábrica Concreta - Familia Windows

//Implementa la interfaz GUIFactory para crear productos con estilo nativo Windows
//Esta fábrica pertenece a la familia "Windows" de productos

//Todos los productos creados por esta fábrica son compatibles entre sí
//(tienen el mismo estilo visual y comportamiento de aplicación de escritorio)

import { GUIFactory } from './GUIFactory.interface';
import { Button } from '../products/buttons/button.interface';
import { Checkbox } from '../products/checkbox/checkbox.interface';
import { WindowsButton } from '../products/buttons/WindowsButton';
import { WindowsCheckbox } from '../products/checkbox/WindowsCheckbox';

//Fábrica concreta para entorno Windows
//Crea productos que renderizan con estilo nativo de aplicación de escritorio
export class WindowsFactory implements GUIFactory {

  //Crea un botón con estilo Windows nativo
  createButton(): Button {
    return new WindowsButton();
  }

  //Crea un checkbox con estilo Windows nativo

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}