import fs from "fs-extra";
import path from "path";

const init = async () => {
  const pkg = fs.readJsonSync(path.resolve(__dirname, "../package.json"));
  await console.log({ name: pkg.name, description: pkg.description });
};

export default init;
