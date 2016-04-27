#HiddenEverywhere
A Firefox add-on to help TOR users find hidden services for ClearNet sites they use every day.

Often, I tell people of [Facebook's hidden service](http://arstechnica.com/security/2014/10/facebook-offers-hidden-service-to-tor-users/) only to hear they didn't know. It's been around since 2014, offering TOR users additional security, compared to the Clearnet.

The most recent encounter with someone who actively used TOR for their daily activities had me think, "what if Firefox could tell you when a site you're using has a hidden service, even if you're stuck behind a Cloudflare Captcha?".

And thus, this extension was born. When you visit a site such as [LiteVault.net](https://www.litevault.net) or Facebook.com, the extension will inform you that you should be using the hidden service, with a direct link to it.

![Screenshot](https://i.imgur.com/g2UNL3c.png)

For your privacy, this extension makes NO HTTP REQUESTS, and it does not log your requests in any form. The extension checks against a local text file, containing a list of websites and their verified hidden services.


Install
=======
If you're just wanting to use the extension, you can grab the release from here:

[Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/hiddeneverywhere/)

[Github Release Download Link](https://github.com/Someguy123/HiddenEverywhere/releases)

If you're wanting to develop this extension, simply `git clone` the repo and:

    npm install -g jpm # if you haven't already got JPM (firefox extension development)
    jpm run # builds and runs the extension in a new Firefox profile

    # if you want the XPI file to handle yourself
    jpm xpi

New Domains
===========

To add a new domain, simply fork the repo, add it to `data/urls.txt` at the bottom of the list, and submit a pull request. It will be added ASAP.

The format is: TITLE URL-PATTERN ONION-URL

We only support the EXACT and WILDCARD matches in the [URL Pattern](https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/util_match-pattern)

License
=======
This extension is released under the MIT License, see LICENSE for more information.

Donations
=====
If this donation has helped you out, please donate!

BTC: 17PPTHmS8N34KYKdDc4Gn1psabteGS8EE3

LTC: LNWEjx3DKSAWKX5fkWfCwa2tWSQeo7ZmnR


