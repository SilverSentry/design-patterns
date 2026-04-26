//Interfaz de Producto Abstracto - Button

//Define el contrato que TODOS los botones (concretos) deben implementar
//Esta es la interfaz que conoce el cliente, no las implementaciones concretas
 
//Patrón: Abstract Product (Producto Abstracto)
 
export interface Button {

  //Renderiza el botón según el estilo de la plataforma
  render(): void;
  
  //Asocia un callback al evento click
  //Función a ejecutar cuando se haga click
  onClick(callback: () => void): void;
}