<?php
//Responsabilidad: Implementar el creador concreto para Web

//Implementar createButton() para retornar una instancia de HTMLButton

namespace FactoryMethod\Dialog;

use FactoryMethod\Button\ButtonInterface;
use FactoryMethod\Button\HTMLButton;

//Creador concreto
class WebDialog extends DialogAbstract {
    protected function createButton(): ButtonInterface {
        return new HTMLButton();
    }
}

?>