---
title: Enabling Level Info's Sent indicator
description: How to configure Level Info's sent indicator to work on the GDPS you're playing on
---

:::caution
Currently, this method is "partially" supported by Level Info. Levels that aren't sent will display as "Failed", but levels that are sent will display as "Sent"
:::

[Level Info](https://geode-sdk.org/mods/m336.levelinfo)'s sent indicator does not work natively on GDPSs and therefore requires manual configuration; this guide covers how to set it up!

## Find your GDPS' sends endpoint
First, find the full URL to the `sends.php` endpoint. It's usually located under `dashboard/api`

**Example:** `https://m336test.ps.fhgdps.com/dashboard/api/sends.php`
![Example location for GDPS' sends endpoint](../../../../assets/gdps/levelinfo-sent-indicator/gdps-sends-endpoint-location.webp)

## Set the custom sends endpoint
Next, go to Level Info's settings and find "Custom Sends Endpoint". Paste the URL you found, and make sure to append `?level=` to the end

**Example:** `https://m336test.ps.fhgdps.com/dashboard/api/sends.php?level=`
![Setting the custom sends endpoint](../../../../assets/gdps/levelinfo-sent-indicator/setting-custom-sends-endpoint.webp)

## Apply settings
Save/apply the settings. The sent indicator should now work again!

-----

*Last updated: July 27th, 2026*