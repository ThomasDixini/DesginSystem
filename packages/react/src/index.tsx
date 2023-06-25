import { styled } from './styles'

const Button = styled('button', {
    width: '$10',
    height: '$3',
    color: '$ignite500'
})

export function App(){
    return <Button>Hello world</Button>
}