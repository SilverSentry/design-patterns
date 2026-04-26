<?php
//Responsabilidad: Cliente que decide qué creador concreto usar según la configuración (sistema operativo, entorno, etc.) y ejecuta la acción

//Leer la configuración (archivo, variable de entorno, parámetro)
//Instanciar el diálogo correspondiente (WindowsDialog o WebDialog)
//Llamar al método render() del diálogo

namespace FactoryMethod\Application;

use FactoryMethod\Dialog\DialogAbstract;
use FactoryMethod\Dialog\WindowsDialog;
use FactoryMethod\Dialog\WebDialog;

class Application {

    private DialogAbstract $dialog;

    public function initialize(string $os): void {
        $this->dialog = match ($os) {
            'Windows' => new WindowsDialog(),
            'Web'     => new WebDialog(),
            default   => throw new \Exception("Sistema operativo desconocido")
        };
    }

    public function run(): void {
        $config = $this->readConfig(); //Retorna 'Windows' o 'Web'
        $this->initialize($config);
        $this->dialog->render();
    }

    private function readConfig(): string {

        //Por defecto devolvemos "Windows" para el ejemplo
        return $_ENV['OS_TYPE'] ?? 'Windows'; //Cambiar a "Web" para probar el otro comportamiento
    }
}

?>