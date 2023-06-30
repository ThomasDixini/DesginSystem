import { styled, keyframes } from "../../styles";
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    width: '$6',
    height: '$6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '$gray900',
    borderRadius: '$xs',
    border: '2px solid $gray900',
    lineHeight: 0,
    cursor: 'pointer',

    '&[data-state="checked"]': {
        backgroundColor: '$ignite500'
    },
    '&:focus': {
        border: '2px solid $ignite500'
    }
})

const slideIn = keyframes({
    from: {
        transform: 'translateY(-110%)'
    },
    to: {
        transform: 'translateY(0)'
    }
})

const slideOut = keyframes({
    from: {
        transform: 'translateY(0)'
    },
    to: {
        transform: 'translateY(-110%)'
    }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$white',
    width: '$4',
    height: '$4',

    '&[data-state="checked"]': {
        animation: `${slideIn} 200ms ease-out` 
    },
    '&[data-state="unchecked"]': {
        animation: `${slideOut} 200ms ease-out` 
    }
})