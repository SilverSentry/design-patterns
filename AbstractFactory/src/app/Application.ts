//Cliente del patrón Abstract Factory
 
 //Este clase NO conoce las implementaciones concretas (WebButton, WindowsButton, etc.)
 //Solo trabaja con las interfaces abstractas (Button, Checkbox)
 //Esto permite cambiar de familia de productos sin modificar esta clase
 //Patrón usado: Inyección de dependencias - la fábrica se recibe en el constructor

import { GUIFactory } from '../factories/GUIFactory.interface';
import { Button } from '../products/buttons/button.interface';
import { Checkbox } from '../products/checkbox/checkbox.interface';

export class Application {

  //Propiedades declaradas con ! porque se inicializan en createUI()
  private button!: Button;
  private checkbox!: Checkbox;

//Constructor recibe una fábrica abstracta (no una concreta)
//Implementación de GUIFactory (WebFactory o WindowsFactory)

  constructor(private factory: GUIFactory) {}

//Crea los productos usando la fábrica inyectada
//El tipo de producto depende de qué fábrica se usó

  createUI(): void {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

   //Renderiza los productos (sin saber si son Web o Windows)
  renderUI(): void {
    this.button.render();
    this.checkbox.render();
  }

//Asocia eventos a los productos (polimorfismo)
  handleEvents(): void {
    this.button.onClick(() => console.log('Botón clickeado'));
    this.checkbox.onCheck(() => console.log('Checkbox cambiado'));
  }
}