import { styled } from '../styles/index';
import { ComponentProps } from "react";

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    color: '$white',
    backgroundColor: '$gray800',
    border: '1px solid $gray600'
})

export interface BoxProps extends ComponentProps<typeof Box> {}