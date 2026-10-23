---
title: Editar las texturas de tu GDPS
description: cómo encontrar y editar las texturas de tu servidor privado de Geometry Dash
---

:::caution
Esta guía **NO** te enseña cómo diseñar texturas!
:::

¿No sabes cómo editar las texturas del juego para tu GDPS? Esta guía te enseñará cómo hacerlo.
## Requisitos
Para poder seguir con el resto de la guía, debes estar seguro que:
- Tienes un editor de imágenes (como [Photoshop](https://www.adobe.com/products/photoshop.html), [Pixlr](https://pixlr.com/), [ibisPaint X](https://ibispaint.com/productWin.jsp), [Krita](https://krita.org/), [GIMP](https://www.gimp.org/)...)
- Tienes las textures/spritesheets base para hacerlo

## Encontrando las texturas
Dirígete a la carpeta `Resources` de tu GDPS y encuentra las texturas que quieres editar. Verás que muchas de ellas están dentro de un gran archivo con muchas otras texturas. Esto se llama spritesheet.

![Encontrar las texturas dentro de la carpeta de recursos de tu GDPS](../../../../assets/gdps/editing-gdps-textures/finding-textures-resources.webp)
Cada textura en Geometry Dash tiene tres versiones: una terminada en `-uhd` para los ajustes los gráficos de calidad "High" o alta, uba terminada en `-hd` para el ajuste de calidad "Medium" o media (y la única disponible en móviles), y otra que no termina en ningúna de las anteriores que es el ajuste de calidad Low o baja
*Si la textura que quieres editar no está en una spritesheet, puedes editarla directamente y saltar el resto de esta guía (el [tip extra al final](#tip-extra) puede ser muy útil aún así!).*

## Extrayendo las texturas
Para extreaer las texturas de una spritesheet, dirígete a [GDSplitter de GDColon](https://gdcolon.com/gdsplitter/) y simplemente arrastra los archivos PNG y PLIST del spritesheet que quieras editar. Dale algunos segundos para que cargue, y una vez importado, haz click en "Download all (.zip)".
![Descargando y extrayendo las texturas del spritesheet](../../../../assets/gdps/editing-gdps-textures/downloading-spritesheet-textures.webp)

Descomprime el archivo que acabas de descargar, ¡y ahora puedes modificar libremente las texturas que quieras! **Aunque, asegúrate de mantener la resolución de las mismas exactamente igual a como están.**
![Texturas extraídas del spritesheet](../../../../assets/gdps/editing-gdps-textures/extracted-spritesheet-textures.webp)

## Reuniendo las texturas (merge)
Cuando termines de editar las texturas que extraiste, regresa a [GDSplitter de GDColon](https://gdcolon.com/gdsplitter/) y esta vez haz click en "Merge sprites".

Importa todas las texturas desde el folder extraído, haz click en "Continue", asegurate de ingresar el nombre del spritesheet original sin su extensión y to selecciona la resolución correcta para tus texturas, ¡y crea el spritesheet!
![Unir de nuevo las texturas del spritesheet](../../../../assets/gdps/editing-gdps-textures/merging-spritesheet-textures.webp)

## Tip extra
Primero comienza con la calidad "High"! De esa forma todo lo que necesitas hacer es cambiar el tamaño de la textura a su resolución correcta para las versiones de calidad "Medium" y "Low".

---

*Traducido por [Izumi](https://discord.gg/mvbjWdC6cF)*

*Última actualización: 27 de julio, 2026*
