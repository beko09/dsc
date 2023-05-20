import type { Meta, StoryObj } from '@storybook/react'
import { Badged } from '../../../components/ui/Badged'


const meta: Meta<typeof Badged> = {
  title: 'components/ui/Badged',
  component: Badged,
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
}
export default meta



type Story = StoryObj<typeof Badged>

export const primary: Story = {
  //  test docs
  args: {
    children: 'Badged',
    intent: 'primary'
  }
}

export const secondary: Story = {
  args: {
    children: 'Test',
    intent: 'secondary'
  }
}

export const outlineprimary: Story = {
  args: {
    ...primary.args,
    intent: 'outlinePrimary'
  }
}