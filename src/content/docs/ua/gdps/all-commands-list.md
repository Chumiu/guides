---
title: Перелік усіх команд
description: Усі команди, які ви можете використовувати на GDPS за допомогою форку GMDprivateServer від MegaSa1nt.
---

Це всі команди, доступні на GDPS за допомогою [форку GMDprivateServer від MegaSa1nt](https://github.com/MegaSa1nt/GMDprivateServer/tree/master)!

*Деякі команди мають опціональні аргументи, які для простоти тут не перелічені.*

## Команди для рівня
Ці команди можна використовувати в розділі коментарів під рівнем!

### Оцінка
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!rate` / `!r <складність> <зірки> <монетки> <оцінка>` | `commandRate` | Оцінює рівень. `складність`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane` або `demon`. `монетки`: `1` = увімкнено, `0` = вимкнено. `оцінка`: `0` = проста оцінка, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unrate` / `!unr` | `commandRate` | Повністю знімає оцінку з рівня. |
| `!send <складність> <зірки> <оцінка>` | `actionSuggestRating` | Надсилає рівень на оцінку. `складність`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane` або `demon`. `оцінка`: `0` = проста оцінка, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unsend` | `actionSuggestRating` | Повністю скасовує відправку рівня. |

### Feature
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!rate` / `!f` | `commandFeature` | Робить рівень «Featured». |
| `!epic` | `commandEpic` | Робить рівень епічним. |
| `!legendary` | `commandEpic` | Присвоює рівню статус «Легендарний». |
| `!mythic` | `commandEpic` | Присвоює рівню статус «Міфічний». |
| `!unfeature` | `commandFeature` | Скасовує позначку «Вибраний». |
| `!unepic` | `commandEpic` | Скасовує позначку «Епічний». |
| `!unlegendary` | `commandEpic` | Скасовує легендарну оцінку. |
| `!unmythic` | `commandEpic` | Скасовує міфічну оцінку. |

### Daily
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!daily` / `!da` | `commandDaily` | Встановлює рівень як наступний щоденний рівень. |
| `!weekly` / `!w` | `commandWeekly` | Встановлює рівень як наступний щотижневий рівень. |
| `!event` / `!ev <minutes> <reward ID> <amount>` | `commandEvent` | Встановлює рівень як наступний івентовий рівень на певну тривалість. Додати кілька нагород: `!event <minutes> <reward ID> <amount> <reward ID> <amount>...` [Ідентифікатори нагород](#rewards). |



### Монетки та бали Креатора
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!verifycoins` / `!vc` | `commandVerify` | Перевіряє монетки рівня. |
| `!unverifycoins` | `commandVerify` | Знімає верифікацію монетки рівня. |
| `!sharecp <username>` | `commandSharecpOwn` / `commandSharecpAll` | Поділитися балами творця, отриманими з рівня, з іншим користувачем |

### Управління
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!setacc` / `!sa <username/account ID>` | `commandSetacc` | Змінює творця рівня. |
| `!lockUpdating` / `!lu` | `commandLockUpdating` | Забороняє творцю рівня оновлювати рівень |
| `!unlockUpdating` / `!unlu` | `commandLockUpdating` | Дозволяє творцеві рівня знову оновити рівень |
| `!rename` / `!re <name>` | `commandRenameOwn` / `commandRenameAll` | Перейменування рівня. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Зміна опису рівня. |
| `!song` / `!s <song ID>` | `commandSongOwn` / `commandSongAll` | Зміна пісні рівня. |
| `!public` / `!pub` | `commandPublicOwn` / `commandPublicAll` | Робить рівень публічним. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Робить рівень приватним. |
| `!ldm` | `commandLdmOwn` / `commandLdmAll` | Увімкнення LDM на рівні. |
| `!unldm` | `commandLdmOwn` / `commandLdmAll` | Вимикає LDM на рівні. |
| `!password` / `!pass` / `!p <6 цифр>` | `commandPassOwn` / `commandPassAll` | Встановити пароль для копіювання рівня. Введіть `000000`, щоб скасувати його. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Блокує коментарі під рівнем. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Розблокування коментарів під рівнем. |
| `!delete` / `!delet` / `!d` | `commandDelete` | Видаляє рівень. |



![Приклад команди рівнів](../../../../assets/gdps/all-commands-list/level-command-example.webp)

## Команди Листов
Ці команди можуть бути використані в секції коментарів під листом!

### Оцінка
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!rate` / `!r <нагорода> <рівень складності> <featured> <кількість рівнів>` | `commandRate` | Оцінює рівень. `складність`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane` або `demon`. `featured`: `0` = проста оцінка, `1` = featured. `count`: кількість рівнів, які потрібно пройти для отримання нагороди. Тільки якщо з `actionSuggestRating`, воно пропонує його замість цього. [Ідентифікатори нагород](#rewards). |
| `!rate` / `!f` | `commandFeature` | Робить список «Featured». |
| `!unfeature` | `commandFeature` | Знімає позначку «Featured». |

### Управління
| Команда | Дозвіл | Опис |
| --- | --- | --- |
| `!rename` / `!re <name>` | `commandRenameOwn` / `commandRenameAll` | Перейменовує список. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Змінює опис списку. |
| `!setacc` / `!sa <username/account ID>` | `commandSetacc` | Змінює творця списку. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Робить список приватним. Використовуйте `!unlist 0` для публічного доступу, `!unlist 1` для доступу лише друзям. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Блокує коментарі під списком. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Розблоковує коментарі під списком. |
| `!delete` / `!d` | `commandDelete` | Видаляє лист. |

![Приклад команд листів](../../../../assets/gdps/all-commands-list/list-command-example.webp)




## Команди профілю
Ці команди можна використовувати в розділі коментарів профілю! Працюють лише в тому випадку, якщо GDPS підтримує прив’язку акаунтів Discord.

| Команда | Опис |
| --- | --- |
| `!discord link <discord ID>` | Починає процес прив'язки та надсилає 4-значний код у приватне повідомлення. |
| `!discord accept <code>` | Прив'язує ваш профіль до Discord, якщо код правильний. |
| `!discord unlink` | Скасовує прив’язку вашого акаунта Discord. |

![Приклад команд профілю](../../../../assets/gdps/all-commands-list/profile-command-example.webp)



## Нагороди
Це ідентифікатори нагород різних типів

### Нагороди Shard
| ID | Нагорода |
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

### Іконки нагород
| ID | Нагорода |
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

### Інші нагороди
| ID | Нагорода |
| --- | --- |
| **6** | Demon Key |
| **7** | Orbs |
| **8** | Diamond |
| **15** | Gold Key |
| **1012** | Items (keys, paths, gems, music hack, etc.) |

-----

*Переклала [elixia](https://t.me/elixiadev)*

*Останнє оновлення: 14 липня 2026 року*