import getCdn from "./utils/getCdn";
import { writeFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { Buffer } from "node:buffer";

type TData1 = {
  targetId: number;
  state: string;
  imageUrl: string;
  version: string;
};

type TData2 = {
  camera: {
    position: {
      x: number;
      y: number;
      z: number;
    };
    direction: {
      x: number;
      y: number;
      z: number;
    };
  };
  mtl: string;
  obj: string;
  textures: Array<string>;
};

async function main() {
  try {
    const id = process.argv[2];

    const response1 = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-3d?userId=${id}`
    );
    const data1: TData1 | undefined = await response1.json();

    const response2 = await fetch(data1.imageUrl);
    const data2: TData2 | undefined = await response2.json();
    console.log(data2);

    if (!existsSync(`out/${id}/`)) {
      mkdirSync(`out/${id}/obj/`, { recursive: true });
    }

    await Promise.all([
      await writeFile(
        `out/${id}/obj/avatar.obj`,
        await (await fetch(getCdn(data2.obj))).text()
      ),
      await writeFile(
        `out/${id}/obj/avatar.mtl`,
        await (await fetch(getCdn(data2.mtl))).text()
      ),
      data2.textures.map(async (val) => {
        await writeFile(
          `out/${id}/obj/${val}.png`,
          Buffer.from(await (await fetch(getCdn(val))).arrayBuffer())
        );
      }),
    ]);
  } catch (err) {
    console.error(err);
  }
}

main();
