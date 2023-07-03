import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: "Send",
    },
    argTypes: {
        onClick: {
            action: 'click'
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new'
    }
}
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Disabled',
        disabled: true
    }
}
