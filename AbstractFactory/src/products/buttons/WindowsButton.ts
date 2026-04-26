//Producto Concreto - Button para Windows

//Implementa la interfaz Button con estilo nativo de aplicación de escritorio
//Pertenece a la familia "Windows" de productos

import { Button } from './button.interface';

//Botón con renderizado y eventos de aplicación Windows

export class WindowsButton implements Button {

//Renderiza con estilo nativo Windows
  render(): void {
    console.log('[Windows] Renderizando botón con estilo nativo');
  }

  //Vincula evento click del sistema Windows
  onClick(callback: () => void): void {
    console.log('[Windows] Vinculando evento click');
    callback();
  }
}