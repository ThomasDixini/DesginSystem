import { styled } from "../../styles";
import { Text } from "../Text";

export const MultistepContainer = styled('div',{
    width: '100%',
})

export const Label = styled(Text, {
    color: '$gray200',

    defaultVariants: {
        size: 'xs'
    }
})

export const Steps = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--step-size), 1fr)',
    gap: '$2',
    marginTop: '$1',
})

export const Step = styled('div', {
    height: '$1',
    backgroundColor: '$gray600',
    borderRadius: '$px',

    variants: {
        active: {
            true: {
                background: '$gray100'
            }
        }
    }
})
