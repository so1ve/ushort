import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  srcDir: "./src",
  storage: {
    url: {
      driver: "vercel-kv",
    },
  },
  devStorage: {
    url: {
      driver: "fs",
      base: "./__USHORT_URLS__",
    },
  },
  imports: {
    dirs: ["./src/utils"],
  },
});
