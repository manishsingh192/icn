import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  Modal,
  Grid,
  TextField,
  Stack,
  Container,
} from "@mui/material";
import { ArrowDropDown, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import TopAppBar from "./Topbar";
import IMGLOGO from "../assets/images/logo.png";

const navLinks = [
  { to: "/", label: "HOME" },
  {
    to: "/tourpackages",
    label: "TOUR PACKAGES",
    dropdown: [
      { to: "/tourpackages/internationaltours", label: "International Tours" },
      { to: "/tourpackages/domestictours", label: "Domestic Tours" },
      { to: "/tourpackages/spritualtours", label: "Spiritual Tours" },
    ],
  },
  {
    to: "/ourservices",
    label: "OUR SERVICES",
    dropdown: [
      { to: "/ourservices/tourpackbooking", label: "Tour packages Booking" },
      { to: "/ourservices/hotelbooking", label: "Hotel Booking" },
      { to: "/ourservices/transportbooking", label: "Transport Booking" },
      { to: "/ourservices/b2bdeals", label: "B2B Deals" },
    ],
  },
  { to: "/gallery", label: "GALLERY" },
  { to: "/blogs", label: "BLOGS" },
  { to: "/contactus", label: "CONTACT US" },
];

const PublicAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Desktop Dropdown Handling
  const handleMenuOpen = (event, index) => {
    setMenuAnchor(event.currentTarget);
    setActiveDropdown(index);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setActiveDropdown(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <TopAppBar />
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          <Box>
            <img
              src={IMGLOGO}
              alt="logo"
              style={{ height: isSmallScreen ? "40px" : "50px" }}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                gap: 4,
              }}
            >
              {navLinks.map((link, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  {link.dropdown ? (
                    <>
                      <Typography
                        sx={{
                          color: "black",
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          "&:hover": { color: "#f56960" },
                        }}
                        onMouseEnter={(e) => handleMenuOpen(e, index)}
                      >
                        {link.label}
                        <ArrowDropDown
                          sx={{
                            transform:
                              activeDropdown === index
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      </Typography>
                      <Menu
                        anchorEl={menuAnchor}
                        open={activeDropdown === index}
                        onClose={handleMenuClose}
                        onMouseLeave={handleMenuClose}
                        sx={{ mt: 1 }}
                      >
                        {link.dropdown.map((item, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            component={Link}
                            to={item.to}
                            onClick={handleMenuClose}
                          >
                            {item.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Typography
                      component={Link}
                      to={link.to}
                      sx={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        "&:hover": { color: "#f56960" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Book Now Button */}
          {!isMobile && (
            <>
              <Button variant="contained" color="error" onClick={handleOpen}>
                Book Now
              </Button>
              <Modal open={open} onClose={handleClose}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "95%", sm: "500px", md: "800px" },
                    height: { xs: "auto", sm: "400px", md: "370px" },
                    maxHeight: "90vh",
                    bgcolor: "#f8f3a3",

                    borderRadius: "8px",
                    overflowY: "auto",
                  }}
                >
                  <Box sx={{ backgroundColor: "#f56960" }}>
                    <Typography sx={{ p: 2 }} variant="h6" color="white">
                      Get a free enquiry
                    </Typography>
                  </Box>
                  <Container>
                    <Grid Grid Container sx={{ py: 2 }}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                          {/* Name and Mobile Number in the same row */}
                          <Stack direction={"row"} spacing={2}>
                            <TextField
                              fullWidth
                              label="Your Name*"
                              variant="outlined"
                            />
                            <TextField
                              fullWidth
                              label="Your Mobile Number"
                              variant="outlined"
                            />
                          </Stack>

                          <Stack direction="row" spacing={2}>
                            <TextField
                              fullWidth
                              label="Your Email*"
                              variant="outlined"
                            />
                            <TextField
                              fullWidth
                              label="Your Destination*"
                              variant="outlined"
                            />
                          </Stack>
                          <Stack direction="row" spacing={2}>
                            <TextField
                              label="Select Date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              InputLabelProps={{ shrink: true }} // Ensures label stays visible
                            />

                            <TextField
                              fullWidth
                              label="No of person*"
                              variant="outlined"
                            />
                          </Stack>
                        </Stack>
                      </Grid>
                      <Box sx={{ mt: 3, textAlign: "left" }}>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleClose}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Grid>
                  </Container>

                  {/* Text Fields */}
                </Box>
              </Modal>
            </>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link, index) => (
            <Box key={index}>
              <ListItem
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
              >
                <ListItemText>
                  {link.dropdown ? (
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          color: "#000",
                          "&:hover": { color: "#f56960" },
                        }}
                      >
                        {link.label}
                      </Typography>
                      {activeDropdown === index && (
                        <Box sx={{ pl: 4 }}>
                          {link.dropdown.map((item, subIndex) => (
                            <ListItem key={subIndex} sx={{ pl: 4 }}>
                              <ListItemText>
                                <Link
                                  to={item.to}
                                  style={{
                                    textDecoration: "none",
                                    color: "#000",
                                  }}
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              </ListItemText>
                            </ListItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <Link
                      to={link.to}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      onClick={() => setDrawerOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </ListItemText>
              </ListItem>
            </Box>
          ))}
        </List>
        <Button variant="contained" color="error" onClick={handleOpen}>
          Book Now
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "95%", sm: "500px", md: "800px" },
              height: { xs: "auto", sm: "400px", md: "370px" },
              maxHeight: "90vh",
              bgcolor: "#f8f3a3",

              borderRadius: "8px",
              overflowY: "auto",
            }}
          >
            <Box sx={{ backgroundColor: "#f56960" }}>
              <Typography sx={{ p: 2 }} variant="h6" color="white">
                Get a free enquiry
              </Typography>
            </Box>
            <Container>
              <Grid Grid Container sx={{ py: 2 }}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    {/* Name and Mobile Number in the same row */}
                    <Stack direction={"row"} spacing={2}>
                      <TextField
                        fullWidth
                        label="Your Name*"
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Your Mobile Number"
                        variant="outlined"
                      />
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <TextField
                        fullWidth
                        label="Your Email*"
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Your Destination*"
                        variant="outlined"
                      />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="Select Date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ shrink: true }} // Ensures label stays visible
                      />

                      <TextField
                        fullWidth
                        label="No of person*"
                        variant="outlined"
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Box sx={{ mt: 3, textAlign: "left" }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </Grid>
            </Container>

            {/* Text Fields */}
          </Box>
        </Modal>
      </Drawer>
    </>
  );
};

export default PublicAppBar;
