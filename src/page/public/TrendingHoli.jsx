import React, { useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LuggageIcon from "@mui/icons-material/Luggage";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  Stack,
  Divider,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HomeData from "../../Data/HomeData";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const TrendingHoli = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  // Determine items per page based on screen size
  const itemsPerPage = isSmallScreen
    ? 1
    : isMediumScreen
    ? 2
    : isLargeScreen
    ? 3
    : 4;
  const totalItems = HomeData.length;

  const [index, setIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev - itemsPerPage < 0 ? totalItems - itemsPerPage : prev - itemsPerPage
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setIndex((prev) =>
      prev + itemsPerPage >= totalItems ? 0 : prev + itemsPerPage
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Box sx={{ textAlign: "center", color: "#032d4a", my: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }}
        >
          TRENDING HOLIDAYS TOURS
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
          <MoreHorizIcon />
          <LuggageIcon />
          <MoreHorizIcon />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        p={2}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{ position: "absolute", left: 10, zIndex: 1 }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Image Carousel */}
        <Box
          display="flex"
          gap={5}
          overflow="hidden"
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            justifyContent: "center",
          }}
        >
          {HomeData.slice(index, index + itemsPerPage).map((homedata, i) => (
            <Card
              key={i}
              sx={{
                position: "relative", // Needed for absolute positioning inside
                minWidth: isSmallScreen ? "100%" : 250,
                maxWidth: 350,
                borderRadius: "0",
                border: "1px solid wheat",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={homedata.imagePath}
              />
              <Box
                sx={{
                  position: "absolute", // Ensure it's positioned relative to the Card
                  top: 0, // Align to the top
                  right: 0, // Align to the right
                  bgcolor: "error.main",
                  color: "white",
                  px: 2,
                  py: 0.8,
                  fontWeight: "bold",

                  mt: 3,
                }}
              >
                {homedata.price}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  top: "52%", // Adjust the top position
                  bgcolor: "#0791be", // Background color
                  color: "white",
                  py: 0.8, // Vertical padding
                  px: 2,
                  mx: 3, // Rounded corners
                  fontWeight: "bold", // Bold text
                  fontSize: "16px", // Optional: Font size
                  zIndex: 2,
                }}
              >
                <Stack
                  direction="row"
                  spacing={0.6}
                  justifyContent="space-between"
                  sx={{ flexWrap: "nowrap", alignItems: "center" }}
                >
                  {/* time */}
                  <IconButton sx={{ p: 1 }}>
                    <AccessTimeIcon sx={{ color: "white", fontSize: 18 }} />
                  </IconButton>
                  <Typography sx={{ fontSize: "13px", mt: 2 }}>
                    {homedata.duration}
                  </Typography>
                  <Divider
                    sx={{
                      height: "2vh",
                      width: "2px",
                      backgroundColor: "white",
                    }}
                  />

                  {/* person */}
                  <IconButton sx={{ p: 0.2 }}>
                    <PersonIcon sx={{ color: "white", fontSize: 18 }} />
                  </IconButton>
                  <Typography sx={{ fontSize: "13px", mt: 1 }}>
                    {homedata.person}
                  </Typography>
                  <Divider
                    sx={{
                      height: "2vh",
                      width: "2px",
                      backgroundColor: "white",
                    }}
                  />

                  {/* location */}
                  <IconButton sx={{ p: 0.2 }}>
                    <FmdGoodIcon sx={{ color: "white", fontSize: 18 }} />
                  </IconButton>
                  <Typography sx={{ fontSize: "14px" }}>
                    {homedata.location}
                  </Typography>
                </Stack>
              </Box>

              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  fontWeight="bold"
                  color="#101f46"
                >
                  {homedata.title}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f56960",
                    color: "white",
                    borderRadius: 0,
                    fontWeight: "bold",
                    width: "180px",
                    height: "45px",
                    mb: 2,
                    "&:hover": { backgroundColor: "blue", color: "white" },
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{ position: "absolute", right: 10, zIndex: 1 }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </>
  );
};

export default TrendingHoli;
