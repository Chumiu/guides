---
title: Habilitando el indicador de enviado en Level Info
description: Cómo configurar el indicador de enciado del mod Level Info para hacer que funcione en el GDPS que estás jugando
---

:::caution
Actualmente, este método está "parcialmente" soportado por Level Info. Niveles que han sido enviados se mostrarán como fallidos o con el mensaje "Failed", pero los niveles que son enviados se mostrarán como "Sent"
:::

El indicador de envío de [Level Info](https://geode-sdk.org/mods/m336.levelinfo) no funciona de manera nativa en los GDPS y además requiere configurarlo manualmente; ¡esta guía cubre cómo configurarlo!

## Encontrando el endpoint de envíos de tu GDPS
Primero, encuentra la URL completa al endpoint `sends.php`. Este usualmente está ubicado en `dashboard/api`

**Ejemplo:** `https://m336test.ps.fhgdps.com/dashboard/api/sends.php`
![Ejemplo de ubicación para el endpoint de envíos del GDPS](../../../../assets/gdps/levelinfo-sent-indicator/gdps-sends-endpoint-location.webp)

## Insertando el endpoint de envíos personalizado
Ahora, ve a los ajustes de Level Info y busca "Custom Sends Endpoint". Pega la URL que encontraste, y asegúrate de agregar `?level=` al final.

**Ejemplo:** `https://m336test.ps.fhgdps.com/dashboard/api/sends.php?level=`
![Configurar el endpoint de envíos personalizado](../../../../assets/gdps/levelinfo-sent-indicator/setting-custom-sends-endpoint.webp)

## Aplicar los cambios
Guarda/aplica los cambios de los ajustes. ¡El indicador de envío debería funcionar de nuevo!

-----

*Traducido por [Izumi](https://discord.gg/mvbjWdC6cF)*

*Última actualización: 27 de julio, 2026*
