import type { Meta, StoryObj } from '@storybook/react'
import { Badged } from '../../../../components/ui/Badged'

const meta: Meta<typeof Badged> = {
  title: 'components/ui/Badged',
  component: Badged,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  // how to use argType to add  default args for every story
  argTypes: {
    // variable component accept and add option and control
    intent: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Badged>

export const primary: Story = {
  //  test docs
  args: {
    children: 'Badged',
    intent: 'primary',
  },
}

export const secondary: Story = {
  args: {
    children: 'Test',
    intent: 'secondary',
  },
}

// create story with function
export const outlineSecondary: Story = {
  render: () => <Badged intent='outlineSecondary'>😄👍😍💯</Badged>,
}

export const outlineprimary: Story = {
  args: {
    ...primary.args,
    intent: 'outlinePrimary',
  },
}
