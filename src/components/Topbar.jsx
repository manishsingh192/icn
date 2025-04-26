import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Select,
  MenuItem,
  Toolbar,
  Icon,
  Grid,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import { Navigate, useNavigate } from "react-router-dom";

function TopAppBar() {
  const [scrolling, setScrolling] = useState(false);
  const [language, setLanguage] = useState("en");
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:900px)"); // Tablet media query
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/paynow");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.pageYOffset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    !scrolling && (
      <AppBar position="static" sx={{ backgroundColor: "#032d4a", px: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Contact Details */}
          {!isMobile && !isTablet ? ( // Hide on mobile and tablet
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton sx={{ color: "white" }}>
                  <LocalPhoneIcon />
                </IconButton>
                <Typography variant="body2" sx={{ color: "white" }}>
                  +91-6386963004
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton sx={{ color: "white" }}>
                  <MailOutlineIcon />
                </IconButton>
                <Typography variant="body2" sx={{ color: "white" }}>
                  info@iconictravel.in
                </Typography>
              </Box>
            </Stack>
          ) : null}

          {/* Search, Language Selector, and Pay Now Button */}
          {!isMobile && !isTablet ? ( // Hide on mobile and tablet
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                sx={{
                  background: "white",
                  borderRadius: "2px",
                  width: "200px",
                  height: "30px",
                  "& .MuiInputBase-input": {
                    fontSize: "15px",
                    padding: "5px 10px",
                  },
                }}
                size="small"
                label="Search Packages"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{
                  background: "white",
                  borderRadius: "2px",
                  height: "30px",
                  width: "120px",
                }}
                size="small"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="hi">Hindi</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
              </Select>
              <Button
                variant="contained"
                sx={{
                  background: "#D32F2F",
                  color: "white",
                  px: 3,
                  py: 1,
                  height: "30px",
                  borderRadius:"2px",
                  textTransform: "none",
                  "&:hover": { background: "#0000FF" },
                }}
                onClick={handleClick}
              >
                Pay Now
              </Button>
            </Stack>
          ) : (
            <>
              <Grid container spacing={1} alignItems="center">
                {/* Contact Details */}
                {(isMobile || isTablet) && ( // Show on mobile and tablet
                  <>
                    <Grid item xs={6} md={3}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={{ color: "white" }}>
                          <LocalPhoneIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "white" }}>
                          +91-6386963004
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={{ color: "white" }}>
                          <MailOutlineIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "white" }}>
                          info@iconictravel.in
                        </Typography>
                      </Box>
                    </Grid>
                  </>
                )}

                {/* Search Bar */}
                <Grid item xs={6} md={3}>
                  <TextField
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      width: "100%",
                    }}
                    size="small"
                    label="Search"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Language Selector */}
                <Grid item xs={6} md={3}>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    sx={{
                      background: "white",
                      borderRadius: "2px",
                      width: "100%",
                    }}
                    size="small"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="hi">Hindi</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                  </Select>
                </Grid>

                {/* Pay Now Button */}
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={2}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#D32F2F",
                      color: "white",
                      width: "100%",
                      borderRadius: "2px",
                      textTransform: "none",
                      mb: 1,
                      "&:hover": { background: "#0000FF" },
                    }}
                    onClick={handleClick}
                  >
                    Pay Now
                  </Button>
                </Grid>

                {/* Social Media Icons */}
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={2}
                  display="flex"
                  justifyContent="center"
                >
                  <Box sx={{ display: "flex", height: "30px" }}>
                    <IconButton sx={{ color: "white" }}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}

          {/* Social Media Icons for Desktop */}
          {!isMobile && !isTablet && ( // Hide on mobile and tablet
            <Stack direction="row" spacing={2}>
              <Icon sx={{ color: "white", height: "30px" }}>
                <FacebookIcon />
              </Icon>
              <Icon sx={{ color: "white", height: "30px" }}>
                <InstagramIcon />
              </Icon>
              <Icon sx={{ color: "white", height: "30px" }}>
                <LinkedInIcon />
              </Icon>
              <Icon sx={{ color: "white", height: "30px" }}>
                <TwitterIcon />
              </Icon>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    )
  );
}

export default TopAppBar;