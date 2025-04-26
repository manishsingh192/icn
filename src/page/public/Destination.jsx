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
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import DestinationData from "../../Data/DestinationData";

const Destination = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const itemsPerPage = isSmallScreen ? 1 : isMediumScreen ? 2 : isLargeScreen ? 4 : 4;
  const totalItems = DestinationData.length;
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalItems - itemsPerPage : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerPage >= totalItems ? 0 : prev + 1));
  };

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
          MOST VISITED PLACES/DESTINATIONS
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
        <IconButton
          onClick={prevSlide}
          sx={{ position: "absolute", left: 10, zIndex: 1 }}
        >
          <ArrowBackIos />
        </IconButton>
        <Box
          display="flex"
          gap={2}
          overflow="hidden"
          sx={{
            flexWrap: isSmallScreen ? "wrap" : "nowrap",
            justifyContent: "center",
          }}
        >
          {DestinationData.slice(index, index + itemsPerPage).map(
            (destination, i) => (
              <Card
                key={i}
                sx={{ minWidth: isSmallScreen ? "100%" : 250, maxWidth: 300 , borderRadius:"0"}}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={destination.imagePath}
                />
                <CardContent>
                  <Typography variant="h5" align="center" fontWeight="bold" color="#101f46">
                    {destination.title}
                  </Typography>
                  
                </CardContent>
              </Card>
            )
          )}
        </Box>
        <IconButton
          onClick={nextSlide}
          sx={{ position: "absolute", right: 10, zIndex: 1 }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
  <Button
    variant="contained"
    fullWidth={false} // Ensures it doesn't stretch to full width
    sx={{
      backgroundColor: "#f56960",
      color: "white",
      borderRadius:0,
      fontWeight: "bold",
      width: "180px",
      height:"45px",
      mb:2,
      "&:hover": { backgroundColor: "blue", color: "white" },
    }}
  >
    MORE DESTINATION
  </Button>
</Box>

    </>
  );
};

export default Destination;