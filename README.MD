## Description - English version

`RPG game inspired by Pokémon for mobile devices (Android). Official Pokedex API consumed.`

## Getting started

#### 1. Turn on Android emulator.

`Android Studio or the one you use to emulate.`

#### 2. Install Ngrok.

`https://dashboard.ngrok.com/get-started/setup`

#### 3. Start Ngrok in windows terminal with the following command.

`ngrok http 5000`

#### 4. Run the bash script that starts the local server "pokedex_python_api" (download previously repository).

`./run.sh`

#### 5. Modify the variable of the index.js file located in the "constants" folder with the https:// path returned by Ngrok.

`example: export const LOCALHOST = 'https://694d-152-168-230-161.ngrok-free.app';`

#### 6. With the previously installed dependencies of React Native, Start Metro with the command.

`npx react-native run-android`

## Descripción - Versión Español

`Juego RPG inspirado en Pokémon para dispositivos móviles (Android). API oficial Pokedex consumida.`

## Primeros Pasos 

#### 1. Encender emulador Android.

`Android Studio ó el que utilices para emular.`

#### 2. Instalar Ngrok.

`https://dashboard.ngrok.com/get-started/setup`

#### 3. Iniciar Ngrok en terminal de windows con el siguiente comando.

`ngrok http 5000`

#### 4. Correr el script de bash que levanta el servidor local "pokedex_python_api" (descargar previamente repositorio).

`./run.sh`

#### 5. Modifica la variable del archivo index.js ubicado en la carpeta "constants" con la ruta https:// devuelta por Ngrok.

`Ejemplo: export const LOCALHOST = 'https://694d-152-168-230-161.ngrok-free.app';`

#### 6. Con las dependencias instaladas previamente de React Native, iniciar Metro con el comando.

`npx react-native run-android`
