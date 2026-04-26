<?php
//Responsabilidad: Implementar el botón con estilo y comportamiento Web (HTML/JS)

//render(): produce código HTML del botón (por ejemplo, <button>...)
//onClick(): simula la vinculación de un evento de JavaScript en el navegador

namespace FactoryMethod\Button;

//Producto concreto
class HTMLButton implements ButtonInterface {

    public function render(): void {
        echo "<button>Botón estilo Web</button>\n";
    }

    public function onClick(callable $callback): void {
        echo "Vinculando evento click del navegador\n";
        $callback();
    }
}

?>