---
title: Agregar Insignias Personalizadas a tu GDPS
description: Cómo agregar insignias a jugadores en tu GDPS usando un mod de Geode
---

:::note
Esto está principalmente dirigido a owners/administradores de GDPSs; si eres solo un jugador regular, deberías esperar  a que tu GDPS anuncie compatibilidad con este mod para ver las insignias personalizadas agregadas dentro del juego.
:::

¡Esta guía te mostrará cómo agregar insignias personalizadas a tus jugadores dentro del juego usando el mod [GDPS Badges](https://geode-sdk.org/mods/m336.gdps-badges)!

![Vistazo del mod desde el perfil](../../../../assets/gdps/adding-custom-badges/preview-image.webp)

![Vistazo del mod desde la interfaz de insignias](../../../../assets/gdps/adding-custom-badges/preview-image-2.webp)

## Requisitos
Para poder seguir el resto de esta guía, necesitarás estar seguro que:
- Tienes acceso completo al SFTP de tu GDPS
- Haz diseñado algunas Insignias que quieras agregar (Después de todo, ese es el punto de esta guía... cierto? *La resolución recomendada es 92x92, además el mod únicamente acepta el formato PNG*)

## Crear badges.json
En el SFTP, ve a la ruta pública de tu GDPS (usualmente es `public_html`) y crea una nueva carpeta llamada `badges`; ahí es donde vas a definir las propiedades para tus insignias y sus texturas.

Dentro de la carpeta `badges`, crea un archivo llamado `badges.json` y llénalo con base en este ejemplo:
```json
[
    {
        "id": "owner",
        "name": "Owner",
        "description": "Este es el <cr>owner</c> de este GDPS!",
        "requirements": {
            "players": [ 72 ]
        }
    },
    {
        "id": "demon-grinder",
        "name": "Demon Grinder",
        "description": "Este jugador ha completado mas de <cr>2,500</c> niveles demon!",
        "requirements": {
            "minDemons": 2500,
            "maxDemons": 9999
        }
    }
]
```

### Posibles requisitos
| Propiedad | Descripción | Ejemplo |
| --- | --- | --- |
| `players` | Una whitelist de IDs de cuentas que pueden tener la insignia | `"players": [ 72, 73, 74 ]` |
| `modBadge` | Agrega la Insignia personalizada si una de las insignias de moderador está presente. Puede ser `leaderboard`, `elder` o `regular` | `"modBadge": "elder"` |
| `minRank` |  Global rank mínimo requerido para tener la insignia | `"minRank": 1` |
| `maxRank` | Global rank máximo permitido para tener la insignia | `"maxRank": 100` |
| `minStars` | Mínimo número de estrellas requerido para tener la insignia | `"minStars": 1000` |
| `maxStars` | Máximo número de estrellas permitido para tener la insignia | `"maxStars": 5000` |
| `minMoons` | Mínimo número de lunas requerido para tener la insignia | `"minMoons": 500` |
| `maxMoons` | Maximo número de lunas permitido para tener la insignia | `"maxMoons": 2000` |
| `minGoldCoins` | Mínimo número de secret coins requerido para tener la insignia | `"minGoldCoins": 50` |
| `maxGoldCoins` | Maximo número de secret coins para tener la insignia | `"maxGoldCoins": 164` |
| `minSilverCoins` | Mínimo número de user coins requerido para tener la insignia | `"minSilverCoins": 100` |
| `maxSilverCoins` | Maximo número de user coins permitido para tener la insignia | `"maxSilverCoins": 500` |
| `minDemons` | Cantidad mínima de demons completados requerida para tener la insignia | `"minDemons": 10` |
| `maxDemons` | Máxima cantidad de demons completados permitida para tener la insignia | `"maxDemons": 100` |

## Agregar los iconos de las insignias
Ahora, solo pon las texturas que tienes en la carpeta llamada `badges`.
¡Asegúrate que tengan el mismo nombre que la ID que pusiste a a respectiva insignia en `badges.json`!

Por ejemplo, si quieres agregar la textura para la insignia de Demon Grinder badge, tienes que arrastrar y soltar el archivo como se muestra abajo, nombrado como `demon-grinder.png`.
![Archivos en la carpeta de insignias en el SFTP](../../../../assets/gdps/adding-custom-badges/sftp-example.webp)

## Compartir el mod
Ahora, simplemente informa a tus jugadores que tu GDPS es compatible con el mod:
- Ya sea [descargando el mod manualmente](https://geode-sdk.org/mods/m336.gdps-badges) y poniéndolo en la carpeta de mods de Geode,
- O, dentro del juego, descargando este **desde el index** de Geode como se muestra aquí abajo:
![Downloading GDPS Badges from the Geode mods index](../../../../assets/gdps/adding-custom-badges/download-from-index.webp)

-----

*Traducido por [Izumi](https://discord.gg/mvbjWdC6cF)*

*Última actualización: 27 de julio, 2026*
