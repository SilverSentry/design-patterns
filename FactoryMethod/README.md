# Factory Method Pattern

El patrón Factory Method en PHP, para ser ordenado y escalable, se recomienda seguir una estructura de carpetas basada en principios de separación por responsabilidades y autocarga. No hay un único "patrón de carpetas" obligatorio, pero en este ejemplo, se optó por el siguiente:

## Estructura

```
FactoryMethod/
└── src/
    ├── Button/
    │   ├── ButtonInterface.php    # Interfaz del producto
    │   ├── WindowsButton.php      # Producto concreto (Windows)
    │   └── HTMLButton.php         # Producto concreto (Web)
    │
    ├── Dialog/
    │   ├── DialogAbstract.php     # Creador abstracto (Factory Method)
    │   ├── WindowsDialog.php      # Creador concreto (Windows)
    │   └── WebDialog.php          # Creador concreto (Web)
    │
    ├── Application/
    │   └── Application.php        # Cliente que elige el creador
    │
    ├── autoload.php               # Autoload manual para cargar clases
    │
    └── index.php                  # Punto de entrada
```

Esta separación permite añadir un nuevo sistema operativo (ej. MacDialog + MacButton) sin modificar los archivos existentes, cumpliendo el principio Open/Closed (abierto a extensión, cerrado a modificación).
