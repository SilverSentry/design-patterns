# Abstract Factory Pattern

Se usó un ejemplo similar al Factory Method: creación de elementos UI para diferentes plataformas, esto suponiendo una aplicación que puede correr en diferentes entornos (CLI, Web) o con diferentes estrategias.

En Node.js, los patrones de diseño se aplican igual, siendo de hecho, este patrón muy usado en Node.js para manejar múltiples proveedores de servicios, sistemas de notificación (email, SMS, push), o diferentes estrategias de procesamiento:

Desacoplamiento: La aplicación no necesita require directo de productos concretos.

Testabilidad: Se puede inyectar una fábrica mock en los tests.

Flexibilidad: Cambiar la familia completa cambiando una variable de entorno.

Escalabilidad: Para agregar una nueva familia (ej: MacFactory), solo se crean nuevos productos y una nueva fábrica, sin modificar Application.

Estructura:

AbstractFactory/
├── index.ts                    # Punto de entrada
├── package.json                # Dependencias
├── tsconfig.json               # Configuración TypeScript
└── src/
    ├── app/
    │   └── Application.ts      # Cliente: usa fábricas abstractas
    ├── config/
    │   └── index.ts             # Selector de fábrica por entorno
    ├── factories/
    │   ├── GUIFactory.interface.ts   # Interfaz de fábrica abstracta
    │   ├── WebFactory.ts             # Fábrica concreta: Web
    │   └── WindowsFactory.ts         # Fábrica concreta: Windows
    └── products/
        ├── buttons/
        │   ├── button.interface.ts   # Producto abstracto: Button
        │   ├── WebButton.ts          # Producto concreto: Web
        │   └── WindowsButton.ts      # Producto concreto: Windows
        └── checkbox/
            ├── checkbox.interface.ts # Producto abstracto: Checkbox
            ├── WebCheckbox.ts         # Producto concreto: Web
            └── WindowsCheckbox.ts    # Producto concreto: Windows

products/: Contiene las interfaces y clases concretas de los productos. Cada producto se agrupa en su propia subcarpeta (button, checkbox) para mantener la separación. Esto facilita añadir nuevos tipos de productos sin afectar a otros.

factories/: Contiene la fábrica abstracta y las implementaciones concretas. Cada fábrica concreta sabe cómo instanciar todos los productos de una familia.

app/: Contiene la lógica de negocio (Application) que utiliza los productos a través de sus interfaces. Nunca depende de clases concretas.

config/: Decide dinámicamente qué fábrica usar según variables de entorno, archivos de configuración, etc.

index.ts: Orquesta la inicialización; obtiene la fábrica, crea la aplicación y la ejecuta.

Comando para ejecutar: npx tsc; node dist/index
