
import type { Meta, StoryObj } from '@storybook/react'

import { Button, Props as ButtonProps } from '../../../components/ui/Button'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'component/ui/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
  },
};