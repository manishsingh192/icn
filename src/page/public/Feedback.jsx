import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import backimg from "../../assets/images/tours.jpg";
import brushEffect from "../../assets/images/blob.png";
const Feedback = () => {
  return (
    <>
      {/* Background Section */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "800px", sm: "600px", md: "600px", lg: "400px" },
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            opacity: 0.8, // Corrected from string to number
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2 }}
          >
            Feedback
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
            height: { xs: "150px" },
          }}
        />
      </Box>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <Typography variant="subtitle2" color="#f56960" fontWeight="bold">
          GET IN TOUCH
        </Typography>
        <Divider sx={{ width: 40, borderTop: "2px solid #f56960", mb: 1 }} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#032d4a" }}
        >
          FEEDBACK FORM
        </Typography>
        <form>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField fullWidth label="Your Name" name="name" required />
            <TextField
              fullWidth
              label="Your Destination or Tour"
              name="destination"
              required
            />
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your Feedback or Review"
            name="feedback"
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#f56960", color: "white", px: 4 }}
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Feedback;
