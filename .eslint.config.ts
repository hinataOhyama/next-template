import type { TSESLint } from "@typescript-eslint/utils"
import type { Linter } from "eslint"
import prettierConfig from "eslint-config-prettier"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  importConfigArray,
  languageOptionFactory,
  perfectionistConfig,
  cspellConfig as sharedCspellConfig,
  reactConfig as sharedReactConfig,
  reactHooksConfig as sharedReactHooksConfig,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
} from "./.eslint"

const sharedFiles = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "src/**/*.stories.ts",
  "src/**/*.stories.tsx",
]

const ignoresConfig: Linter.Config = {
  name: "eslint/ignores",
  ignores: [
    "**/.next/**",
    "**/dist/**",
    "**/node_modules/**",
    "**/build/**",
    "**/pnpm-lock.yaml",
    "storybook-static/**",
    ".storybook/**",
  ],
}

const noConsoleConfig: Linter.Config = {
  name: "eslint/no-console",
  files: [
    "**/*.stories.tsx",
    "**/*.stories.ts",
  ],
  rules: {
    "no-console": "off",
  },
}

const storybookConfig: Linter.Config = {
  name: "eslint/storybook",
  files: ["**/*.stories.ts", "**/*.stories.tsx"],
  rules: {
    "react-hooks/rules-of-hooks": "off",
  },
}

const restrictedImportsConfig: Linter.Config = {
  name: "eslint/restricted-imports",
  files: sharedFiles,
  rules: {
    "no-restricted-imports": ["error"],
  },
}

const reactConfig: Linter.Config = {
  ...sharedReactConfig,
  files: sharedFiles,
}

const reactHooksConfig: Linter.Config = {
  ...sharedReactHooksConfig,
  files: sharedFiles,
}

const cspellConfig: Linter.Config = {
  ...sharedCspellConfig,
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  noConsoleConfig,
  restrictedImportsConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  storybookConfig,
  vitestConfig,
  testingLibraryConfig,
  prettierConfig,
)

export default config
