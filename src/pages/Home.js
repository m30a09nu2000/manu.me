import { Box, Typography ,Tooltip } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";


import "animate.css";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: {
          xs: "100vh",
          md:'calc(100vh-20px)',
          lg:'88vh',
         

                },
        marginTop: {
          xs: "10px",
          lg: "40px",
        },
      }}
    >
      <Box
        sx={{
          height: {
            xs: "70%",
            lg: "80%",
          },
          width: { xs: "70%", lg: "60%" },
        }}
      >
        <Typography
          mt={2}
          p={2}
          variant="h5"
          className="animate__animated animate__bounce"
          sx={{
            fontSize: "50px",
            fontWeight: "bolder",
            fontFamily: "Stencil Std, fantasy",

            // filter: "drop-shadow(0 0 0.75rem #7FFF00)",
          }}
        >
          Manu
        </Typography>

        <Typography
          variant="body2"
          align="justify"
          lineHeight={1.6}
          pl={2}
          pr={2}
          sx={{
            fontSize: {
              lg: "20px",
              md: "18px",
              xs: "14px",
            },
          }}
        >
          Hey, I am Manu P S an Associate Engineer specializing in full-stack
          web development with a focus on Django{" "}
          <Tooltip title="Django">
            {" "}
            <TbBrandDjango
              style={{ verticalAlign: "middle", cursor: "pointer" }}
            />{" "}
          </Tooltip>
          and React{" "}
          <Tooltip title="react">
            {" "}
            <FaReact style={{ verticalAlign: "middle", cursor: "pointer" }} />
          </Tooltip>
          . With a solid foundation in backend development using Django and
          Django REST Framework, I excel in creating robust and scalable APIs to
          power modern web applications. On the frontend, I leverage React.js to
          build responsive and dynamic user interfaces that enhance the user
          experience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
