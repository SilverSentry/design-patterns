//Producto Concreto - Checkbox para Windows.

//Implementa la interfaz Checkbox con estilo nativo de aplicación de escritorio.
//Pertenece a la familia "Windows" de productos.

import { Checkbox } from './checkbox.interface';

//Checkbox con renderizado y eventos de aplicación Windows.
export class WindowsCheckbox implements Checkbox {

  //Renderiza con estilo nativo Windows
  render(): void {
    console.log('[Windows] Renderizando checkbox con estilo nativo');
  }

  //Vincula evento change del sistema Windows
  onCheck(callback: () => void): void {
    console.log('[Windows] Vinculando evento change');
    callback();
  }
}