"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import AcmeLogo from "./NestandNookLogo";
import SearchIcon from "./SearchIcon";

export default function App() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="sm:block font-bold text-inherit">
            Nest and Nook Interior
          </p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-3">
          <NavbarItem isActive>
            <Link href="/login" aria-current="page" color="secondary">
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/signup">
              Sign Up
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

// import * as React from "react";
// import { extendTheme, styled } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import { PageContainer } from "@toolpad/core/PageContainer";
// import Grid from "@mui/material/Grid2";

// const NAVIGATION: Navigation = [
//   {
//     kind: "header",
//     title: "Main items",
//   },
//   {
//     segment: "dashboard",
//     title: "Dashboard",
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: "orders",
//     title: "Orders",
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Analytics",
//   },
//   {
//     segment: "reports",
//     title: "Reports",
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: "sales",
//         title: "Sales",
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: "traffic",
//         title: "Traffic",
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: "integrations",
//     title: "Integrations",
//     icon: <LayersIcon />,
//   },
// ];

// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: false },
//   colorSchemeSelector: "class",
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath: string): Router {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path: string | URL) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props: any) {
//   const router = useDemoRouter("/dashboard");

//   return (
//     <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
//       <DashboardLayout>
//         <PageContainer>
//           <Grid container spacing={1}>
//             <Grid size={5} />
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={8}>
//               <Skeleton height={100} />
//             </Grid>

//             <Grid size={12}>
//               <Skeleton height={150} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>

//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//           </Grid>
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
// } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
// import Link from "next/link";

// const Navbar = () => {
//   // State for mobile menu open/close
//   const [openDrawer, setOpenDrawer] = useState(false);

//   // Function to toggle the drawer
//   const toggleDrawer = () => setOpenDrawer(!openDrawer);

//   // List of navigation links
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <AppBar position="sticky">
//       <Toolbar>
//         {/* Logo and Brand */}
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           MyApp
//         </Typography>

//         {/* Desktop Navigation */}
//         <div
//           className="navbar-links"
//           style={{
//             display: "flex",
//             gap: "20px",
//             "@media (max-width: 600px)": {
//               display: "none", // Hide on mobile
//             },
//           }}
//         >
//           {navLinks.map((link) => (
//             <Button key={link.name} color="inherit">
//               <Link href={link.path} passHref>
//                 <Typography>{link.name}</Typography>
//               </Link>
//             </Button>
//           ))}
//         </div>
//         {/* Hamburger Menu for Mobile */}
//         <IconButton
//           color="inherit"
//           onClick={toggleDrawer}
//           sx={{ display: { xs: "block", md: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>

//       {/* Drawer for Mobile View */}
//       <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
//         <div
//           style={{ width: 250 }}
//           role="presentation"
//           onClick={toggleDrawer}
//           onKeyDown={toggleDrawer}
//         >
//           <List>
//             {navLinks.map((link) => (
//               <ListItem button key={link.name}>
//                 <Link href={link.path} passHref>
//                   <ListItemText primary={link.name} />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </div>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navbar;
