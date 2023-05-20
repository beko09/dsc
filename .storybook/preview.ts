import type { Preview } from '@storybook/react'
import '../styles/globals.css'
// import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'
import DocumentationTemplate from '../stories/DocumentationTemplate.mdx';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // to add docs
    docs: {
      page: DocumentationTemplate,
    },
  },
}

export default preview
