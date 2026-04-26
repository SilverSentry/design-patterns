<?php
//Cargar autoload
require_once __DIR__ . '/src/autoload.php';

//Responsabilidad: Punto de entrada de la aplicación. Instanciar la aplicación y ejecutarla

//Crear objeto Application y llamar a run()
//Capturar excepciones

use FactoryMethod\Application\Application;

try {
    $app = new Application();
    $app->run();

} catch (\Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>