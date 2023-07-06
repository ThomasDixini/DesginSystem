import { styled } from "../../styles";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
    width: '$16',
    height: '$16',
    overflow: 'hidden',
    display: 'inline-block',
})
export const AvatarImage = styled(Avatar.Image, {
    widows: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '$full'
})
export const AvatarFallback = styled(Avatar.Fallback, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '$gray900',
    color: '$white'
})