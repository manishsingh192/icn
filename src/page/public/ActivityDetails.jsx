import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png";

const ActivityDetails = () => {
  const { title } = useParams(); 
  const formattedTitle = title ? title.replace(/-/g, " ") : "Activity Details";

  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        {/* Background Image */}
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
          <Typography variant="h3" fontWeight="bold" color="white">
            {formattedTitle}
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
    </>
  );
};

export default ActivityDetails;
