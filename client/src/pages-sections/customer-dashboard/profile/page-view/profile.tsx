"use client";
import Avatar from "@mui/material/Avatar";
import { FlexBetween } from "@/components/flex-box";
import useUser from "@/hooks/useUser";

const Label = (text) => (
  <span style={{ fontWeight: 500, fontSize: 18 }}>{text}</span>
);
const Value = (val) => (
  <span style={{ fontWeight: 600, fontSize: 20 }}>{val}</span>
);
export default function ProfilePageView() {
  const { state: userState }: any = useUser();
  const { avatar, mail, mobile, role, username } = userState.user;

  return (
    <div>
      <FlexBetween minWidth={300}>
        {Label("Name")}
        {Value(username.toUpperCase())}
      </FlexBetween>
      <br />
      <FlexBetween minWidth={300}>
        {Label("Email")}
        {Value(mail.toLowerCase())}
      </FlexBetween>
      <br />
      <FlexBetween minWidth={300}>
        {Label("Phone")}
        {Value(mobile)}
      </FlexBetween>
      <br />
      <FlexBetween minWidth={300}>
        {Label("Role")}
        {Value(role)}
      </FlexBetween>
    </div>
  );
}
