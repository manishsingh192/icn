import React from 'react'
import brushEffect from "../../assets/images/blob.png";
import backimg from "../../assets/images/tours.jpg";
import {  Grid, Paper, Typography, Box, Container } from '@mui/material';
import Gpay from "../../assets/images/gpay-code.png"
import Phpay from "../../assets/images/phonepe-qrcode.jpg"

const bankDetails = [
    {
      bankName: "HDFC BANK",
      accountName: "ICONIC TRAVEL",
      accountNumber: "50200039675082",
      ifscCode: "HDFC0000563",
      address: "5, Sec -15C, Vasundhara Uttar Pradesh 201012",
    },
    {
      bankName: "INDUSIND BANK",
      accountName: "ICONIC TRAVEL",
      accountNumber: "259625080109",
      ifscCode: "INDB0001358",
      address: "Gaur City 1 Greater Noida Delhi NCR Uttar Pradesh 201309",
    },
  ];
  
  const qrCodes = [
    {
      title: "G-Pay QR Code",
      imgSrc: Gpay
    },
    {
      title: "PhonePe QR Code",
      imgSrc: Phpay
    },
  ];

const PayNow = () => {
  return (
    <>
      {/* Background Section */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "800px", sm: "600px", md: "600px", lg: "500px" },
            backgroundImage: `url(${backimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            opacity: "0.8",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2  }}
          >
            Pay Now
          </Typography>
        </Box>

        {/* Brush Effect */}
        <Box
          component="img"
          src={brushEffect}
          alt="Brush Effect"
          sx={{
            width: {sx:"100%", md:"100%", lg:"100%"},
            position: "absolute",
            bottom: 0,
            height:{xs:"150px"}
          }}
          
        />
      </Box> 
      
      <Container sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={5}>
        {bankDetails.map((bank, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: "#ffe4b5" }}>
              <Typography variant="h6" fontWeight="bold">
                {bank.bankName} DETAILS:-
              </Typography>
              <Typography>
                <b>Bank Name:</b> {bank.bankName}
              </Typography>
              <Typography>
                <b>Account Name:</b> {bank.accountName}
              </Typography>
              <Typography>
                <b>Account Number:</b> {bank.accountNumber}
              </Typography>
              <Typography>
                <b>IFSC Code:</b> {bank.ifscCode}
              </Typography>
              <Typography>
                <b>Address:</b> {bank.address}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {qrCodes.map((qr, index) => (
          <Grid item xs={12} sm={6} key={index} textAlign="center">
            <Typography variant="h6" color='#000' fontWeight='bold'>{qr.title}</Typography>
            <img src={qr.imgSrc} alt={qr.title} width={200} height={350} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}

export default PayNow
