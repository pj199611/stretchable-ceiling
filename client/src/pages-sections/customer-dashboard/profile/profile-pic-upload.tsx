import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CameraEnhance from "@mui/icons-material/CameraEnhance";
import FlexBox from "@/components/flex-box/flex-box";
import { useState } from "react";

export default function ProfilePicUpload() {
  const [image, setImage] = useState<any>();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display the selected image
    }
  };

  return (
    <FlexBox alignItems="flex-end" mb={3}>
      <Avatar alt="user" src={image?.preview} sx={{ height: 64, width: 64 }} />

      <IconButton
        size="small"
        component="label"
        color="secondary"
        htmlFor="profile-image"
        sx={{ bgcolor: "grey.300", ml: -2.5 }}
      >
        <CameraEnhance fontSize="small" />
      </IconButton>

      <Box
        type="file"
        display="none"
        accept="image/*"
        component="input"
        id="profile-image"
        onChange={(e) => handleImageChange}
      />
    </FlexBox>
  );
}
