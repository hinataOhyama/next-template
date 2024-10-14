import React, { FC, ReactNode } from "react"
import {
  Container,
  ContainerProps,
  UIProvider,
} from "@yamada-ui/react"
import {
  DocsContainer as StorybookDocsContainer,
  DocsContainerProps,
} from "@storybook/blocks"

export const StoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App p="md">{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  return (
    <Container p={p} gap="md" alignItems="flex-start">
      {children}
    </Container>
  )
}

export const DocsContainer: FC<
  DocsContainerProps & { children: ReactNode }
> = ({ children, theme, ...rest }) => {
  return (
    <StorybookDocsContainer theme={theme} {...rest}>
      {children}
    </StorybookDocsContainer>
  )
}
