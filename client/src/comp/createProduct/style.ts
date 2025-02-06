import Delete from "@mui/icons-material/Delete";
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

export const StyledClear = styled(Delete)({
  top: 4,
  right: 4,
  fontSize: 23,
  cursor: "pointer",
  position: "absolute",
  border: "1px solid red",
  borderRadius: "50%",
  backgroundColor: "white",
  color: "red",
});
