//Producto Concreto - Button para Web

//Implementa la interfaz Button con estilo HTML
//Pertenece a la familia "Web" de productos

import { Button } from './button.interface';

//Botón con renderizado HTML y eventos JavaScript del navegador
export class WebButton implements Button {

  //Renderiza como elemento <button> HTML
  render(): void {
    console.log('<button class="web-btn">Botón Web</button>');
  }

  //Vincula evento click via JavaScript
  onClick(callback: () => void): void {
    console.log('[Web] Vinculando evento click via JavaScript');
    callback();
  }
}