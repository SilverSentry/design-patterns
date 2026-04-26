<?php
//Responsabilidad: Implementar el botón con estilo y comportamiento nativo de Windows

//render(): muestra el botón con aspecto de Windows (por ejemplo, usando comandos de consola o una librería gráfica simulada)
//onClick(): asigna un evento click al estilo del sistema operativo Windows

namespace FactoryMethod\Button;

//Producto concreto
class WindowsButton implements ButtonInterface {

    public function render(): void {
        echo "Renderizando botón con estilo Windows\n";
    }

    public function onClick(callable $callback): void {
        echo "Vinculando evento click nativo de Windows\n";
        $callback();
    }
}

?>