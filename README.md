# Juego - Adivina el Número

> Nota: Proyecto en desarrollo.

¡Hola! Bienvenido/a a mi pequeño juego **Adivina el Número**. Te invito a que eches un vistazo a mi repositorio, y también a que accedas al enlace de la página web y lo pruebes.

## En qué consiste

Al entrar en la web veremos un mensaje de bienvenida que será diferente en función de las veces que hayamos entrado en ella. Además aparecen las reglas e instrucciones del juego para los usuarios. Haremos click en el botón **Jugar** para acceder al juego.

Una vez dentro del juego, la aplicación genera un número al azar entre 1 y 100 (se muestra en la consola para comprobar que la función lo genera correctamente) y tenemos que adivinarlo. El juego da pistas sobre si el número que probamos es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final acertemos el número.

## Cómo funciona

- Se almacena en el Local Storage las veces que un usuario entra en la página web, de esta manera se muestra un mensaje de bienvenida indicando este dato.
- Haciendo click en **Jugar**, desaparecen las reglas y se pinta el juego.
- El jugador introduce un número en el input y da al botón de **Comprobar**.
- Debajo, en el apartado de **Pista** aparecen los siguientes textos:
  - Al arrancar la página: **Escribe un número y haz click en "Comprobar"**.
  - Cuando el jugador introduzca un número mayor que el aleatorio y pulse en Prueba: **Demasiado alto**.
  - Cuando el jugador introduzca un número menor que el aleatorio y pulse en Prueba: **Demasiado bajo**.
  - Cuando el jugador introduzca un número igual que el aleatorio y pulse en Prueba: **¡¡¡Has acertado!!!**
  - Cuando el jugador no introduzca un número válido y pulse en Prueba: **El número debe estar entre 1 y 100**.
  - En la parte inferior aparece un mensaje indicando el número de intentos.
- Si se quiere adivinar otro número, se puede hacer click en el botón **Volver a empezar** o recargar la página.
- Además, si se hace click en la tecla _Intro_, el juego se recarga igualmente.

## Herramientas utilizadas

- HTML5
- CSS3, SCSS
- JavaScript
- NodeJS
- Gulp
- Git

## Cómo arrancar el proyecto

Necesitas tener instalado [Node JS](https://nodejs.org/en) para poder arrancar este proyecto.

1. Instala las dependecias locales ejecutando en la terminal el comando:

```
npm install
```

2. Instala el paquete para SASS:

```
npm install node-sass
```

3. Arranca el proyecto ejecutando a continuación en la terminal:

```
npm start
```

Se abrirá [http://localhost:3000 ](http://localhost:3000)para ver el proyecto en el navegador en modo desarrollo.
