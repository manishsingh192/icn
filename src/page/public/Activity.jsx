import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ActivityData from "../../Data/ActivityData";

const Activity = () => {
  const navigate = useNavigate(); // Initialize navigation hook
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const itemsPerPage = isSmallScreen
    ? 1
    : isMediumScreen
    ? 2
    : isLargeScreen
    ? 6
    : 6;
  const totalItems = ActivityData.length;
  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      p={2}
    >
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: 10,
          zIndex: 1,
          display: { lg: "none" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Box
        display="flex"
        gap={1}
        overflow="hidden"
        sx={{
          flexWrap: isSmallScreen ? "wrap" : "nowrap",
          justifyContent: "center",
        }}
      >
        {ActivityData.slice(index, index + itemsPerPage).map((activity, i) => (
          <Card
            key={i}
            sx={{
              minWidth: isSmallScreen ? "100%" : 200,
              maxWidth: 200,
              borderRadius: "0",
              border: "1px solid wheat",
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => {
              const formattedTitle = activity.title
                .toLowerCase()
                .replace(/\s+/g, "-"); // Convert title to URL-friendly format
              navigate(`/activity/${formattedTitle}`);
            }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <CardMedia
              component="img"
              height="175"
              image={activity.imagePath}
            />
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                fontWeight="bold"
                sx={{
                  color: hoverIndex === i ? "#f56960" : "#101f46",
                  transition: "color 0.3s",
                }}
              >
                {activity.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: 10,
          zIndex: 1,
          display: { lg: "none" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Activity;
