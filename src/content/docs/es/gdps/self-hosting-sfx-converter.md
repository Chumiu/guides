---
title: Hostear tu propio convertidor de SFX
description: Cómo hostear tu propio convertidor de SFX para tu GDPS
---

:::note
Está guía está dirigida principalmente para dueños/administradores de GDPSs. Si eres un jugador regular y la conversación de SFX es lenta, puedes decirle al dueño de tu GDPS que siga esta guía :)
:::

:::caution
Esta guía sólo es útil si permites a tus jugadores sus propios SFXs mediante archivos.
:::

Esta guía te enseñará cómo hostear por tu cuenta un convertidor de SFX propio para tu GDPS usando [la implementación original de MegaSa1nt de JavaScript](#configurando-el-convertidor-de-megasa1nt) o [la reescritura en C# de M336](#setting-up-m336s-converter)!

## Requisitos
Para poder seguir el resto de esta guía, debes estar seguro que:
- Tienes ub GDPS usando [el form de GMDPrivateServer de MegaSa1nt](https://github.com/MegaSa1nt/GMDprivateServer/tree/master)
- Tienes un dispositivo/servidor capaz de correr 24/7
- Tienes un nombre de dominio administrado mediante [Cloudflare](https://www.cloudflare.com/)
- Tienes una conexión a internet estable
- 
## Configurando el convertidor
:::tip
En Linux, para mantener tu aplicación corriendo incluso después de salir de tu sesión de SSH, puedes usar algunas soluciones como [PM2](https://pm2.keymetrics.io/docs/faq/) o [Screen](https://www.geeksforgeeks.org/linux-unix/screen-command-in-linux-with-examples/)!
:::

### Configurando el convertidor de MegaSa1nt
1. Descarga [Node.js](https://nodejs.org/en/download), preferiblemente una versión reciente de LTS.
2. [Descarga el repositorio](https://github.com/MegaSa1nt/GDPS-ConvertSFX/archive/refs/heads/main.zip) en un dispositivo o servidor que pueda correr 24/7, o puedes clonarlo usando el siguiente comando: `git clone https://github.com/MegaSa1nt/GDPS-ConvertSFX.git`.
3. Luego, en su (extraída) carpeta, instala las dependencias ejecutando  el comando `npm install`, luego siéntete libre de configurar el archivo [`config.json`](https://github.com/MegaSa1nt/GDPS-ConvertSFX/blob/main/config.json) acorde a lo que necesites.
4. Para terminar, inicia el convertidor ejecutando `node .` dentro de la carpeta del repositorio!

### Configurar el convertidor de M336
1. Descarga el binario precompilado apropiado para tu sistema desde las [releases recientes](https://github.com/M336G/SFXConverter/releases/latest).
2. Luego, en su (extraída) carpeta, siéntete libre de llenar un archivo `.env` acorde a lo que necesites (revisa [.env.example](https://github.com/M336G/SFXConverter/blob/main/.env.example) para un ejemplo).
3. Para finalizar, inicia el convertidor ejecutando el binario dentro de la carpeta extraída (en Linux, primero vas a necesitar hacerlo ejecutable utilizando el comando `chmod +x <binary_name>`).

## Haciendo tu convertidor accesible dentro del internet con Cloudflare Tunnel
:::note
Existen varias manteras de hafer tu convertidor accesible publicando. Esta guía usa Cloudflare Tunnel porque es una de las soluciones más convenientes.

Eres libre de usar cualquier otro método si estás familiarizado con ese!
:::

:::caution
Porfavor nota que Cloudflare Tunnel tiene un límite de subida de 100 MB.
:::

Para dejar que la gente utilize el convertidor desde la dashboard del GDPS, necesitarás hacerlo accesible en internet.

1. Abre la [dashboard de Cloudflare](https://dash.cloudflare.com/), dirígete hasta **Networking > Tunnels**, y haz click en **Create Tunnel**.
2. Dale un nombre a tu tunnel, y sigue las instrucciones para instalar `cloudflared` como un servicio en tu servidor.
![Creando un Cloudflare tunnel](../../../../assets/gdps/self-hosting-sfx-converter/creating-cloudflare-tunnel.webp)

3. Una vez que el tunnel esté configurado, ábrelo, dirígete a **Routes**, haz click en **Add route**, y selecciona **Published application**. Configura la ruta al punto de la URL del convertidor que quieras. Entonces, si no haz cambiado el puerto del convertidor, usa `http://localhost:24157` como la URL del servicio.
![Construyendo el tunnel del convertidor de SFX mediante una aplicación publicada de Cloudflare](../../../../assets/gdps/self-hosting-sfx-converter/adding-published-application.webp)

4. ¡Eso es todo! Ahora tu convertidor debería ser accesible en el internet.

## Usando el convertidor en tu GDPS
Ahora, abre [`config/dashboard.php`](https://github.com/MegaSa1nt/GMDprivateServer/blob/67ede474cbfde8c932ede53198b743e1ffb3f3b7/config/dashboard.php#L59-L64) en la instalación de tu GDPS.

Aquí, puedes elegir en:
- **Utilizar únicamente tu propio convertidor** removiendo los otros convertidores desde la configuración.
![Usando sólo el convertidor de SFX que hostead en tu GDPS](../../../../assets/gdps/self-hosting-sfx-converter/using-only-self-hosted-converter.webp)

- **Mantener los servidores existented y agregar el tuyo** para que todos ellos puedan ser usados.
![Usando el convertidor de SFX que hosteas junto con otros convertidores de SFX en tu GDPS](../../../../assets/gdps/self-hosting-sfx-converter/using-with-other-converters.webp)

-----

*Última actualización: 24 de octubre, 2026*
