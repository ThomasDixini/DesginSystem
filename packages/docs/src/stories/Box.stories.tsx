import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@thomas-ignite-ui/react'

export default {
    title: 'Box',
    component: Box,
    args: {
        children: "Hello world"
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
