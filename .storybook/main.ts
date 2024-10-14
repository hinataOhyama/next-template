import type { StorybookConfig } from "@storybook/react-vite"
import { dirname, join } from "path"

const getAbsolutePath = (value: string): any =>
  dirname(require.resolve(join(value, "package.json")))

const config: StorybookConfig = {
  framework: getAbsolutePath("@storybook/react-vite"),

  core: {
    disableTelemetry: true,
  },

  stories: ["**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-backgrounds"),
    getAbsolutePath("@storybook/addon-measure"),
    getAbsolutePath("@storybook/addon-storysource"),
    getAbsolutePath("storybook-dark-mode"),
  ],

  typescript: {
    reactDocgen: false,
  },
}

export default config
