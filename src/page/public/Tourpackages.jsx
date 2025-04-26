import React from "react";
import { 
  Box, Typography, Grid, Card, CardMedia, CardContent 
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LuggageIcon from "@mui/icons-material/Luggage";
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png";
import TourPackData from "../../Data/TourPackData";
import { useNavigate } from "react-router-dom";

function TourPackages() {
  const navigate = useNavigate();

  const HandleClickPage = (id) => {
    navigate(`/tourpackages/${id}`);
}
  return (
    <>
       {/* Background Section */}
            <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "400px",
            height: { xs: "80vh", sm: "6vh", md: "50vh", lg: "60vh" },
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
              fontSize: { xs: "2 rem",  md: "2.5rem", lg: "3rem" },
            }}
          >
            Tours Package
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

      {/* Section Title */}
      <Box sx={{ textAlign: "center", color: "#032d4a", my: 4 }}>
        <Typography variant="h4" fontWeight="bold">TOUR PACKAGES</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}>
          <MoreHorizIcon />
          <LuggageIcon />
          <MoreHorizIcon />
        </Box>
      </Box>

      {/* Tour Packages Grid */}
      <Grid container spacing={2} sx={{ px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 2 }}>
        {TourPackData.map((tour, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                borderRadius: "0",
                height: "95%",
                border: "5px solid white",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => { 
                HandleClickPage(); 
                navigate(`/tourpackages/${tour.id}`);
              }}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                {/* Image */}
                <CardMedia
                  component="img"
                  height="250"
                  image={tour.imagePath}
                  alt={tour.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#101f46"
                    sx={{
                      textAlign: "center",
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "#f56960" },
                    }}
                  >
                    {tour.title}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TourPackages;
 





