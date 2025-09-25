import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BlinkingBar from './BlinkingBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

export default function Hello() {
  return (
    <Container maxWidth="lg" >
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Grid
        container
        spacing={{ xs: 4, md: 30 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* RIGHT COLUMN ON DESKTOP */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: 2 }}  
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              width: { xs: 220, sm: 300, md: 360 },
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Box
              component="img"
              src="https://i.imgur.com/66bJTJp.png"
              alt="Profile"
              sx={{
                width: '82%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Box>
        </Grid>

        {/* LEFT COLUMN ON DESKTOP, SECOND ON MOBILE: TEXT and BUTTONS */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}  //photo order mobile text 
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              textAlign: { xs: 'center', md: 'left' }, // center on mobile
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', sm: '3rem' },
                lineHeight: 1.15,
                color: 'white',
              }}
            >
              Hello, I&apos;m
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3rem' },
                fontWeight: 800,
                color: 'white',
                display: 'inline-flex',
                alignItems: 'baseline',
              }}
            >
              Marisela <BlinkingBar />
            </Typography>

            <Typography
              sx={{ maxWidth: 540, color: 'white', fontSize: { xs: 16, sm: 18 } }}
            >
              Full-stack developer student. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis perspiciatis voluptas atque ea corrupti dicta qui distinctio deleniti quisquam, harum assumenda officiis, dolorem eligendi ut maxime possimus ullam aperiam?
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
           
              <IconButton component="a" href="https://github.com/alesiram" aria-label="GitHub" target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ fontSize: 48, color: 'white' }} />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com/in/mariselavasquez" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ fontSize: 48, color: 'white' }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>

    </Box>
    </Container>
  );
}
