import { styled } from "@mui/material/styles";
import { SvgIconComponent } from "@mui/icons-material";
import { H2 } from "@/components/Typography";
import FlexBox from "@/components/flex-box/flex-box";

// STYLED COMPONENT
// const StyledBox = styled("div")(({ theme }) => ({
//   display: "flex",
//   marginTop: theme.spacing(-2),
//   marginBottom: theme.spacing(3),
//   "& .headerHold": {
//     flexGrow: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
// }));

type Props = {
  title: string;
  Icon?: SvgIconComponent;
};

export default function DashboardHeader({ title, Icon }: Props) {
  return (
    <>
      <FlexBox mx={5} my={5} mt={5} className="headerHold">
        <FlexBox alignItems="center" gap={1.5}>
          {Icon && <Icon color="primary" />}

          <H2 my={0} lineHeight={1} ellipsis>
            {title}
          </H2>
        </FlexBox>
      </FlexBox>
    </>
  );
}
