import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ===============================================================
interface Props {
  show: boolean;
  click: () => void;
}
// ===============================================================

export default function EyeToggleButton({ show, click }: Props) {
  return (
    <IconButton size="small" onClick={click}>
      {show ? (
        <Visibility fontSize="small" sx={{ color: "grey.600" }} />
      ) : (
        <VisibilityOff fontSize="small" sx={{ color: "grey.400" }} />
      )}
    </IconButton>
  );
}
