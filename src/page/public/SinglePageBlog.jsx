import React from "react";
import { Box, Typography, CardMedia, Grid, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import backimg from "../../assets/images/banner.jpg";
import BlogData from "../../Data/BlogData";

const SinglePageBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">No Blog Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 5 }}>
      {/* Background Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px" },
          backgroundImage: `url(${backimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0.9",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="white">
          {blog.title}
        </Typography>
      </Box>

      {/* Blog Content in Grid */}
      <Grid container spacing={3} sx={{ mt: 4, px: { xs: 2, md: 10 } }}>
        {/* Left Side - Blog Content (8 Columns) */}
        <Grid item xs={12} md={8}>
          <CardMedia
            component="img"
            image={blog.imagePath}
            alt={blog.title}
            sx={{ width: "100%", maxHeight: "500px" }}
          />
          <Typography variant="h4" fontWeight="bold" color="#000" mt={2}>
            {blog.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            {blog.date}
          </Typography>
          <Typography variant="body1" color="#000" mt={2}>
            {blog.description}
          </Typography>
        </Grid>

        {/* Right Side - Recent Posts (4 Columns) */}
        <Grid item xs={12} md={4}>
          <Typography
            color="#0791be"
            variant="h6"
            fontWeight="bold"
            border={2}
            textAlign="center"
            ml={2}
          >
            RECENT POST
          </Typography>

          <Box sx={{ padding: 2 }}>
            <Stack spacing={2}>
              {BlogData.slice(0, 8).map((recentBlog, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 1,
                    
                  }}
                 
                >
                  {/* Blog Image */}
                  <CardMedia
                    component="img"
                    image={recentBlog.imagePath}
                    alt={recentBlog.title}
                    sx={{ width: 80, height: 50,  }}
                   
                  />

                  {/* Blog Details */}
                  <Box >

                    <Typography variant="body1" color="#000"
                     onClick={() =>
                      navigate(`/singleblog/${recentBlog.id}`, {
                        state: { blog: recentBlog },
                      })
                    }sx={{"&:hover": { color: "#0791be", cursor: "pointer"  }}}>
                      {recentBlog.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {recentBlog.date} | Admin
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SinglePageBlog;
