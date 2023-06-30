var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  config,
  createTheme,
  css,
  getCssText,
  keyframes,
  styled,
  theme,
  globalCss
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  color: "$white",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});

// src/components/Text.tsx
var Text = styled("p", {
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  }
});

// src/components/Heading.tsx
var Heading = styled("h2", {
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$shorter",
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$3xl" },
      xl: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "4xl": { fontSize: "$6xl" },
      "5xl": { fontSize: "$7xl" },
      "6xl": { fontSize: "$8xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  width: "$12",
  height: "$12",
  overflow: "hidden",
  display: "inline-block"
});
var AvatarImage = styled(Avatar.Image, {
  widows: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "$full"
});
var AvatarFallback = styled(Avatar.Fallback, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "$gray900",
  color: "$white"
});

// src/components/Avatar/Avatar.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  color: "$white",
  fontWeight: "$bold",
  borderRadius: "$md",
  cursor: "pointer",
  "&:not(:disabled):hover": {
    background: "$ignite500"
  },
  "&:disabled": {
    background: "$gray400"
  },
  variants: {
    variant: {
      primary: {
        padding: "0 $8",
        height: 46,
        backgroundColor: "$ignite300"
      },
      secondary: {
        padding: "0 $8",
        height: 46,
        border: "2px solid $ignite500",
        color: "$ignite300"
      },
      tertiary: {
        padding: "0 $8",
        height: 46,
        color: "$white"
      }
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  fontFamily: "$default",
  background: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$ignite500"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray100",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray100",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  }
});

// src/components/TextInput/TextInput.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
    /* @__PURE__ */ jsx2(Input, __spreadValues({}, props))
  ] });
}

// src/components/Checkbox/Checkbox.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  boxSizing: "border-box",
  width: "$6",
  height: "$6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  border: "2px solid $gray900",
  lineHeight: 0,
  cursor: "pointer",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite500"
  },
  "&:focus": {
    border: "2px solid $ignite500"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-110%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-110%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/Checkbox.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) }));
}

// src/components/Multistep/styles.ts
var MultistepContainer = styled("div", {
  width: "100%"
});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--step-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  backgroundColor: "$gray600",
  borderRadius: "$px",
  variants: {
    active: {
      true: {
        background: "$gray100"
      }
    }
  }
});

// src/components/Multistep/Multistep.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Multistep({ size, currentStep }) {
  return /* @__PURE__ */ jsxs3(MultistepContainer, { children: [
    /* @__PURE__ */ jsxs3(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx4(Steps, { css: { "--step-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ jsx4(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  Multistep,
  Text,
  TextInput
};
