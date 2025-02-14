"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PeopleIcon from "@mui/icons-material/People";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonOutline from "@mui/icons-material/PersonOutline";
import useRole from "@/hooks/hooks/useRole";
import SingleToaster from "@/comp/Toaster/singleToaster";
import Link from "next/link";
import AdminLayout from "@/comp/AdminLayout";
import useUser from "@/hooks/useUser";

const AdminMenu = [
  {
    title: "Create Product",
    url: "/admin/create-product",
    Icon: AddCircleIcon,
  },
  {
    title: "Callback Requests",
    url: "/admin/callback-requests",
    Icon: PhoneCallbackIcon,
  },
  {
    title: "Create Category",
    url: "/admin/create-category",
    Icon: PlaylistAddIcon,
  },
  { title: "User List", url: "/admin/user-list", Icon: PeopleIcon },
];

export default function AccountMenu() {
  const { updateToken } = useRole();
  const [toaster, setToaster] = React.useState({
    open: false,
    msg: "Welcome!",
    severity: "success",
  });
  const { state } = useUser();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("Logged Out!");
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    updateToken(null);
    setToaster({
      open: true,
      msg: "Logged Out Successfully!",
      severity: "success",
    });
    setTimeout(() => {
      setToaster({
        open: false,
        msg: "",
        severity: "success",
      });
      window.location.reload();
    }, 3000);
  };
  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          //   sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {/* <Avatar sx={{ width: 32, height: 32 }}> */}
          {/* <IconButton> */}
          <PersonOutline sx={{ color: "grey.600" }} />
          {/* </IconButton> */}
          {/* </Avatar> */}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <Link href="/profile">
          <MenuItem>
            <Avatar /> {state?.user?.username}
            <br />
            {state?.user?.mail}
            {state?.user?.role === "user" ? null : (
              <>
                <br />
                {state?.user?.role}
              </>
            )}
          </MenuItem>
        </Link>
        <Link href="/orders">
          <MenuItem>
            <WorkOutlineIcon style={{ marginRight: 8, color: "grey" }} /> My
            Orders
          </MenuItem>
        </Link>

        <AdminLayout>
          {AdminMenu.map((val, i) => (
            <Link href={val.url} key={`adminLinks-${i}`}>
              <MenuItem>
                <val.Icon style={{ marginRight: 8, color: "grey" }} />
                {val.title}
              </MenuItem>
            </Link>
          ))}
        </AdminLayout>

        <Link href="/">
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
      {toaster.open && (
        <SingleToaster
          key={Date.now()}
          openNow={toaster.open}
          msg={toaster.msg}
          severity={toaster.severity}
        />
      )}
    </React.Fragment>
  );
}
