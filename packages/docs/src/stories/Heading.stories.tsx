import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@thomas-ignite-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: "Custom title"
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "H1 Heading",
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading vem como `h2`, mas podemos muda-lo com a prop `as`.'
            }
        }
    }
}
