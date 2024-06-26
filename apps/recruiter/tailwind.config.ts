import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
