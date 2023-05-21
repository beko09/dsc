import type { Meta, StoryObj } from '@storybook/react'

import { Button, Props as ButtonProps } from '../../../../components/ui/Button'

const meta: Meta<typeof Button> = {
  title: 'components/ui/Button',
  component: Button,
  // to add docs 
  tags: ['autodocs'],
  // how to use argType to add  default args for every story
  argTypes: {
    // variable component accept and add option and control
    intent: {
      options: ['primary', 'secondary', 'danger', 'outlinePrimary', 'outlineSecondary', 'outlineDanger'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'lg', 'sm'],
      control: { type: 'radio' }
    },
    // add  default children value
    children: {
      defaultValue: 'I\'m Button'
    },

    // when user make action
    onClick: { action: 'clicked' },
  }
}

export default meta
type Story = StoryObj<typeof Button>

// create story with function specific framework used
export const Default: Story = {
  name: 'Default',
  render: () => <Button intent='primary'>Default</Button>
}

// create story with args
export const Primary: Story = {
  // test
  args: {
    intent: 'primary',
    children: 'Button',
  },
}
export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
  },
}
