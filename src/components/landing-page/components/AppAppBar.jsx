import * as React from "react";
import {useNavigate} from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo.svg";

const logoStyle = {
  width: "100px",
  height: "auto",
  cursor: "pointer",
  marginLeft: "10px",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({behavior: "smooth"});
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
              width: "fit-content",
              margin: "0 auto",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "space-between",
                px: 0,
              }}
            >
              <img src={logo} style={logoStyle} alt="logo of sitemark" />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                  },
                }}
              >
                <MenuItem
                  onClick={() => scrollToSection("features")}
                  sx={{py: "6px", px: "12px"}}
                >
                  <Typography variant="body2" color="text.primary">
                    O wiosce
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{py: "6px", px: "12px"}}
                >
                  <Typography variant="body2" color="text.primary">
                    Wioskowicze
                  </Typography>
                </MenuItem>
                <MenuItem sx={{py: "6px", px: "12px"}}>
                  <a href="/app/#/quiz">
                    <Typography variant="body2" color="text.primary">
                      Gra konwentowa
                    </Typography>
                  </a>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{display: {sm: "", md: "none"}}}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{minWidth: "30px", p: "4px"}}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem onClick={() => scrollToSection("features")}>
                    O wiosce
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")}>
                    Wioskowicze
                  </MenuItem>

                  <a href="/app/#/quiz">
                    <MenuItem>Gra konwentowa</MenuItem>
                  </a>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
