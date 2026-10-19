---
title: Список всех команд
description: Все команды, которые вы можете использовать на GDPS используя форк GMDprivateServer MegaSa1nt'а.
---

Это все команды, доступные на GDPS используя [форк GMDprivateServer MegaSa1nt'а](https://github.com/MegaSa1nt/GMDprivateServer/tree/master)!

*Некоторые команды имеют опциональные аргументы, не перечисленные здесь для простоты.*

## Команды для уровня
Эти команды могут быть использованы в секции комментариев под уровнем!

### Оценка
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!rate` / `!r <сложность> <звёзды> <монетки> <оценка>` | `commandRate` | Оценивает уровень. `сложность`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, или `demon`. `монетки`: `1` = вкл, `0` = выкл. `оценка`: `0` = простая оценка, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unrate` / `!unr` | `commandRate` | Снимает оценку с уровня полностью. |
| `!send <сложность> <звёзды> <оценка>` | `actionSuggestRating` | Отправляет уровень на оценку. `сложность`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, или `demon`. `оценка`: `0` = простая оценка, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unsend` | `actionSuggestRating` | Снимает отправку уровня полностью. |

### Feature
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!rate` / `!f` | `commandFeature` | Делает уровень Featured. |
| `!epic` | `commandEpic` | Делает уровень эпическим. |
| `!legendary` | `commandEpic` | Делает уровень легендарным. |
| `!mythic` | `commandEpic` | Делает уровень мифическим. |
| `!unfeature` | `commandFeature` | Снимает оценку. |
| `!unepic` | `commandEpic` | Снимает эпическую оценку. |
| `!unlegendary` | `commandEpic` | Снимает легендарную оценку. |
| `!unmythic` | `commandEpic` | Снимает мифическую оценку. |

### Daily
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!daily` / `!da` | `commandDaily` | Устанавливает уровень как следующий ежедневный уровень. |
| `!weekly` / `!w` | `commandWeekly` | Устанавливает уровень как следующий еженеедельный уровень. |
| `!event` / `!ev <minutes> <reward ID> <amount>` | `commandEvent` | Ставит уровень как следующий ивентовый уровень на определённую длину. Добавить некоторые награды: `!event <minutes> <reward ID> <amount> <reward ID> <amount>...` [Идентификаторы наград](#rewards). |

### Монетки и Очки Креатора
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!verifycoins` / `!vc` | `commandVerify` | Верифицирует монетки уровня. |
| `!unverifycoins` | `commandVerify` | Снимает верификацию монетки уровня. |
| `!sharecp <username>` | `commandSharecpOwn` / `commandSharecpAll` | Поделиться Очками креатора, полученного с уровня с другим пользователем |

### Управление
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!setacc` / `!sa <username/account ID>` | `commandSetacc` | Меняет создателя уровня. |
| `!lockUpdating` / `!lu` | `commandLockUpdating` | Ограничивает создателя уровня от обновления уровня |
| `!unlockUpdating` / `!unlu` | `commandLockUpdating` | Разрешает создателю уровня обновить уровень снова |
| `!rename` / `!re <name>` | `commandRenameOwn` / `commandRenameAll` | Переименование уровня. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Изменение описания уровня. |
| `!song` / `!s <song ID>` | `commandSongOwn` / `commandSongAll` | Меняет песню уровня. |
| `!public` / `!pub` | `commandPublicOwn` / `commandPublicAll` | Делает уровень публичным. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Делает уровень приватным. |
| `!ldm` | `commandLdmOwn` / `commandLdmAll` | Включает LDM на уровне. |
| `!unldm` | `commandLdmOwn` / `commandLdmAll` | Выключает LDM на уровне. |
| `!password` / `!pass` / `!p <6 digits>` | `commandPassOwn` / `commandPassAll` | Установить пароль для копирования уровня. Введите `000000` чтобы убрать его. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Блокирует комментарии под уровнем. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Разблокировка комментариев под уровнем. |
| `!delete` / `!delet` / `!d` | `commandDelete` | Удаляет уровень. |

![Пример команды уровней](../../../../assets/gdps/all-commands-list/level-command-example.webp)

## Команды Листов
Эти команды могут быть использованы в секциии комментариев под листом!

### Оценка
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!rate` / `!r <награда> <сложность> <featured> <кол-во уровней>` | `commandRate` | Оценивает лист. `сложность`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, или `demon`. `featured`: `0` = простая оценка, `1` = featured. `count`: уровней необходимо пройти для получения награды. Только если с `actionSuggestRating`, оно предлагает его вместо. [Идентификаторы наград](#rewards). |
| `!rate` / `!f` | `commandFeature` | Делает лист Featured. |
| `!unfeature` | `commandFeature` | Снимает оценку. |

### Управление
| Команда | Разрешение | Описание |
| --- | --- | --- |
| `!rename` / `!re <name>` | `commandRenameOwn` / `commandRenameAll` | Переименовывает лист. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Меняет описание листа. |
| `!setacc` / `!sa <username/account ID>` | `commandSetacc` | Меняет создателя листа. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Делает лист приватным. Используйте `!unlist 0` для публичности, `!unlist 1` для только-друзей. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Блокирует комментарии под листом. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Разблокировывает комментарии под листом. |
| `!delete` / `!d` | `commandDelete` | Удаляет лист. |

![Пример команд листов](../../../../assets/gdps/all-commands-list/list-command-example.webp)

## Команды профиля
Эти команды могут быть использованы под секцией комментариев профиля! Работает только если GDPS поддерживает привязку аккаунтов Discord.

| Команда | Описание |
| --- | --- |
| `!discord link <discord ID>` | Начинает процесс привязки и отправляет 4х-значный код в ЛС. |
| `!discord accept <code>` | Привязывает ваш профиль к Discord если код верен. |
| `!discord unlink` | Снимает привязку вашего Discord аккаунта. |

![Пример профильных команд](../../../../assets/gdps/all-commands-list/profile-command-example.webp)

## Награды
Это идентификаторы наград разного типа

### Shard награды
| ID | Награда |
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

### Icon награды
| ID | Награда |
| --- | --- |
| **1001** | Cube |
| **1002** | Color 1 |
| **1003** | Color 2 |
| **1004** | Ship |
| **1005** | Ball |
| **1006** | UFO |
| **1007** | Wave (Dart) |
| **1008** | Robot |
| **1009** | Spider |
| **1010** | Trail |
| **1011** | Death Effect |
| **1013** | Swing |
| **1014** | Jetpack |
| **1015** | Ship fire |

### Другие награды
| ID | Награда |
| --- | --- |
| **6** | Demon Key |
| **7** | Orbs |
| **8** | Diamond |
| **15** | Gold Key |
| **1012** | Items (keys, paths, gems, music hack, etc.) |

-----

*Перевела [elixia](https://t.me/elixiadev)*

*Последнее обновление: 14 Июля, 2026*