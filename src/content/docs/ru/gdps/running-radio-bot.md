---
title: Запуск радио-бота в Discord, работающего круглосуточно
description: Как запустить радио-бота в Discord, который будет круглосуточно воспроизводить музыку с вашего частного сервера Geometry Dash
---

Если вы не знаете, что такое радио-бот, то это, по сути, бот в Discord, который круглосуточно воспроизводит музыку в указанном вами канале. В этом руководстве вы узнаете, как запустить бота, который будет воспроизводить случайные песни из вашего GDPS!

## Требования
Чтобы выполнить остальные инструкции этого руководства, вам необходимо убедиться, что:
- У вас установлен [Bun](https://bun.com/)
- У вас есть устройство/сервер, способный работать круглосуточно
- У вас есть полный доступ к SFTP вашего GDPS и серверу Discord (с правами администратора для добавления бота)
- У вас стабильное подключение к Интернету

## Создание бота
Создайте **приложение Discord**, а затем **бота Discord** на [портале разработчиков Discord](https://discord.com/developers/applications), после чего:
- Скопируйте токен бота (он понадобится вам для файла `.env`)
- В разделе **Генератор URL-адресов OAuth2** выберите `bot`, а затем разрешения `Connect` и `Speak`
- Сгенерируйте ссылку для приглашения и добавьте бота на свой сервер

![Генерация ссылки для приглашения на портале разработчиков Discord](../../../../assets/gdps/running-radio-bot/generating-invite-link.webp)

## Добавление конечной точки бота
Добавьте файл `randomSong.php` в любом месте на SFTP-сервере GDPS **(не забудьте заменить строку `require «path/to/incl/lib/connection.php»;` на правильный путь на вашем сервере)**:
```php
<?php
header(«Content-Type: application/json»);
header(«Access-Control-Allow-Origin: *»);
header(«Access-Control-Allow-Methods: GET»);

require «path/to/incl/lib/connection.php»; // Измените путь в этой строке!

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
*Файл должен быть общедоступен (через HTTP/HTTPS).*

**Пример:** `https://m336test.ps.fhgdps.com/randomSong.php` (с `require «incl/lib/connection.php»;`)

## Загрузка и запуск бота
1. [Скачайте репозиторий](https://github.com/M336G/gdps-radio-bot/archive/refs/heads/main.zip) на устройство или сервер, способный работать круглосуточно, либо клонируйте его с помощью команды: `git clone https://github.com/M336G/gdps-radio-bot.git`
2. Затем в его (разархивированной) папке установите зависимости с помощью `bun install` и заполните файл `.env` в соответствии с вашими потребностями (пример можно посмотреть в файле [.env.example](https://github.com/M336G/gdps-radio-bot/blob/main/.env.example))
3. Наконец, запустите бота с помощью `bun run start`!

**Убедитесь, что:**
- Бот находится в сети Discord
- Он воспроизводит песни в нужном канале

## Запрет на приглашение бота другими пользователями
Это чисто опционально, так как бот всё равно не будет работать на других серверах, но это всегда приятный и завершающий шаг, чтобы поставить точку во всём этом!

На [портале разработчиков Discord](https://discord.com/developers/applications) установите:
- **Контекст установки** только на `Guild Install` (в категории «Установка»)
- **Ссылку на установку** на `None` (также в категории «Установка»)
- **Публичный бот** — `false` (в категории «Бот»)

![Настройка контекста установки и ссылки на установку на портале разработчиков Discord](../../../../assets/gdps/running-radio-bot/disabling-context-link.webp)

![Отключение параметра «Публичный бот» на портале разработчиков Discord](../../../../assets/gdps/running-radio-bot/disabling-public-bot.webp)

-----

*Перевела [elixia](https://t.me/elixiadev)*

*Последнее обновление: 16 июля 2026*