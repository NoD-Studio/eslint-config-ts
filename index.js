import { default as eslint } from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
      rules: {
        "@typescript-eslint/no-duplicate-enum-values": "off",
      },
    },
    eslintPluginPrettierRecommended,
    {
      plugins: {
        "import-plugin": importPlugin,
      },
      rules: {
        "import-plugin/newline-after-import": ["error", { count: 1 }],
        // TODO : Can't use this rule right now because it's bugged
        // Will activate it later when it's resolved
        // Source : https://github.com/import-js/eslint-plugin-import/issues/3079
        // "import-plugin/no-unused-modules": [
        //   "error",
        //   {
        //     unusedExports: true,
        //   },
        // ],
      },
    },
    {
      ignores: ["*.config.js", "*.config.mjs", "*.config.ts"],
    }
  ),
];
