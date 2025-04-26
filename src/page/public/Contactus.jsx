import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SignpostIcon from "@mui/icons-material/Signpost";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png"; // Add a brush effect image

function Contactus() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "400px",
            height: { xs: "80vh", sm: "50vh", md: "50vh", lg: "60vh" },
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            opacity: 0.8,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              px: 2,
              fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
            }}
          >
            Contact Us
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect}
          alt="Brush Effect"
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            height: { xs: "80px", sm: "100px", md: "120px", lg: "150px" },
            objectFit: "cover",
          }}
        />
      </Box>

      <Container sx={{ my: 5 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
              <Typography variant="subtitle2" color="#f56960" fontWeight="bold">
                GET IN TOUCH
              </Typography>
              <Divider
                sx={{ width: 40, borderTop: "2px solid #f56960", mb: 1 }}
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 2, color: "#032d4a" }}
              >
                CONTACT US TO GET MORE INFO
              </Typography>
              <form>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <TextField fullWidth label="Your Name" name="name" required />
                  <TextField
                    fullWidth
                    label="Your Mobile No."
                    name="mobileNo"
                    required
                  />
                </Box>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Your Destination"
                    name="destination"
                    required
                  />
                </Box>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Your Message or Query"
                  name="query"
                  required
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  
                  sx={{ backgroundColor: "#f56960", color: "white", px: 4, borderRadius:"0px" }}
                >
                  SUBMIT
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <Typography variant="h5" color="#032d4a" fontWeight="bold">
                Need help ?? Feel free to contact us !
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Box
                sx={{
                  bgcolor: "#0791be",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                }}
              >
                <SignpostIcon sx={{ color: "white" }} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="#032d4a"
                  fontWeight="bold"
                >
                  Address
                </Typography>
                <Typography variant="body1" color="gray">
                  Office No 15, Bhawani Market Sec 27 Noida Uttar Pradesh 201301
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Box
                sx={{
                  bgcolor: "#0791be",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                }}
              >
                <MarkAsUnreadIcon sx={{ color: "white" }} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="#032d4a"
                  fontWeight="bold"
                >
                  For Any Query:{" "}
                  <a
                    href="mailto:info@iconictravel.in"
                    style={{ color: "#0077b6", textDecoration: "none" }}
                  >
                    info@iconictravel.in
                  </a>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#032d4a"
                  fontWeight="bold"
                >
                  For Any Booking:{" "}
                  <a
                    href="mailto:sales@iconictravel.in"
                    style={{ color: "#0077b6", textDecoration: "none" }}
                  >
                    sales@iconictravel.in
                  </a>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Box
                sx={{
                  bgcolor: "#0791be",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                }}
              >
                <AddIcCallIcon sx={{ color: "white" }} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="#032d4a"
                  fontWeight="bold"
                >
                  Contact Number
                </Typography>
                <Typography variant="body1">
                  <a
                    href="tel:+918130883907"
                    style={{ color: "#0077b6", textDecoration: "none" }}
                  >
                    +91-8130883907
                  </a>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" fontWeight="bold" color="#032d4a">
                Follow us on social media..
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mt: 2,
                }}
              >
                <IconButton
                  sx={{
                    border: "1px solid #f56960",
                    color: "#f56960",
                    borderRadius: "0px",
                    width: 50,
                    height: 50,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "#f56960",
                      color: "white",
                      border:"none"
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                sx={{
                    border: "1px solid #f56960",
                    color: "#f56960",
                    borderRadius: "0px",
                    width: 50,
                    height: 50,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "#f56960",
                      color: "white",
                      border:"none"
                    },
                   }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    border: "1px solid #f56960",
                    color: "#f56960",
                    borderRadius: "0px",
                    width: 50,
                    height: 50,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "#f56960",
                      color: "white",
                      border:"none"
                    },
                   }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    border: "1px solid #f56960",
                    color: "#f56960",
                    borderRadius: "0px",
                    width: 50,
                    height: 50,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "#f56960",
                      color: "white",
                      border:"none"
                    },
                   }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12} md={12} >
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height={isMobile ? "250" : "350"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Grid>
    </>
  );
}

export default Contactus;
