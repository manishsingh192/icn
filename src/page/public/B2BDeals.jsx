import React from 'react'
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import img from "../../assets/images/b2b.jpg"

const B2BDeals = () => {
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
            backgroundColor:"rgba(0,0,0,0.8)"
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
            B2B Deals
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
            height: { xs: "80px", sm: "80px", md: "100px", lg: "100px" },
            objectFit: "cover",
          }}
        />
      </Box>
       
      <Container sx={{ my: 5 }}>
      <Grid container spacing={4} alignItems="center">
        
        <Grid item xs={12} md={5}>
          <img
            src={img}
            alt="B2B"
            style={{ width: "100%"}}
          />
        </Grid>

        
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight="bold" color='#101f46' >
            B2B DEALS
          </Typography>
         
          <ul style={{ paddingLeft: "1rem" }}>
            {[
              "Business To Busi",
        
             
            ].map((item, index) => (
              <li key={index}>
                <Typography variant="body1" color='#383838'>{item}</Typography>
              </li>
            ))}
          </ul>

         

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2, px: 4, fontWeight: "bold"}}
          >
            BOOK NOW
          </Button>
        </Grid>
      </Grid>
    </Container>
     
    </>
  )
}

export default B2BDeals
