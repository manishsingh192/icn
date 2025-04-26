import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
  Button,
} from "@mui/material";
import { Phone, Email, LocationOn, ArrowUpward } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box sx={{ padding: 4, background: "#032d4a", color: "white" }}>
        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {/* About Iconic Travel Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              ABOUT ICONIC TRAVEL
            </Typography>
            <Typography variant="body1" paragraph>
              Iconic Travel offers the best cheapest tour packages to our
              reliable clients, occasions, and encounters to assist individuals
              with making a propensity for parting from the daily practice.
            </Typography>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              CONTACT INFORMATION
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Phone sx={{ marginRight: 1, color: "white" }} /> +91-8130883907
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Email sx={{ marginRight: 1, color: "white" }} />{" "}
              info@iconictravel.in
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Email sx={{ marginRight: 1, color: "white" }} />{" "}
              sales@iconictravel.in
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOn sx={{ marginRight: 1, color: "white" }} /> Office No
              15, Bhawan Market Sec 27
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocationOn sx={{ marginRight: 1, color: "white" }} /> Noida,
              Uttar Pradesh 201301
            </Typography>
          </Grid>

          {/* Latest Post Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              LATEST POST
            </Typography>
            <Link
              href="#"
              underline="hover"
              color="white"
              onClick={(e) => e.preventDefault()}
            >
              Places to Visit in Omkareshwar
            </Link>
            <Typography variant="body2" paragraph sx={{ color: "white" }}>
              07-Feb-2023 | Admin
            </Typography>
            <Divider sx={{ borderColor: "white", my: 1 }} />
            <Link
              href="#"
              underline="hover"
              color="white"
              onClick={(e) => e.preventDefault()}
            >
              Best places to visit in Varanasi
            </Link>
            <Typography variant="body2" paragraph sx={{ color: "white" }}>
              07-Feb-2023 | Admin
            </Typography>
            <Divider sx={{ borderColor: "white", my: 1 }} />
            <Link
              href="#"
              underline="hover"
              color="white"
              onClick={(e) => e.preventDefault()}
            >
              Tourist Places To Visit in Amarnath
            </Link>
            <Typography variant="body2" paragraph sx={{ color: "white" }}>
              07-Feb-2023 | Admin
            </Typography>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
              USEFUL LINKS
            </Typography>
            <RouterLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Home
            </RouterLink>
            <RouterLink
              to="/aboutus"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/tourpackages"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Tour Packages
            </RouterLink>
            <RouterLink
              to="/feedback"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Feedback
            </RouterLink>
            <RouterLink
              to="/blogs"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Blogs
            </RouterLink>
            <RouterLink
              to="/gallery"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Gallery
            </RouterLink>
            <RouterLink
              to="/contactus"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              Contact Us
            </RouterLink>
            <RouterLink
              to="/faqs"
              style={{
                color: "white",
                textDecoration: "none",
                display: "block",
              }}
            >
              FAQ's
            </RouterLink>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        display="flex"
        sx={{
          background: "black",
          padding: 2,
          color: "white",
          width: "auto",
          position: "relative",
        }}
      >
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 1 : 35}
          sx={{ textAlign: isMobile ? "center" : "left", width: "100%" }}
        >
          <Typography>
            Cancellation and Refund Policy | Privacy Policy | Terms & Conditions
          </Typography>
          <Typography>
            Copyright ©2025 Iconic Travel. All rights Reserved
          </Typography>
        </Stack>

        {/* Back to Top Button */}
        {showButton && (
          <Button
            onClick={scrollToTop}
            variant="contained"
            color="primary"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              borderRadius: "50%",
              minWidth: "50px",
              minHeight: "50px",
            }}
          >
            <ArrowUpward />
          </Button>
        )}
      </Box>
    </>
  );
};

export default Footer;
