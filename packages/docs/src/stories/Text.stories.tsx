import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@thomas-ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: "Hello world"
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Custom: StoryObj<TextProps> = {
    args: {
        children: "Strong Text",
        as: 'strong'
    }
}
