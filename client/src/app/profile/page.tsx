"use client";
import Link from "next/link";
import Person from "@mui/icons-material/Person";
import { useState } from "react";
import Button from "@mui/material/Button";

import Profile from "@/pages-sections/customer-dashboard/profile/page-view/profile";
import EditProfile from "@/pages-sections/customer-dashboard/profile/page-view/profile-edit";
import Title from "@/comp/PageTitle/Title";

const ProfilePage = async () => {
  const [isEdit, setIsEdit] = useState(false);
  const editButton = (
    <Button
      color="error"
      variant="contained"
      onClick={() => setIsEdit(!isEdit)}
    >
      {isEdit ? "Back to Profile" : "Edit Profile"}
    </Button>
  );

  if (!localStorage.getItem("access_token"))
    return (
      <Link href="/login">
        <Button variant="contained" color="orange" type="submit">
          Please Login
        </Button>
      </Link>
    );

  return (
    <>
      <Title
        title={isEdit ? "Edit Profile" : "My Profile"}
        Icon={Person}
        rightComp={editButton}
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {isEdit ? <EditProfile /> : <Profile />}
      </div>
    </>
  );
};

export default ProfilePage;
