import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "@/components/nav-link";
import { FlexBox } from "@/components/flex-box";
import BazaarCard from "@/components/BazaarCard";
import NavItemChild from "./nav-item-child";
import { StyledNavLink, NAV_LINK_STYLES, ChildNavListWrapper } from "./styles";
import navbarNavigation from "./data";

export type Nav = {
  url: string;
  title: string;
};

export type NavList = {
  url: string;
  title: string;
  child: Nav[];
};

export default function NavigationList() {
  const renderNestedNav = (list: any[] = [], isRoot = false) => {
    return list.map((nav: NavList) => {
      if (isRoot) {
        if (nav.url) {
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems="center"
              position="relative"
              flexDirection="column"
              sx={{
                "&:hover": { "& > .child-nav-item": { display: "block" } },
              }}
            >
              <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
                {nav.title}{" "}
                <KeyboardArrowDown
                  sx={{ color: "grey.500", fontSize: "1.1rem" }}
                />
              </FlexBox>

              <ChildNavListWrapper className="child-nav-item">
                <BazaarCard
                  elevation={3}
                  sx={{ mt: 2.5, py: 1, minWidth: 100 }}
                >
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ChildNavListWrapper>
            </FlexBox>
          );
        }
      } else {
        if (nav.url) {
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        }

        if (nav.child) {
          return (
            <NavItemChild nav={nav} key={nav.title}>
              {renderNestedNav(nav.child)}
            </NavItemChild>
          );
        }
      }
    });
  };
  console.log(navbarNavigation);
  return <FlexBox gap={4}>{renderNestedNav(navbarNavigation, true)}</FlexBox>;
}
