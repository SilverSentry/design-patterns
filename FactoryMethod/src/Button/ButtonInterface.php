<?php
//Responsabilidad: Definir el contrato que deben cumplir todos los botones concretos
//Declarar los métodos públicos que cualquier botón debe implementar

namespace FactoryMethod\Button;

//Interfaz del producto: declara las operaciones que todos los botones deben implementar
interface ButtonInterface {
    public function render(): void;
    public function onClick(callable $callback): void;
}

?>