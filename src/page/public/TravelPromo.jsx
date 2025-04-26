import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import promo from "../../assets/images/promo.jpg";

const TravelPromo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ backgroundColor: "#0076A3", p: 4, color: "white" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={promo}
              alt="Travel"
              sx={{ width: "100%", maxWidth: 400 }}
            />

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: 80,
                color: "white",
                cursor: "pointer",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
              }}
            >
              <PlayCircleIcon sx={{ fontSize: 80, color: "white" }} />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              Callback for More
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              Go Travel. Discover. Remember Us!!
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Iconic Travel offers the best and cheapest tour packages to our
              reliable clients, occasions, and encounters to assist individuals
              in making a propensity for parting from daily practice.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 3, textAlign: "center" }}>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight="bold">
                  10+
                </Typography>
                <Typography>Experience In Industry</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight="bold">
                  250K+
                </Typography>
                <Typography>Satisfied Customers</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight="bold">
                  10+
                </Typography>
                <Typography>Qualified Staff</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" fontWeight="bold">
                  250+
                </Typography>
                <Typography>Worldwide Located</Typography>
              </Grid>
            </Grid>

            <Card
              sx={{
                mt: 2,
                
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                borderRadius: "0px",
                height:"100px"
              }}
            >
              <CardContent>
                <Typography variant="h6">Have any Doubts? Call Us</Typography>
                <Button
                  startIcon={<PhoneIcon />}
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#D32F2F",
                  }}
                >
                  +91-8130883907
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 0.5,
            width: { xs: 300, sm: 500, md: 800 },
            borderRadius: 0
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              color: "white"
              
            }}
          >
            ✖
          </IconButton>

          <Box sx={{ position: "relative", pt: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/IUN664s7N-c"
              title="Travel Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TravelPromo;
