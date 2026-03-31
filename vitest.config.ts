import { defineConfig } from "vitest/config";
import { configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
