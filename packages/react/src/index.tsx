import { ComponentProps } from 'react'
import { styled } from './styles'

export type ButtonProps = ComponentProps<typeof Button>

export const Button = styled('button', {
    background: '$ignite500',
    borderRadius: '$md',
    color: '$white',
    display: 'flex',
    border: 0,
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $4',
            },
            big: {
                fontSize: 16,
                padding: '$3 $6',
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }
})

export function App(){
    return <Button>Hello world</Button>
}