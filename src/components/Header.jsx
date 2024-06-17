import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import Sidebar from "./Sidebar";
import Avatar from "./Avatar";
import Drawer2 from "./Drawer2";

const drawerWidth = 340;
const drawer2Width = 65; // Width for Drawer2

export default function Header({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State for controlling Drawer2

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
    setDrawerOpen(false); // Close Drawer2
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleContactClick = () => {
    setDrawerOpen(true); // Open Drawer2 when Contact is clicked
  };

  const drawer = (
    <div className="sidebar-container">
      <div className="avatar-container">
        <Avatar />
      </div>
      <Divider />
      <div className="sidebar-scroll">
        <Sidebar />
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawer2Width}px)` }, // Only consider Drawer2 width on the right
            mr: { sm: `${drawer2Width}px` }, // Add margin-right for Drawer2
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div className="flex-1 flex items-center justify-end font-normal">
              <div className="flex-10 hidden md:flex">
                <ul className="flex gap-8 mr-16">
                  <li className="hover:text-orange-500 cursor-pointer">
                    <Link to="Navbar" spy="true" smooth="true">
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    <Link to="/services" spy="true" smooth="true">
                      Services
                    </Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    <Link to="/experience" spy="true" smooth="true">
                      Experience
                    </Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    <Link to="/portfolio" spy="true" smooth="true">
                      Portfolio
                    </Link>
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    <Link to="/testimonial" spy="true" smooth="true">
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </div>
              <ModeToggle />
              <Link to="" spy="true" smooth="true">
                <button className="ml-4 button" onClick={handleContactClick}>
                  Contact
                </button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
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
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px - ${drawer2Width}px)` },
          }}
        >
          <Toolbar />
          {/* Main content goes here */}
        </Box>
      </Box>
      <Drawer2 open={drawerOpen} handleDrawerClose={handleDrawerClose} />
    </div>
  );
}
