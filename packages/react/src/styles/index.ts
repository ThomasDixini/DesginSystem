import { 
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
} from "@ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    config,
    createTheme,
    css,
    getCssText,
    keyframes,
    styled,
    theme,
    globalCss,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        width: 'space',
        height: 'space'
    },
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
    }
})