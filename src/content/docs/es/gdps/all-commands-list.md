---
title: Lista de Todos los Comandos
description: Todos los comands que puedes usar en un GDPS usando el fork de GMDprivateServer de MegaSa1nt
---

Estos son todos los comandos disponibles en un GDPS usandl [ el fork de GMDprivateServer de MegaSa1nt](https://github.com/MegaSa1nt/GMDprivateServer/tree/master)!

*Algunos comandos tienen argumentos opcionales no listados aquí por simplicidad.*

## Comandos de niveles
¡Estos comandos pueden ser usados en la sección de comentarios de un nivel!

### Rating
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!rate` / `!r <dificultad> <estrellas> <coins> <feature>` | `commandRate` | Le da rate al nivel. `dificultad`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, o `demon`. `coins`: `1` = activar, `0` = desactivar. `feature`: `0` = sólo rate, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unrate` / `!unr` | `commandRate` | Le quita completamente rate al nivel. |
| `!send <dificultad> <estrellas> <feature>` | `actionSuggestRating` | Envía el nivel para rate. `difficulty`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, o `demon`. `feature`: `0` = solo rate, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unsend` | `actionSuggestRating` | Cancela el envío del nivel completamente. |

### Feature
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!feature` / `!f` | `commandFeature` | Le da featured al nivel. |
| `!epic` | `commandEpic` | Le da epic al nivel. |
| `!legendary` | `commandEpic` | Le da legendary al nivel. |
| `!mythic` | `commandEpic` | Le da mythic al nivel. |
| `!unfeature` | `commandFeature` | Remueve el featured. |
| `!unepic` | `commandEpic` | Remueve el epic. |
| `!unlegendary` | `commandEpic` | Remueve el legendary. |
| `!unmythic` | `commandEpic` | Remueve el mythic. |

### Daily
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!daily` / `!da` | `commandDaily` | Coloca el nivel como el siguiente daily. |
| `!weekly` / `!w` | `commandWeekly` | Coloca el nivel cono el siguiente weekly. |
| `!event` / `!ev <minutos> <ID de recompensa> <cantidad>` | `commandEvent` | Coloca el nivel como el próximo event por la duración especificada. Agregar multiples recomoensas: `!event <minutos> <ID de recompensa> <cantidad> <ID de recompensa> <cantidad>...` [IDs de recomoensas](#recompensas). |

### Monedas y Creator Points
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!verifycoins` / `!vc` | `commandVerify` | Verifica las coins del nivel. |
| `!unverifycoins` | `commandVerify` | Anula la verificación de las coins del nivel. |
| `!sharecp <nombre de usuario>` | `commandSharecpOwn` / `commandSharecpAll` | Comparte los creator points del nivel con otro usuario. |

### Administración
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!setacc` / `!sa <usuario/ID de cuenta>` | `commandSetacc` | Cambia el creador del nivel. |
| `!lockUpdating` / `!lu` | `commandLockUpdating` | Previene que el creador actualice el nivel. |
| `!unlockUpdating` / `!unlu` | `commandLockUpdating` | Permite al creator actualizar el nivel de nuevo. |
| `!rename` / `!re <nombre>` | `commandRenameOwn` / `commandRenameAll` | Renombra el nivel. |
| `!description` / `!desc <descripción>` | `commandDescriptionOwn` / `commandDescriptionAll` | Cambia la descripción del nivel. |
| `!song` / `!s <song ID>` | `commandSongOwn` / `commandSongAll` | Cambia la canción del nivel. |
| `!public` / `!pub` | `commandPublicOwn` / `commandPublicAll` | Hace público el nivel. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Hace el nivel unlisted. |
| `!ldm` | `commandLdmOwn` / `commandLdmAll` | Habilita el modo Low Detail en el nivel. |
| `!unldm` | `commandLdmOwn` / `commandLdmAll` | Deshabilita el modo Low Detail en el nivel. |
| `!password` / `!pass` / `!p <6 digitos>` | `commandPassOwn` / `commandPassAll` | Le coloca contraseña de copianal Nivel. Envía `000000` para removerla. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Bloquea los comentarios del nivel. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Desbloquea los comentarios del nivel. |
| `!delete` / `!delet` / `!d` | `commandDelete` | Elimina el nivel. |

![Ejemplo de comando de nivel](../../../../assets/gdps/all-commands-list/level-command-example.webp)

## Comandos de Lista
¡Estos comandos pueden ser usados en la sección de comentarios de las listas/lists!

### Rating y Feature
| Comando | Permiso | Descripción |
| --- | --- | --- |
| `!rate` / `!r <recompensa> <dificultad> <featured> <cantidad>` | `commandRate` | Rates la lista. `difficulty`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, o `demon`. `featured`: `0` = solo rate, `1` = featured. `count`: niveles requeridos para completar la lista. Con solo `actionSuggestRating`, envía la lista en su lugar. [IDs de recompensas](#recompensas). |
| `!feature` / `!f` | `commandFeature` | Le da featured a la lista. |
| `!unfeature` | `commandFeature` | Remueve el featured. |

### Administración
| Command | Permission | Description |
| --- | --- | --- |
| `!rename` / `!re <nombre>` | `commandRenameOwn` / `commandRenameAll` | Renombea la lista. |
| `!description` / `!desc <descripción>` | `commandDescriptionOwn` / `commandDescriptionAll` | Cambia la descripción de la lista. |
| `!setacc` / `!sa <usuario/ID de cuenta>` | `commandSetacc` | Cambia el creador de la lista. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Hace unlisted a la lista. Usa `!unlist 0` para público, `!unlist 1` para solo amigos. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Bloquea la lista de comentarios. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Desbloquea la lista de comentarios. |
| `!delete` / `!d` | `commandDelete` | Elimina la lista. |

![Ejemplo de comando de lista](../../../../assets/gdps/all-commands-list/list-command-example.webp)

## Comandos de perfol
¡Estos comandos se pueden usar en la sección de comentarios del perfil! Solo funciona si el GDPS soports vincular cuentas Discord.

| Comando | Descripción |
| --- | --- |
| `!discord link <discord ID>` | Empieza el proceso de vinculación y envía un código de 4 dígitos a tus MDs. |
| `!discord accept <code>` | Vincula tu perfil a tu cuenta de Discord si el código es válido. |
| `!discord unlink` | Desvincula tu perfil de tu cuenta de Discord. |

![Ejemplo de comando de perfil](../../../../assets/gdps/all-commands-list/profile-command-example.webp)

## Recomoensas
Estas son las IDs de cada tipo de recompensa.

### Recompensas de Shards
| ID | Recompensa |
| --- | --- |
| **1** | Fire Shard |
| **2** | Ice Shard |
| **3** | Poison Shard |
| **4** | Shadow Shard |
| **5** | Lava Shard |
| **10** | Earth Shard |
| **11** | Blood Shard |
| **12** | Metal Shard |
| **13** | Light Shard |
| **14** | Soul Shard |

### Recomoensas de Íconos
| ID | Reward |
| --- | --- |
| **1001** | Cubo |
| **1002** | Color 1 |
| **1003** | Color 2 |
| **1004** | Ship |
| **1005** | Ball |
| **1006** | UFO |
| **1007** | Wave (Dart) |
| **1008** | Robot |
| **1009** | Spider (Araña) |
| **1010** | Trail (Estela) |
| **1011** | Death Effect (Explosión) |
| **1013** | Swing |
| **1014** | Jetpack |
| **1015** | Ship fire (Fuego de nave) |

### Otras Recompensas
| ID | Reward |
| --- | --- |
| **6** | Demon Key |
| **7** | Orbes |
| **8** | Diamantes |
| **15** | Gold Key |
| **1012** | Items (keys, paths, animaciones, music hack, etc.) |

-----

*Última actualización: 20 de octubre, 2026*
