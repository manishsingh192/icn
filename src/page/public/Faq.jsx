import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import backimg from "../../assets/images/tours.jpg"; 
import brushEffect from "../../assets/images/blob.png"; 

const Faq = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const faqs = [
    {
      id: 1,
      question: "What's the Best Time to Visit Sikkim Darjeeling?",
      answer:
        "Best Time to Visit Sikkim is October to December and March to June.",
    },
    {
      id: 2,
      question: "When can we see snowfall in Sikkim?",
      answer:
        "In the month of December to March you can see snowfall in North East Region.",
    },
    {
      id: 3,
      question: "Price for 2 adults for Sikkim Gangtok Darjeeling",
      answer:
        "Starting price per person for Sikkim tour package 04 Nights 05 Days @14,500 INR.",
    },
    {
      id: 4,
      question: "Sikkim personalised package",
      answer:
        "Yes Kindly contact us at +91-8130883907 or Email at sales@iconictravel.in.",
    },
    {
      id: 5,
      question: " Is Shimla Manali Best for Honeymoon",
      answer: "Yes its Very safe and Best Destination for Honeymoon Couples.",
    },
    {
      id: 6,
      question:
        "Twin sharing basis per head & schedule date to start ex Guwahati",
      answer:
        "Starting cost for 6 days per person 17,500 INR on Double Sharing.",
    },
    {
      id: 7,
      question:
        "Wanted to know about Gujarath tour we are 7 ladies and 3 children",
      answer:
        "Kindly share your Query on mail with all Details, No of Persons, Date of Travel, Email Id, Mobile No and Destination at sales@iconictravel.in for more help Kindly call at +91-8130883907.",
    },
    {
      id: 8,
      question: "Do you provide a discount ?",
      answer:
        "Yes, we provide a discount. Min 5% on All Tour Packages and Max 10% and Tnc apply.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nQuestion: ${question}`);
    setName("");
    setQuestion("");
  };

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
          Faq's
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
          textAlign: "center",
        }}
      >
        <Typography fontWeight="bold" variant="h4" color="#032d4a">
          FAQ'S
        </Typography>
        <Typography variant="body" color="#000">
          If you have any doubt, so you can submit your question we will
          definitely reply answer.
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box component="form" sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField label="Enter your Name" variant="outlined" />
          <TextField
            label="Enter your Question..."
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f56960",
              fontWeight: "bold",
              px: 3,
              "&:hover": { backgroundColor: "blue" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
      <Box sx={{ px: 8, pb:5 }}>
        <Grid container spacing={2}>
          {faqs.map((faq) => (
            <Grid item xs={12} sm={6} key={faq.id}>
              <Paper sx={{ p: 2, backgroundColor: "#FFE1AB" }}>
                <Typography fontWeight="bold" variant="body1">
                  {faq.id}. {faq.question}
                </Typography>
                <Typography variant="body2">{faq.answer}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Faq;
