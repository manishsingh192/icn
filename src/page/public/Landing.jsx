import React from "react";
import iconic from "../../assets/video/Iconic Travel.mp4";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LuggageIcon from "@mui/icons-material/Luggage";


const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          src={iconic}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
      {/* <Box sx={{ textAlign: "center", color: "#032d4a", my: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          TRENDING HOLIDAYS TOURS
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
          <MoreHorizIcon />
          <LuggageIcon />
          <MoreHorizIcon />
        </Box>
      </Box> */}

      
    </>
  );
};

export default Landing;
