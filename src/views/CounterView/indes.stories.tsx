
import { expect, userEvent, within } from "storybook/test"
import { CounterView } from "."
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof CounterView> = {
  component: CounterView,
}
export default meta

type Story = StoryObj<typeof CounterView>

/**
 * ここにドキュメントが表示されます。
 */
export const Test: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const counterText = await canvas.findByText("カウンター")
    expect(counterText).toBeVisible()

    const plusButton = await canvas.findByTestId('plusButton')
    const minusButton = await canvas.findByTestId('minusButton')
    await expect(await canvas.findByTestId('countText')).toHaveTextContent("0")
    await userEvent.click(plusButton)
    await expect(await canvas.findByTestId('countText')).toHaveTextContent("1")
    await userEvent.click(minusButton)
    await expect(await canvas.findByTestId('countText')).toHaveTextContent("0")
    await userEvent.click(minusButton)
    await expect(await canvas.findByTestId('countText')).toHaveTextContent("0")
  },
}
