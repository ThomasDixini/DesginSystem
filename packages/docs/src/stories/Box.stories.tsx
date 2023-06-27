import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
    title: 'Button',
    component: Box,
    args: {
        children: "Hello world"
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
