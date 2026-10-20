---
title: Agregar Insignias Personalizadas a tu GDPS
description: Cómo agregar insignias a jugadores en tu GDPS usando un mod de Geode
---

:::note
Esto está principalmente dirigido a owners/administradores de GDPSs; si eres solo un jugador regular, deberías esperar  a que tu GDPS anuncie compatibilidad con este mod para ver las insignias personalizadas agregadas dentro del juego.
:::

Esta guía te mostrará cómo agregar insignias personalizadas a tus jugadores dentro del juego usando el mod [GDPS Badges](https://geode-sdk.org/mods/m336.gdps-badges)!

![Vistazo del mod desde el perfil](../../../../assets/gdps/adding-custom-badges/preview-image.webp)

![Vistazo del mod desde la interfaz de insignias](../../../../assets/gdps/adding-custom-badges/preview-image-2.webp)

## Requisitos
Para poder seguir el resto de esta guía, necesitarás estar seguro que:
- Tienes acceso completo al SFTP de tu GDPS
- Haz diseñado algunas Insignias que quieras agregar (Después de todo, ese es el punto de esta guía... cierto? *La resolución recomendada es 92x92, además el mod únicamente acepta el formato PNG*)

## Crea badges.json
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
| `modBadge` | Add the custom badge if one of the mod badges is present. Can be either `leaderboard`, `elder` or `regular` | `"modBadge": "elder"` |
| `minRank` | Minimum global rank required to have the badge | `"minRank": 1` |
| `maxRank` | Maximum global rank allowed to have the badge | `"maxRank": 100` |
| `minStars` | Minimum number of stars required to have the badge | `"minStars": 1000` |
| `maxStars` | Maximum number of stars allowed to have the badge | `"maxStars": 5000` |
| `minMoons` | Minimum number of moons required to have the badge | `"minMoons": 500` |
| `maxMoons` | Maximum number of moons allowed to have the badge | `"maxMoons": 2000` |
| `minGoldCoins` | Minimum number of secret coins required to have the badge | `"minGoldCoins": 50` |
| `maxGoldCoins` | Maximum number of secret coins to have the badge | `"maxGoldCoins": 164` |
| `minSilverCoins` | Minimum number of user coins required to have the badge | `"minSilverCoins": 100` |
| `maxSilverCoins` | Maximum number of user coins allowed to have the badge | `"maxSilverCoins": 500` |
| `minDemons` | Minimum amount of demons beaten required to have the badge | `"minDemons": 10` |
| `maxDemons` | Maximum amount of demons beaten allowed to have the badge | `"maxDemons": 100` |

## Adding the badge icons
Now, just drag and drop the textures you have into the `badges` folder.
Make sure that it has the same name as the ID you put for the respective badge in `badges.json`!

For example, if you want to add the texture for the Demon Grinder badge above, you'd drag and drop a file named `demon-grinder.png`.
![Files in the badge folder in SFTP](../../../../assets/gdps/adding-custom-badges/sftp-example.webp)

## Sharing the mod
Now, just inform your players that your GDPS is compatible with the mod:
- Either by [downloading it manually](https://geode-sdk.org/mods/m336.gdps-badges) and putting it in the Geode mods folder,
- Or, in-game, downloading it **from the index** as shown below:
![Downloading GDPS Badges from the Geode mods index](../../../../assets/gdps/adding-custom-badges/download-from-index.webp)

-----

*Last updated: July 27th, 2026*
