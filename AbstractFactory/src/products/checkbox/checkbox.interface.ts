//Interfaz de Producto Abstracto - Checkbox

//Define el contrato que TODOS los checkboxes (concretos) deben implementar
//Esta es la interfaz que conoce el cliente, no las implementaciones concretas

//Patrón: Abstract Product (Producto Abstracto)

export interface Checkbox {

  //Renderiza el checkbox según el estilo de la plataforma
  render(): void;
  
  //Asocia un callback al evento de cambio (check/uncheck)
  //Función a ejecutar cuando cambie el estado
  onCheck(callback: () => void): void;
}