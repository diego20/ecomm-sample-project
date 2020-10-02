# Sample Ecommerce Project

La aplicación funciona con detalles de comportamiento y visuales que buscan brindar una experiencia fácil, agradable y predecible al usuario.

Tecnologías usadas:
- Librería desarrollo: React
- Estilos: SASS
- Manejo de estado: Redux
- Pruebas: Jest y Emzyme

El estado del shopping cart se diseño de tal manera que se pueda almacenar en el localStorage del navegador y ser recuperado cuando el usuario vuelva a la página.


### Correr el repositorio en ambiente local

Asegurarse de tener Node y NPM instalado en el computador.

Ejecutar el siguiente comando en el terminal sobre la carpeta del proyecto
```sh
$ npm install
```
Correr el proyecto mediante el siguiente comando una vez haya finalizado el comando anterior.
```sh
$ npm start
```
Se deberá abrir una ventana del navegador apuntando a http://localhost:3000

### Correr tests
Ejecutar el siguiente comando en el terminal sobre la carpeta del proyecto
```sh
$ npm run test
```
Se correrán automáticamente todas las pruebas del proyecto.

### Compilar la aplicación
Ejecutar el siguiente comando en el terminal sobre la carpeta del proyecto
```sh
$ npm run build
```
Se creará el build del proyecto en la carpeta /build.