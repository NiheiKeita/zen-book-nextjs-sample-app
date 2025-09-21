import { CounterView } from "."
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof CounterView> = {
  component: CounterView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof CounterView>

export const Test: Story = {
  play: async () => {
  },
}
