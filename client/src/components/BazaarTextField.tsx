import Box, { BoxProps } from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
// CUSTOM COMPONENT
import { H6 } from "./Typography";

// ==============================================================
type Props = TextFieldProps & BoxProps;
// ==============================================================

export default function BazaarTextField({ label, InputProps, ...props }: Props) {
  const boxProps: BoxProps = {};
  const textFieldProps: TextFieldProps = {};

  for (const key in props) {
    if (SPACE_PROPS_LIST.includes(key)) boxProps[key] = props[key];
    else textFieldProps[key] = props[key];
  }

  return (
    <Box {...boxProps}>
      {/* INPUT LEVEL TEXT */}
      {label ? (
        <H6 mb={1} fontSize={13} color="grey.700">
          {label}
        </H6>
      ) : null}

      {/* INPUT FIELD SECTION */}
      <TextField
        InputProps={{ ...InputProps, style: { ...InputProps?.style, height: 44 } }}
        {...textFieldProps}
      />
    </Box>
  );
}

const SPACE_PROPS_LIST = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY"
];
