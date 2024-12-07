import Clear from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";

export const UploadImageBox = styled(Box)(({ theme }) => ({
  width: "auto",
  maxWidth: "100%",
  height: "auto",
  maxHeight: 250,
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme.palette.info.light, 0.1),
}));

export const StyledClear = styled(Clear)({
  top: 5,
  right: 5,
  fontSize: 14,
  cursor: "pointer",
  position: "absolute",
});
