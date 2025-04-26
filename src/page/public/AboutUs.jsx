import React from 'react'
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png";
import { Box, Container, Typography } from '@mui/material';
const AboutUs = () => {
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
             About Us
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
       <Box
              sx={{
                textAlign: "center"
              }}
            >
              <Typography fontWeight="bold" variant="h4" color="#032d4a">
              ICONIC TRAVEL
              
              </Typography>
              <Container>
              <Typography variant="subtitle1" color="#000">
              Iconic Travel offers the best cheapest tour packages to our reliable clients, occasions, and encounters to assist individuals with making a propensity for parting from the daily practice. From extraordinary escapes to selective show series to VIP gatherings and suppers, individuals go to Iconic Travel to re-energize, reconnect and remind each other what makes a difference. Our attention on quality retreats, client support, and adaptability means individuals can get back to a most loved hotel, book a journey to investigate new nations, or go to a rare occasion with a similar degree of certainty and expectation. With admittance to a universe of amusement and exercises.
              </Typography>
              <Typography variant="subtitle1" color="#000">Iconic Travel enrollment guarantees that individuals are continually anticipating excursions. Our Flexible Holidays framework simplifies arranging your next get-away in light of the fact that making a splash doesn't mean worrying about yourself. Regardless of whether you're hoping to unwind in your beloved objective or investigate someplace new, as an Iconic Travel part, you can count us to convey a similar quality and solace, over and over. Furthermore, even as you excursion with the solaces of home, you'll have the option to partake in the elite shows, occasions, and encounters that you can't go anyplace else. about us, Iconic Travel is an online leading travel platform that provides multi-level travel support which gives the cheapest & reliable tour packages to our clients.</Typography>

              <Typography variant="subtitle1" color="#000">Iconic Travel gives a chance to explore the world. With our experience and information on locations, we are focused on making your excursion an incredible one, in addition to a decent one. Whatever your Holidays plans are, we intend to convey tailor-made, all-around arranged, and extraordinary occasions. From Holiday arranging and protection to visa and clinical help, we offer you complete inner serenity. Other than assisting you with arranging your vacation, Iconic Travel loves to share our movement stories from across the world. Get to find out about places you could venture out to and experience through the Iconic blogs. Our Flexible Holidays framework simplifies arranging your next excursion since making a splash doesn't mean worrying about yourself. Regardless of whether you're hoping to unwind in your beloved objective or investigate some new places. Thanks for being a part of this most exciting adventures journey with Iconic Travel.</Typography>
              </Container>
            </Box>
    </>
  )
}

export default AboutUs
