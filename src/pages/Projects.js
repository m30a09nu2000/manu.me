import {
  Box,
  Card,
  CardMedia,
  Stack,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import React from "react";
import "animate.css";
import weather from '../assets/images/weather.webp'
import tesuto from '../assets/images/tesuto.png'
import bank from '../assets/images/bank.webp'

const Projects = () => {
  const projectDetails = [
    {
      name: "Tesuto",
      description: "An Exam Quiz app to learn Japanese language",
      image:tesuto,
    },
    {
      name: "Bank Application",
      description: "A mini bank application",
      image:bank,
      link: "https://github.com/m30a09nu2000/Bank-App",
    },
    {
      name: "Weather App",
      description: "Weather description",
      image:weather,
      link:process.env.REACT_APP_WEATHER_URL
    },
  ];
  return (
    <Box
      className="animate__animated animate__fadeInUpBig"
      sx={{
        height: {
          xs: "auto",
          md: "90.6vh",
          lg: "92.2vh",
        },

        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        width: {
          xs: "auto",
        },
      }}
    >
      <Stack
        sx={{
          color: "white",
          marginTop: "100px",
          flexWrap: "wrap",
          ml: "40px",
          mt: {
            xs: "30px",
          },
          mb: {
            xs: "30px",
          },
        }}
        direction={{
          xs: "column",
          sm: "row",
          lg: "row",
          xl: "row",
          md: "row",
        }}
        gap={4}
      >
        {projectDetails.map((project) => {
          return (
            <Card
            key={project.name}
              sx={{
                width: {
                  xs: "150px",
                  lg: "250px",
                  sm: "150px",
                  md: "150px",
                },
                height: {
                  xs: "150px",
                  lg: "200px",
                  md: "150px",
                  sm: "150px",
                },
                cursor: "pointer",
                "&:hover": {
                  filter: "drop-shadow(0 0 0.75rem #7FFF00)",
                },
              }}
            >
              <a href={project.link} style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image={project.image}
                  alt="Example image"
                  sx={{
                    objectFit: "cover",
                    height: { xs: "60px", md: "70px", lg: "100px" },
                    mb: "10px",
                  }}
                />
                <Tooltip title="Click to see more">
                  <CardContent sx={{ pt: 0 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: {
                          xs: "14px",
                          lg: "20px",
                        },
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Tooltip>
              </a>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
