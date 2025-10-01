import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function About() {
  return (

      <Box id="about-section" sx={{ py: 8 }}>
        <Typography
        id="sectionHeader"
        variant="h3"
        sx={{ fontWeight: 800, mb: 3, color: "white" }}
        >
          About
        </Typography>

        <Box
        sx={{
        maxWidth: '100%',
        width: '100%',
        mx: 'auto',
        backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent black
        backdropFilter: 'blur(2px)',
        borderRadius: 4,
        p: { xs: 3, sm: 5 }, // padding
        boxShadow: 3,

        }}
        >
          <Typography sx={{ color: "white", fontSize: { xs: 16, sm: 20 }, lineHeight: 1.7}}>
          I'm a Computer Science graduate and aspiring Web Developer. I enjoy learning and creating useful, impactful tools. Currently, I'm transitioning into the technology sector and building projects that showcase my skills in web development. You can learn more about me through my GitHub, LinkedIn, or by exploring the projects featured in this portfolio. If you'd like to connect, feel free to reach out through the contact section below.
          </Typography>
          </Box>
        </Box>
        

          );
        }
