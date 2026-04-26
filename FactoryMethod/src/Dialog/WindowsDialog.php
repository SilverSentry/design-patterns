<?php
//Responsabilidad: Implementar el creador concreto para Windows

//Implementar createButton() para retornar una instancia de WindowsButton

namespace FactoryMethod\Dialog;

use FactoryMethod\Button\WindowsButton;
use FactoryMethod\Button\ButtonInterface;

//Creador concreto
class WindowsDialog extends DialogAbstract {
    protected function createButton(): ButtonInterface {
        return new WindowsButton();
    }
}

?>