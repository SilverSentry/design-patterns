<?php

//Responsabilidad: Clase creadora abstracta que declara el Factory Method y contiene la lógica de negocio común (el método render())

//Método abstracto createButton(): ButtonInterface (el Factory Method)
//Método concreto render(): utiliza el botón creado por createButton() para dibujar el diálogo
//Aquí no se sabe qué tipo concreto de botón se usará, eso se delega a las subclases

namespace FactoryMethod\Dialog;

use FactoryMethod\Button\ButtonInterface;

//Clase creadora abstracta (Dialog)
abstract class DialogAbstract {
    //Factory Method: las subclases concretas implementarán este método
    abstract protected function createButton(): ButtonInterface;

    //Método que contiene la lógica de negocio común
    //Usa el producto creado por el factory method
    public function render(): void {
        $button = $this->createButton();
        $button->onClick(fn() => $this->closeDialog());
        $button->render();
    }

    //Asigna un comportamiento al hacer clic (por ejemplo, cerrar el diálogo)
    private function closeDialog(): void {
        echo "Cerrando diálogo...\n";
    }
}

?>