import React, { useState } from "react";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "@fontsource/lora";
import t1 from "../../assets/images/G6.jpg";
import t2 from "../../assets/images/G8.jpg";
import t3 from "../../assets/images/G13.jpg";
import t4 from "../../assets/images/G9.jpg";

const testimonials = [
  {
    id: 1,
    name: "Raaj Sharma",
    image: t1,
    quote:
      "Dear Renu Ji, really we had the best experience with Gujrat and Deu. In every day Mr Rahul took our experience in hotel, car etc, etc and we also gave him thanks for his support on behalf of your company. Almost all the hotels are good.",
    place: "Lucknow",
  },
  {
    id: 2,
    name: "Prakash Singh",
    image: t2,
    quote:
      "Envisioned multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
    place: "Lucknow",
  },
  {
    id: 3,
    name: "John Doe",
    image: t3,
    quote:
      "Multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
    place: "Delhi",
  },
  {
    id: 4,
    name: "Yusuf Khan",
    image: t4,
    quote:
      "Holistically pontificate installed base portals after maintainable products, whereas parallel platforms holistically predominate.",
    place: "Lucknow",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        color: "#000",
        minHeight: "5vh",
        bgcolor:"#cffafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        py: { xs: 3, md: 5 }, // Responsive padding
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center", py: 3 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          TESTIMONIALS
        </Typography>
      </Box>

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            py: 3,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ border: "1px solid", borderRadius: "50%" }}
          >
            <ChevronLeft />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              textAlign: "center",
              px: { xs: 2, md: 0 }, // Responsive padding
            }}
          >
            <Avatar
              src={testimonials[currentIndex].image}
              sx={{
                width: { xs: 80, md: 120 },
                height: { xs: 80, md: 120 },
                border: "4px solid white",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                maxWidth: "800px",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                fontFamily: '"Lora", serif',
              }}
            >
              {testimonials[currentIndex].quote}
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0791be" }}
            >
              {testimonials[currentIndex].name}
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: -1 }}>
              {testimonials[currentIndex].place}
            </Typography>
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{ border: "1px solid", borderRadius: "50%" }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonial;
