import { mkdir, writeFile } from "node:fs/promises";

import buildTheme from "./theme";

const theme = buildTheme();

mkdir("./test-themes", { recursive: true })
  .then(() => {
    Promise.all([
      writeFile(
        "./themes/deep-rainforest-color-theme.json",
        JSON.stringify(theme, null, 2),
      ),
    ]);
  })
  .catch(() => process.exit(1));
