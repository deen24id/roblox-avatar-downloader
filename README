# Roblox Islands Autoclicker

This is a NodeJS scipt to download 3D Roblox Avatar in the shape of `.obj` through Roblox public API.
After download you can import them to external apps like Blender, ThreeJS, and etc.

At the current state it will download the file correctly.
Yet, there are still many issues and other method is preferred.

## Steps to download 3D files

1. Make sure you have [Node.js](https://nodejs.org/) installed, the project itself is written in `v22.13.9`

2. Run `npm install` to download the dependencies such as `tsx` module.

3. In the terminal, run the following command with the relavant user id:

```{sh}
npx tsx download.ts <id>
```

4. Upon success the relvant `.obj` files are located on the `/out` folder.

## Known Issues

- You still need to entry `mtllib avatar.mtl\n` at the top of `avatar.obj` file.
- While the pictures are all in png, in `avatar.mtl` all the link to the pictures are missing the extension `.png`. This makes materials are unloaded.
- Still need to somehow transform the position to coord `0,0,0` as the current download is found floating at the top of the scene.

## Alternatives

Use [Load Character Lite](https://create.roblox.com/store/asset/752585459/Load-Character-Lite) plugin in Roblox Studio and export the model as `.obj`.
