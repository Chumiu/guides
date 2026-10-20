---
title: Запуск радіо-бота в Discord, що працює цілодобово
description: Як запустити радіо-бота в Discord, який цілодобово відтворюватиме музику з вашого приватного сервера Geometry Dash
---

Якщо ви не знаєте, що таке радіо-бот, то це, по суті, бот у Discord, який цілодобово відтворює музику у вказаному вами каналі. У цьому посібнику ви дізнаєтеся, як запустити бота, який буде відтворювати випадкові пісні з вашого GDPS!

## Вимоги
Щоб виконати решту інструкцій цього посібника, вам необхідно переконатися, що:
- У вас встановлено [Bun](https://bun.com/)
- У вас є пристрій/сервер, здатний працювати цілодобово
- У вас є повний доступ до SFTP вашого GDPS та сервера Discord (з правами адміністратора для додавання бота)
- У вас стабільне підключення до Інтернету

## Створення бота
Створіть **додаток Discord**, а потім **бота Discord** на [порталі розробників Discord](https://discord.com/developers/applications), після чого:
- Скопіюйте токен бота (він знадобиться вам для файлу `.env`)
- У розділі **Генератор URL-адрес OAuth2** виберіть `bot`, а потім дозволи `Connect` і `Speak`
- Згенеруйте посилання для запрошення та додайте бота на свій сервер

![Генерація посилання для запрошення на порталі розробників Discord](../../../../assets/gdps/running-radio-bot/generating-invite-link.webp)

## Додавання кінцевої точки бота
Додайте файл `randomSong.php` у будь-яке місце на SFTP-сервері GDPS **(не забудьте замінити рядок `require «path/to/incl/lib/connection.php»;` на правильний шлях на вашому сервері)**:
```php
<?php
header(«Content-Type: application/json»);
header(«Access-Control-Allow-Origin: *»);
header(«Access-Control-Allow-Methods: GET»);

require «path/to/incl/lib/connection.php»; // Змініть шлях у цьому рядку!

$song = $db->prepare(«SELECT * FROM songs WHERE isDisabled = 0 AND download != „CUSTOMURL“ ORDER BY RAND() ASC LIMIT 1»);
$song->execute();
$song = $song->fetch();

$data = [
    «ID» => $song[«ID»],
    «author» => $song[«authorName»],
    «name» => $song[«name»],
    «download» => $song[«download»],
    «reuploadID» => $song[«reuploadID»],
    «reuploadTime» => $song[«reuploadTime»]
];

exit(json_encode([
    «dashboard» => true,
    «success» => true,
    «song» => $data
]));
?>
```
*Файл має бути загальнодоступним (через HTTP/HTTPS).*

**Приклад:** `https://m336test.ps.fhgdps.com/randomSong.php` (з `require «incl/lib/connection.php»;`)

## Завантаження та запуск бота
1. [Завантажте репозиторій](https://github.com/M336G/gdps-radio-bot/archive/refs/heads/main.zip) на пристрій або сервер, здатний працювати цілодобово, або клонуйте його за допомогою команди: `git clone https://github.com/M336G/gdps-radio-bot.git`
2. Потім у його (розархівованій) папці встановіть залежності за допомогою `bun install` і заповніть файл `.env` відповідно до ваших потреб (приклад можна переглянути у файлі [.env.example](https://github.com/M336G/gdps-radio-bot/blob/main/.env.example))
3. Нарешті, запустіть бота за допомогою `bun run start`!

**Переконайтеся, що:**
- Бот перебуває в мережі Discord
- Він відтворює пісні в потрібному каналі

## Заборона на запрошення бота іншими користувачами
Це суто необов’язково, оскільки бот все одно не працюватиме на інших серверах, але це завжди приємний і завершальний крок, щоб поставити крапку в усьому цьому!

На [порталі розробників Discord](https://discord.com/developers/applications) встановіть:
- **Контекст встановлення** лише на `Guild Install` (у категорії «Встановлення»)
- **Посилання на встановлення** на `None` (також у категорії «Встановлення»)
- **Публічний бот** — `false` (у категорії «Бот»)

![Налаштування контексту встановлення та посилання на встановлення на порталі розробників Discord](../../../../assets/gdps/running-radio-bot/disabling-context-link.webp)

![Вимкнення параметра «Публічний бот» на порталі розробників Discord](../../../../assets/gdps/running-radio-bot/disabling-public-bot.webp)

-----

*Останнє оновлення: 16 липня 2026 року*

