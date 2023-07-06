import type { StoryObj, Meta } from '@storybook/react'
import { Canvas } from '@storybook/blocks'
import { Button, ButtonProps } from '@thomas-ignite-ui/react'

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

export const Primary: StoryObj<ButtonProps> = {
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' }
        }
    }
}

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


