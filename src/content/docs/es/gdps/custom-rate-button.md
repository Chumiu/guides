---
title: Custom RobTop-Like Rate Button
description: How to get a custom RobTop-like rate button to rate levels on a GDPS and more using a Geode mod
---

This guide will show you how to get an interface like [the one RobTop uses](https://www.youtube.com/watch?v=_wmWuymEZDs) to rate levels on GDPSs, through a Geode mod!
![Preview of the mod](../../../../assets/gdps/custom-rate-button/preview-image.webp)

## Introduction
Now, this mod isn't limited to simply rating levels on GDPSs; it was also made for:
- Rating levels without struggling to find which permissions are needed; internally, it uses the `!rate` & `!unrate` commands, but it adds a nice UI on top of them!
- Being usable without a mod badge or clicking the "Req." button in the game's settings. You just need the [required permission](#requirements). *This even lets you rate levels if you have the Leaderboard Moderator badge!*
- Being as intuitive as possible: each button is straightforward in what it does, with no hidden meaning

## Requirements
To be able to follow the rest of this guide, you will need to make sure that:
- You are on a GDPS (*[GDPS Switcher](https://geode-sdk.org/mods/km7dev.gdps-switcher) also works*)
- You have the `commandRate` permission enabled *(yep.. that's it)*
- You use [Geode v5.7.1 or later](https://geode-sdk.org/install)

## Installing the mod
Installing the mod is fairly simple!
- Either [download it manually](https://geode-sdk.org/mods/m336.rate-button) and put it in the Geode mods folder,
- Or, in-game, download it **from the index** as shown below:
![Downloading Rate Button from the Geode mods index](../../../../assets/gdps/custom-rate-button/download-from-index.webp)


## Using the mod
Once you downloaded the mod and restarted your game, you'll notice a new blue button when you click on a level. This opens the interface for rating levels!
- Clicking the **down** and **up** arrows **decreases** or **increases** the **amount of stars** that the level will have (the difficulty is set automatically based on that)
- Clicking the **feature button** sets whether the level is only **rated**, **featured**, **epic**, **legendary** or **mythic**
- Clicking the **coins button** toggles the **coins** being **verified** or **not**

:::tip
If you set stars to 0 and click Submit, it'll fully unrate the level, even if you selected a feature tier or toggled coins.
:::

![Explanations on each button](../../../../assets/gdps/custom-rate-button/button-explanations.webp)

## Additional features
In the mod settings, you can also toggle these additional buttons on/off:
- The **Set Daily** button allows you to set the level as the next daily level (requires the `commandDaily` permission)
- The **Set Week** button allows you to set the level as the next weekly level (requires the `commandWeekly` permission)
- The **Send Only** button allows you to suggest the level instead of rating it (requires the `actionSuggestRating` permission)

![Additional features shown in the mod settings](../../../../assets/gdps/custom-rate-button/settings-for-additional-features.webp)

-----

*Last updated: July 27th, 2026*