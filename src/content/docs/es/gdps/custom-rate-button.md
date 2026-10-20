---
title: Botón de Rate Personalizado
description: Como tener botón de rate estilo RobTop para ratear niveles en un GDPS y más, usando un mod de Geode
---

¡Esta guía te enseñará a tener una interfaz como la que [RobTop usa](https://www.youtube.com/watch?v=_wmWuymEZDs) para darle rate a niveles en GDPSs, mediante un mod de Geode!
![Vistazo del mod](../../../../assets/gdps/custom-rate-button/preview-image.webp)

## Introducción
Ahora, este mod no se limita a simplemente darle rate a niveles en GDPSs; también está hecho para:
- Darle rate a niveles sin complicarse encontrando qué permisos se necesitan; internamente, utiliza los comandos `!rate` y `!unrate`, ¡pero agrega una bonita interfaz sobre estos!
- Ser usable sin una insignia de moderador y sin tener que clickear el botón "Req."  en los ajustes del juego. Solo necesitas el [permiso solicitado](#requisitos). *¡Esto incluso te permite dar rate a pesar de que tengas una insignia de Leaderboard Moderator!*
- Ser lo más intuitivo posible: cada botón va directo al grano, sin nada que ocultar.

## Requisitos
Para poder seguir el resto de esta guía, debes estar seguro que:
- Estás en un GDPS (*[GDPS Switcher](https://geode-sdk.org/mods/km7dev.gdps-switcher) también funciona*)
- Tienes el permiso `commandRate` habilitado *(Y ya... eso es todo)*
- Usas [Geode v5.7.1 o superior](https://geode-sdk.org/install)

## Instalar el mod
¡Instalar el mod es realmente simple!
- Puedes [descargarlo manualmente](https://geode-sdk.org/mods/m336.rate-button) y ponerlo en la carpeta de mods de Geode,
- O, dentro del juego, descargalo **desde el index** de Geode como se muestra aquí abajo:
![Descargando Rate Button desde el index de mods de Geode mods](../../../../assets/gdps/custom-rate-button/download-from-index.webp)


## Usando el Mod
Una vez descargado el mod y que hayas reiniciado el juego, notarás un nuevo botón azul cuando entres en un nivel. ¡Esto abre la interfaz para darle rate a niveles!
- Clickear en las flechas de **abajo** y **arriba**, **disminuye** o **incrementa** la **cantidad de estrellas** que el nivel tendrá (la dificultad se establece automáticamente basado en esto)
- Clickear en el **botón de featured** establece si el nivel tiene únicamente **rate**, **featured**, **epic**, **legendary** o **mythic**
- Clickear en el **botón de coins** alterna entre las **coins** **verificadas** y las que **no lo están**

:::tip
Si colocas las estrellas del nivel en 0, este le quitará el rate al nivel completamente, incluso si tenía algún tipo de featured o las coins verificadas.
:::

![Explicación de cada botón](../../../../assets/gdps/custom-rate-button/button-explanations.webp)

## Características Adicionales
En los ajustes del mod, puedes activar y desactivar estos botones adicionales:
- El botón de **Set Daily** permite colocar el nivel como el siguiente daily (requiere el permiso `commandDaily`)
- El botón de **Set Week** permite colocar el nivel como el siguiente weekly (requiere el permiso`commandWeekly`)
- El botón **Send Only** permite enviar el nivel en lugar de darle rate (requiere el permiso `actionSuggestRating`)

![Características adicionales mostradas en los ajustes del mod](../../../../assets/gdps/custom-rate-button/settings-for-additional-features.webp)

-----

*Última actualización: 20 de octubre, 2026*
