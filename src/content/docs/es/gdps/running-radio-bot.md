---
title: Tener un bot de Discord de radio 24/7
description: Cómo tener un bot de Discord de radio reproduciendo música desde servidor privado de Geometry Dash 24/7
---

Si no sabes qué es un bot de radio, es básicamente un bot de Discord que reproduce música 24/7 en un canal que hayas indicado. ¡Esta guía te explicará cómo tener y ejecutar uno que reproduzca canciones al azar usadas en tu GDPS!

## Requisitos
Para poder seguir el resto de esta guía, debes asegurarte que:
- Tienes [Bun](https://bun.com/) instalado
- Tienes un dispositivo/servidor capaz de correr 24/7
- Tienes acceso completo al SFTP de tu GDPS y servidor de Discord (con permisos de administrador para agregar al bot)
- Tienes una conexión a internet estable

## Creando el bot
Crea una **aplicación de Discord** y luego un **bot de Discord** desde el [Discord Developer Portal](https://discord.com/developers/applications), luego:
- Copia el token del bot (lo vas a necesitar para el archivo `.env`)
- Debajo de **Generador de URL para OAuth2** selecciona `bot` y luego los permisos `Conectar` y `Hablar`
- Genera el enlace de invitación y agrega el bot a tu servidor

![Generando la el enlace de invitación link desde el Discord Developer Portal](../../../../assets/gdps/running-radio-bot/generating-invite-link.webp)

## Agregando el endpoint del bot
Agrega un archivo llamado `randomSong.php` en algún lugar del SFTP de tu GDPS **(asegúrate de reemplazar la línea `require "path/to/incl/lib/connection.php";` con la ruta correcta en tu servidor)**:
```php
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

require "path/to/incl/lib/connection.php"; // Edita la ruta en esta línea!

$song = $db->prepare("SELECT * FROM songs WHERE isDisabled = 0 AND download != 'CUSTOMURL' ORDER BY RAND() ASC LIMIT 1");
$song->execute();
$song = $song->fetch();

$data = [
    "ID" => $song["ID"],
    "author" => $song["authorName"],
    "name" => $song["name"],
    "download" => $song["download"],
    "reuploadID" => $song["reuploadID"],
    "reuploadTime" => $song["reuploadTime"]
];

exit(json_encode([
    "dashboard" => true,
    "success" => true,
    "song" => $data
]));
?>
```

:::caution
Este archivo debe ser disponible públicamente (mediante HTTP/HTTPS).
:::

**Ejemplo:** `https://m336test.ps.fhgdps.com/randomSong.php` (con `require "incl/lib/connection.php";`)

## Descargando e iniciando el bot
1. [Descarga el repositorio](https://github.com/M336G/gdps-radio-bot/archive/refs/heads/main.zip) en un dispositivo/servidor que pueda correr 24/7 o puedes clonarlo con: `git clone https://github.com/M336G/gdps-radio-bot.git`
2. Luego, en su (descomprimida) carpeta, instala dependencias con `bun install` y llena un archivo `.env` acorde a lo que necesites (revisa [.env.example](https://github.com/M336G/gdps-radio-bot/blob/main/.env.example) para un ejemplo)
3. Finalmente, inicia el bot con `bun run start`!

:::tip
**Asegúrate que:**
- El bot está en línea en Discord
- Reproduce canciones en el canal deseado
:::

## Impidiendo a otros invitar el bot
:::note
Esto es meramente opcional, ya que el bot no funcionará en otros servidores de todos modos, ¡pero siempre está bien y es un último paso para concluir!
:::

En el [Discord Developer portal](https://discord.com/developers/applications), coloca:
- **Contexto de instalación** como `Instalación de Servidor` únicamente (en la categoría de Instalación)
- **Enlace de Instalación** a `Ninguno` (también en la categoría de Instalación)
- **Bot Público** en `falso` (en la categoría Bot)

![Configurando el Contexto de Instalación  y el Enlace de Instalación en el Discord Developer Portal](../../../../assets/gdps/running-radio-bot/disabling-context-link.webp)

![Disabling Public Bot on the Discord Developer Portal](../../../../assets/gdps/running-radio-bot/disabling-public-bot.webp)

-----

*Traducido por [Izumi](https://discord.gg/mvbjWdC6cF)*

*Última actualización: 22 de octubre, 2026*
