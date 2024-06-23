import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./Sidebar";
import Avatar from "./Avatar";
import Drawer2 from "./Drawer2";
import { CiMenuKebab } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa"; // Import the close icon

const drawerWidth = 340;
const drawer2Width = 240; // Updated width for Drawer2

export default function Header({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // State for controlling Drawer2

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContactClick = () => {
    setDrawerOpen(!drawerOpen); // Toggle Drawer2 when Contact is clicked
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
          className="ml-10"
        >
          <Toolbar className="flex justify-between">
            <div className="flex">
              <div>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex">
              <div>
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer2"
                  edge="start"
                  onClick={handleContactClick}
                  sx={{ mr: 2 }}
                >
                  {drawerOpen ? <FaAngleLeft /> : <CiMenuKebab />}
                </IconButton>
              </div>
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
            onClose={handleDrawerToggle}
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
      <Drawer2 open={drawerOpen} handleDrawerToggle={handleContactClick} />
    </div>
  );
}
