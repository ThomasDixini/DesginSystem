import { ComponentProps } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    color: '$white',
    fontWeight: '$bold',
    borderRadius: '$md',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
        background: '$ignite500'            
    },

    '&:disabled': {
        background: '$gray400'
    },

    variants: {
        variant: {
            primary: {
                padding: '0 $8',
                height: 46,
                backgroundColor: '$ignite300',

                
            },
            secondary: {
                padding: '0 $8',
                height: 46,
                border: '2px solid $ignite500',
                color: '$ignite300'
            },
            tertiary: {
                padding: '0 $8',
                height: 46,
                color: '$white'
            },
        }
    },

    defaultVariants: {
        variant: "primary"
    }
})

export interface ButtonProps extends ComponentProps<typeof Button> {}