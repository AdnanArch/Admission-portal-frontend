import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Badge, Tooltip } from "@mui/material";
import profile_img from "../assets/Dp.jpg";
import { LayoutDashboard, University } from "lucide-react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { styled } from "@mui/material/styles";
import uos_logo from "../assets/uos-logo.png";

const drawerWidth = 300;

function Sidenav(props) {
  const navigate = useNavigate();
  // --------state for active saide-nav button-----------
  const [activeItem, setActiveItem] = React.useState("");

  const location = useLocation();

  // --------function for navigate Dashboard---------
  const Navigate = () => {
    setActiveItem(location.pathname);
  };

  React.useEffect(() => {
    Navigate();
  }, [navigate]);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // -----------Appbar profile styling----------
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const drawer = (
    <div>
      <div className="profile d-flex align-items-center mb-3 mt-5">
        <div className="profile-img">
          <Avatar src={profile_img} />
        </div>
        <div className="profile-name ms-4">
          <h6>Jameel Wahab</h6>
        </div>
      </div>
      <List>
        <ListItem>
          <ListItemButton
            selected={activeItem === "/"}
            onClick={() => {
              handleItemClick("/");
              navigate("/");
            }}
            sx={{
              borderRadius: 1,
            }}
          >
            <ListItemIcon>
              <LayoutDashboard />
            </ListItemIcon>
            <h6>Dashboard</h6>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            selected={activeItem === "/departments"}
            onClick={() => {
              handleItemClick("/departments");
              navigate("/departments");
            }}
            sx={{ borderRadius: 1 }}
          >
            <ListItemIcon>
              <University />
            </ListItemIcon>
            <h6>Departments</h6>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            selected={activeItem === "/applications"}
            onClick={() => {
              handleItemClick("/applications");
              navigate("/applications");
            }}
            sx={{
              borderRadius: 1,
            }}
          >
            <ListItemIcon>
              <MarkEmailUnreadOutlinedIcon sx={{ fontSize: "2.5rem" }} />
            </ListItemIcon>
            <h6>Applications</h6>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#F9FAFB",
          boxShadow: "0",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "black", mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex-grow-1">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={uos_logo}
              alt="Uos-logo"
              className="img-fluid"
              style={{ width: "6rem", objectFit: "contain", cursor: "pointer" }}
            />
          </div>
          <div className="appbar-profile d-flex">
            <div className="notification me-3">
              <Tooltip
                title={
                  <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                    Notifications
                  </span>
                }
              >
                <IconButton>
                  <Badge
                    badgeContent={2}
                    color="warning"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: "1.3rem",
                        fontWeight: "600",
                      },
                    }}
                  >
                    <NotificationsNoneOutlinedIcon
                      sx={{ color: "ActiveBorder", fontSize: "2.5rem" }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
            </div>
            <div className="app-profile">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Wahab" src={profile_img} />
              </StyledBadge>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Sidenav;
