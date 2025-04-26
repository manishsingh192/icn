import React, { useState } from "react";
import backimg from "../../assets/images/tours.jpg";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
} from "@mui/material";
import brushEffect from "../../assets/images/blob.png";
import BlogData from "../../Data/BlogData";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 6;

function Blogs() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BlogData.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedBlogs = BlogData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

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
            Blogs
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

      {/* Blog Cards */}
      <Grid
        container
        spacing={3}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 15 }, py: 5 }}
      >
        {displayedBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card
              sx={{
                borderRadius: "0",
                height: "100%",
                border: "10px solid white",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.02)" },
              }}
              onClick={() => navigate(`/singleblog/${blog.id}`, { state: { blog } })}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .overlay-content": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="250"
                  image={blog.imagePath}
                  alt={blog.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />

                {/* Overlay with Description */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    padding: "15px",
                    transform: "translateY(100%)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="overlay-content"
                >
                  <Typography variant="h6" fontWeight="bold" >
                    {blog.title}
                  </Typography>
                  {/* <Typography variant="body2">{blog.description}</Typography> */}
                </Box>
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#101f46"
                  sx={{
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#f56960", cursor: "pointer" },
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  {blog.date}
                </Typography>
              </CardContent>
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
          
        />
      </Box>
    </>
  );
}

export default Blogs;
