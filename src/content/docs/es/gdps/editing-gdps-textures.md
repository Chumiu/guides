---
title: Editing your GDPS textures
description: How to find and edit your Geometry Dash Private Server textures
---

:::caution
This guide does **NOT** teach you how to design textures!
:::

Don't know how to edit the textures of the game for your GDPS? This guide will teach you how to do that!

## Requirements
To be able to follow the rest of this guide, you will need to make sure that:
- You have an image editor (like [Photoshop](https://www.adobe.com/products/photoshop.html), [Pixlr](https://pixlr.com/), [ibisPaint X](https://ibispaint.com/productWin.jsp), [Krita](https://krita.org/), [GIMP](https://www.gimp.org/)...)
- You have the base textures/spritesheets to work on

## Finding the textures
Go into the `Resources` folder of your GDPS and find the textures you want to edit. You will see that most of them are inside a big file with a lot of other textures. This is called a spritesheet.

![Finding the textures inside the GDPS' Resources folder](../../../../assets/gdps/editing-gdps-textures/finding-textures-resources.webp)
Each texture in Geometry Dash has three versions: one ending in `-uhd` for the High quality setting, one ending in `-hd` for the Medium quality setting (and the only one available on mobile), and one not ending with any of the above for the Low quality setting.

*If the texture you want to edit is not in a spritesheet, you can edit it directly and skip the rest of this guide (the [extra tip at the end](#extra-tip) may still be useful though!).*

## Extracting the textures
To extract textures from a spritesheet, go to [GDColon's GDSplitter](https://gdcolon.com/gdsplitter/) and simply drag and drop the PNG and PLIST files of the spritesheet you want to edit. Give it a few seconds to load, and once it's imported, click "Download all (.zip)".
![Downloading & extracting the spritesheet textures](../../../../assets/gdps/editing-gdps-textures/downloading-spritesheet-textures.webp)

Unzip the archive you've just downloaded, and now you can freely modify the textures you want! **However, make sure to keep the resolution and the names exactly the same.**
![Extracted spritesheet textures](../../../../assets/gdps/editing-gdps-textures/extracted-spritesheet-textures.webp)

## Merging the textures
Once you're finished editing the spritesheet you've just extracted, go back to [GDColon's GDSplitter](https://gdcolon.com/gdsplitter/) and this time click on "Merge sprites".

Import all the textures from the extracted folder, click "Continue", make sure to enter the name of the original spritesheet without the extension and to select the right resolution for your textures, and create the spritesheet!
![Merging back the spritesheet textures](../../../../assets/gdps/editing-gdps-textures/merging-spritesheet-textures.webp)

## Extra tip
Start with your High quality version first! That way, all you need to do is resize the texture to the correct resolution for the Medium and Low quality versions.

---

*Last updated: July 27th, 2026*