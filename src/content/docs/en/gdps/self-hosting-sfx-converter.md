---
title: Self-hosting your own SFX converter
description: How to self-host your own SFX converter for your GDPS
---

:::note
This guide is primarily intended for GDPS owners/administrators. If you're a regular player and SFX conversion is slow, you can ask your GDPS owner to follow this guide :)
:::

:::caution
This guide is only useful if you allow your players to upload their own SFXs via files.
:::

This guide will show you how to self-host an SFX converter for your GDPS using either [MegaSa1nt's original JavaScript implementation](#setting-up-megasa1nts-converter) or [M336's C# rewrite](#setting-up-m336s-converter)!

## Requirements
To be able to follow the rest of this guide, you will need to make sure that:
- You have a GDPS using [MegaSa1nt's GMDprivateServer fork](https://github.com/MegaSa1nt/GMDprivateServer/tree/master)
- You have a device/ server capable of running 24/7
- You have a domain name managed through [Cloudflare](https://www.cloudflare.com/)
- You have a stable internet connection

## Setting up the converter
### Setting up MegaSa1nt's converter
1. Download [Node.js](https://nodejs.org/en/download), preferably a recent LTS version.
2. Download the [repository as a ZIP archive](https://github.com/MegaSa1nt/GDPS-ConvertSFX/archive/refs/heads/main.zip) onto a device or server that can run 24/7, or clone it using the following command: `git clone https://github.com/MegaSa1nt/GDPS-ConvertSFX.git`.
3. Then, in its (decompressed) folder, install the dependencies by running `npm install`, then feel free to configure [`config.json`](https://github.com/MegaSa1nt/GDPS-ConvertSFX/blob/main/config.json) according to your needs.
4. Finally, start the converter by running `node .` from within the repository folder!

### Setting up M336's converter
1. Download the appropriate precompiled binary for your system from the [latest releases](https://github.com/M336G/SFXConverter/releases/latest).
2. Then, in its (decompressed) folder, feel free to fill out a `.env` file according to your needs (check out [.env.example](https://github.com/M336G/SFXConverter/blob/main/.env.example) for an example).
3. Finally, start the converter by running the binary from within the extracted folder (on Linux, you may need to make it executable first using `chmod +x <binary_name>`).

## Making your converter accessible over the internet with Cloudflare Tunnel
:::note
There are several ways to make your converter publicly accessible. This guide uses Cloudflare Tunnel because it's one of the most convenient solutions.

Feel free to use another method if you're familiar with it!
:::

:::caution
Please note that Cloudflare Tunnel has a 100 MB upload limit.
:::

To let people use your converter from your GDPS dashboard, you'll need to make it accessible over the internet.

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com/), navigate to **Networking > Tunnels**, and click **Create Tunnel**.
2. Give your tunnel a name, then follow the instructions to install `cloudflared` as a service on your server.
![Creating a Cloudflare tunnel](../../../../assets/gdps/self-hosting-sfx-converter/creating-cloudflare-tunnel.webp)

3. Once the tunnel is set up, open it, navigate to **Routes**, click **Add route**, and select **Published application**. Configure the route to point to the converter URL you want. Then, if you haven't changed the converter's port, use `http://localhost:24157` as the service URL.
![Tunneling the SFX converter via a Cloudflare published application](../../../../assets/gdps/self-hosting-sfx-converter/adding-published-application.webp)

4. That's it! Your converter should now be accessible over the internet.

## Using your converter on your GDPS
Now, open [`config/dashboard.php`](https://github.com/MegaSa1nt/GMDprivateServer/blob/67ede474cbfde8c932ede53198b743e1ffb3f3b7/config/dashboard.php#L59-L64) in your GDPS installation.

Here, you can choose to:
- **Use only your own converter** by removing the other converters from the configuration.
![Using only your self-hosted SFX converter on your GDPS](../../../../assets/gdps/self-hosting-sfx-converter/using-with-other-converters.webp)

- **Keep the existing converters and add your own** so that all of them can be used.
![Using your self-hosted SFX converter along with other SFX converters on your GDPS](../../../../assets/gdps/self-hosting-sfx-converter/using-with-other-converters.webp)

-----

*Last updated: October 23rd, 2026*