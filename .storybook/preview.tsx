import React from "react"
import { Decorator, Parameters } from "@storybook/react"
import { StoryProvider, DocsContainer } from "./components"
import { A11Y_RULES } from "./constant"

export const parameters: Parameters = {
  options: {
    storySort: {
      order: ["Documents", ["Welcome", "*"], "Components", "*"],
    },
  },
  a11y: {
    config: {
      rules: A11Y_RULES,
    },
  },
  backgrounds: { disable: true },
  controls: { expanded: true },
  docs: { container: DocsContainer },
  layout: "fullscreen",
}

export const decorators: Decorator[] = [
  (Story) => {
    return (
      <StoryProvider>
        <Story />
      </StoryProvider>
    )
  },
]
