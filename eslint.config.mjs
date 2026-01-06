import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import importHelpers from "eslint-plugin-import-helpers";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    plugins: { "import-helpers": importHelpers },
    rules: {
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
    },
  },
]);

export default eslintConfig;
