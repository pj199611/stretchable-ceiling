"use client";

import { Fragment } from "react";
import Card from "@mui/material/Card";
import Person from "@mui/icons-material/Person";
// Local CUSTOM COMPONENT
import ProfileEditForm from "../edit-form";
import ProfilePicUpload from "../profile-pic-upload";
import DashboardHeader from "../../dashboard-header";
import useUser from "@/hooks/useUser";

export default function ProfileEditPageView() {
  const { state: userState }: any = useUser();
  const { avatar, mail, mobile, role, username } = userState.user;

  return (
    <>
      {/* USER PROFILE PIC */}
      {/* <ProfilePicUpload /> */}

      {/* PROFILE EDITOR FORM */}
      <ProfileEditForm user={userState.user} />
    </>
  );
}
