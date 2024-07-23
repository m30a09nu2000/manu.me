import React, { useEffect } from "react";
import { Box,  Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useStore } from "../store/PortfolioState";

const NavBar = () => {
  const { mode, setMode } = useStore();
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  const animateColor = keyframes`
    0% { color: red; }
    25% { color: orange; }
    50% { color: yellow; }
    75% { color: cyan; }
    100% { color: coral; }
  `;
  const hoverStyle = {
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    fontSize: "15px",
    fontWeight: "bold",
    color: "black",
    borderRadius: "5px",
    position: "relative",
    transition: "red 0.25s",
    background: "cyan",
  };

  return (
    <Box
      sx={{
        height: "60px",
        backgroundColor: "transparent",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow:  "coral 0px 0px 10px;",
       
      }}
    >
      <Box sx={{ m: "20px" }}>
        <Stack>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Stencil Std, fantasy",
                cursor: "pointer",
                animation: `${animateColor} 4s ease-in-out infinite`,
              }}
              variant="body"
            >
              MSP
            </Typography>
          </Link>
        </Stack>
      </Box>
      <Box
        sx={{
          m: "20px",
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Link
            to="/projects"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                "&:hover": hoverStyle,
              }}
              variant="body1"
            >
              <Tooltip title="Projects">Projects</Tooltip>
            </Typography>
          </Link>
          <Link
            to="/resume"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": hoverStyle,
              }}
            >
              <Tooltip title="Resume">
                <DescriptionTwoToneIcon />
              </Tooltip>
            </Typography>
          </Link>
          <a
            href={process.env.REACT_APP_GITHUB_URL}
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": hoverStyle,
              }}
            >
              <Tooltip title="GitHub">
                <GitHubIcon />
              </Tooltip>
            </Typography>
          </a>
          <a
            href={process.env.REACT_APP_LINKEDIN_URL}
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": hoverStyle,
              }}
            >
              <Tooltip title="LinkedIn">
                <LinkedInIcon />
              </Tooltip>
            </Typography>
          </a>

          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setMode(!mode)}
          >
            {mode ? <LightModeIcon /> : <DarkModeIcon />}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
