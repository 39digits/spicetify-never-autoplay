# Spicetify Never Autoplay

Spicetify extension to always stop and not default to Autoplay when an album ends.

## Background

Spotify recently changed the default Autoplay setting to ON when using Spotify Connect to play music on speaker systems. The new default ignores the Autoplay setting on your device and does not provide a way to change the setting for Spotify Connect.

This extension will look at the metadata on a song change and pause Spotify automatically if it detects the track source is from Autoplay.

## How to install

1. Start by [Installing Spicetify](https://github.com/khanhas/spicetify-cli/wiki/Installation) if you haven't already done so.
2. Open your terminal and generate a Spicetify config file

```
spicetify
```

3. Download `neverAutoplay.js` to the Spicetify Extensions folder. Namely, `%userprofile%\.spicetify\Extensions\` on Windows and `~/.config/spicetify/Extensions` on Linux or macOSs.
4. In terminal, add the extension to your Spicetify config.

```
spicetify config extensions neverAutoplay.js
```

5. Then apply and activate the new extension.

```
spicetify backup apply
```

6. The \_Never Autoplay` option should now be available in the Spotify menu by clicking on your profile.

## Caveats & Limitations

### Desktop only

Due to this extension requiring Spicetify it is limited to desktop versions of Spotify and will not work on the Web or Mobile instances.

### Your Recently Played will include the first song in the Autoplay queue

To keep it simple, the Never Autoplay extension hooks into the `songchange` event.

This means that the first song in the Autoplay queue will need to load before Spotify can be stopped. The side-effect being that the first song in the random queue will appear in your recently played list on Spotify. The first Autoplay song after an album is always by the same artist so it won't add any unwanted artists to your recently played.

### You might hear the first second of the Autoplay song

There is a chance that the initial second or so of the first song in the Autoplay queue will still be heard before Spotify pauses.
