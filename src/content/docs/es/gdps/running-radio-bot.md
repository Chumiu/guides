---
title: Running a 24/7 Discord Radio Bot
description: How to run a Discord radio bot playing music from your Geometry Dash Private Server 24/7
---

If you don't know what a radio bot is, it's basically a Discord bot that plays music 24/7 in a channel you've set. This guide will explain to you how to run one that'll play random songs used on your GDPS!

## Requirements
To be able to follow the rest of this guide, you will need to make sure that:
- You have [Bun](https://bun.com/) installed
- You have a device/server capable of running 24/7
- You have full access to your GDPS' SFTP & Discord server (with administrator permissions to add the bot)
- You have a stable internet connection

## Creating the bot
Create a **Discord application** and then a **Discord bot** from the [Discord Developer Portal](https://discord.com/developers/applications), then:
- Copy the bot's token (you will need it for the `.env` file)
- Under the **OAuth2 URL Generator** select `bot` then the `Connect` & `Speak` permissions
- Generate the invite link and add the bot to your server

![Generating the invite link from the Discord Developer Portal](../../../../assets/gdps/running-radio-bot/generating-invite-link.webp)

## Adding the bot's endpoint
Add a `randomSong.php` file anywhere on your GDPS' SFTP **(make sure to replace the `require "path/to/incl/lib/connection.php";` line with the correct path on your server)**:
```php
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

require "path/to/incl/lib/connection.php"; // Edit the path on this line!

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
The file must be publicly accessible (via HTTP/HTTPS).
:::

**Example:** `https://m336test.ps.fhgdps.com/randomSong.php` (with `require "incl/lib/connection.php";`)

## Downloading & starting the bot
1. [Download the repository](https://github.com/M336G/gdps-radio-bot/archive/refs/heads/main.zip) on a device/server that can run 24/7 or clone it with: `git clone https://github.com/M336G/gdps-radio-bot.git`
2. Then, in its (decompressed) folder, install dependencies with `bun install` and fill out a `.env` file according to your needs (check out [.env.example](https://github.com/M336G/gdps-radio-bot/blob/main/.env.example) for an example)
3. Finally, start the bot with `bun run start`!

:::tip
**Make sure that:**
- The bot is online on Discord
- It plays songs in the desired channel
:::

## Disallowing people from inviting the bot
:::note
This is purely optional, as the bot will not work on other servers anyways, but it's always a nice & final step to conclude all of this!
:::

On the [Discord Developer portal](https://discord.com/developers/applications), set:
- **Installation Context** to `Guild Install` only (in the Installation category)
- **Install Link** to `None` (in the Installation category too)
- **Public Bot** to `false` (in the Bot category)

![Setting the Installation Context and the Install Link on the Discord Developer Portal](../../../../assets/gdps/running-radio-bot/disabling-context-link.webp)

![Disabling Public Bot on the Discord Developer Portal](../../../../assets/gdps/running-radio-bot/disabling-public-bot.webp)

-----

*Last updated: July 27th, 2026*