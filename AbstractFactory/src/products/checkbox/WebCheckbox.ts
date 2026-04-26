//Producto Concreto - Checkbox para Web

//Implementa la interfaz Checkbox con estilo HTML
//Pertenece a la familia "Web" de productos

import { Checkbox } from './checkbox.interface';

//Checkbox con renderizado HTML y eventos JavaScript del navegador
export class WebCheckbox implements Checkbox {

  //Renderiza como elemento <input type="checkbox"> HTML
  render(): void {
    console.log('<input type="checkbox" class="web-checkbox">');
  }

  //Vincula evento change via JavaScript
  onCheck(callback: () => void): void {
    console.log('[Web] Vinculando evento change via JavaScript');
    callback();
  }
}