import obj2gltf from "obj2gltf";
import fs from "fs";
const options = {
  binary: true,
};
obj2gltf(`out/${process.argv[2]}/avatar.obj`, options).then(function (glb) {
  fs.writeFileSync(`out/${process.argv[2]}/model.glb`, glb);
});
