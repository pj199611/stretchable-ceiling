"use client";
import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";
import { FlexBetween, FlexBox, FlexRowCenter } from "@/components/flex-box";
import { H3, H5, Paragraph, Small, Span } from "@/components/Typography";
import useUser from "@/hooks/useUser";

export default function ProfilePageView() {
  const { state: userState }: any = useUser();
  const { avatar, mail, mobile, role, username } = userState.user;

  return (
    <FlexBetween width={"100%"} p={4}>
      <LabelRowItem title="Name" value={username} />
      <LabelRowItem title="Email" value={mail} />
      <LabelRowItem title="Phone" value={mobile} />
    </FlexBetween>
  );
  // return (
  //   <FlexBetween width={"100%"} p={4}>
  //     <FlexBox>
  //       <Avatar
  //         alt={"User Image"}
  //         src={avatar}
  //         sx={{ height: 64, width: 64 }}
  //       />
  //       <TableRowItem title="Name" value={username} />
  //     </FlexBox>
  //     <TableRowItem title="Email" value={mail} />
  //     <TableRowItem title="Phone" value={mobile} />
  //   </FlexBetween>
  // );
}

function TableRowItem({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>
  );
}
const LabelRowItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <Grid container spacing={3} ml={6} mb={2}>
      <Grid item xs={2}>
        <Small color="grey.600" mb={3}>
          {title}
        </Small>
      </Grid>
      <Grid item xs={3}>
        <Span>{value}</Span>
      </Grid>
    </Grid>
  );
};
