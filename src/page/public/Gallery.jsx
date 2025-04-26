import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Pagination,
  Dialog,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ZoomIn } from "@mui/icons-material";
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import gallery from "../../assets/images/gellary.png";
import brushEffect from "../../assets/images/blob.png";
import Gellary from "../../Data/Gellary";

const ITEMS_PER_PAGE = 8;

function Gallery() {
  const [page, setPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(null);
  const totalPages = Math.ceil(Gellary.length / ITEMS_PER_PAGE);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedImages = Gellary.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleOpenImage = (index) => {
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : displayedImages.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < displayedImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* Background Image */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "800px", sm: "600px", md: "600px", lg: "500px" },
            backgroundImage: `url(${gallery})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            opacity: "0.8",
          }}
        >
          {/* Title */}
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2 }}
          >
            Our Gallery
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect}
          alt="Brush Effect"
          sx={{
            width: { sx: "100%", md: "100%", lg: "100%" },
            position: "absolute",
            bottom: 0,
            height: { xs: "150px" },
          }}
        />
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3} sx={{ px: isMobile ? 2 : 15, my: 4 }}>
        {displayedImages.map((photo, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 0,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover .overlay": { opacity: 1, transform: "translateY(0)" },
                "&:hover .zoom-icon": { opacity: 1 },
              }}
              onClick={() => handleOpenImage(index)}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height={isMobile ? "150" : "250"}
                  image={photo.imagePath}
                  sx={{ transition: "transform 0.3s ease" }}
                />

                {/* Black Overlay - Slides Up */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    opacity: 0,
                    transform: "translateY(-100%)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                />

                {/* Zoom Icon */}
                <ZoomIn
                  className="zoom-icon"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.8)",
                    color: "white",
                    fontSize: isMobile ? 30 : 50,
                    opacity: 0,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          size={isMobile ? "small" : "medium"}
        />
      </Box>

      {/* Full Image Slider Modal */}
      <Dialog open={currentIndex !== null} onClose={handleClose} maxWidth="md">
        <Box sx={{ position: "relative" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          >
            <Close />
          </IconButton>

          {/* Previous Button */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              color: "white",
              background: "rgba(0,0,0,0.5)",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Full Image */}
          {currentIndex !== null && (
            <CardMedia
              component="img"
              image={displayedImages[currentIndex].imagePath}
              alt="Full Size"
              sx={{
                width: isMobile ? "100%" : "600px",
                height: isMobile ? "auto" : "550px",
                objectFit: "contain",
              }}
            />
          )}

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              color: "white",
              background: "rgba(0,0,0,0.5)",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
}

export default Gallery;
