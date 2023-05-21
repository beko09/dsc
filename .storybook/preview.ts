import type { Preview } from '@storybook/react'
import '../styles/globals.css'
// import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'
import DocumentationTemplate from '../stories/DocumentationTemplate.mdx'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      // toolbar: {
      //   // The label to show for this toolbar item
      //   title: 'dsc',
      //   icon: 'circlehollow',
      //   // Array of plain string values or MenuItem shape (see below)
      //   items: ['light', 'dark'],
      //   // Change title based on selected value
      //   dynamicTitle: true,
      // },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    //  layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // to add docs
    // docs: {
    //   page: DocumentationTemplate,
    // },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
      'storybook/docs/toolbar': {
        hidden: true,
      },
    },
  },
}

export default preview
