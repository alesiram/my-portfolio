import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import BlinkingBar from './BlinkingBar';

export default function Hello() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        {/* GRID LAYOUT */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
            gridTemplateColumns: {
              xs: '1fr',          
              sm: '1fr 1fr',      
            },
            gridTemplateAreas: {
              xs: `"image"
                   "text"`,
              sm: `"text image"`,
            },
          }}
        >
          {/* TEXT */}
          <Box sx={{ gridArea: 'text' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                textAlign: { xs: 'center', sm: 'left' },
                alignItems: { xs: 'center', sm: 'flex-start' },
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
                sx={{
                  maxWidth: 540,
                  color: 'white',
                  fontSize: { xs: 16, sm: 20 },
                }}
              >
                Full-stack developer student. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Asperiores quis perspiciatis
                voluptas atque ea corrupti dicta qui distinctio deleniti
                quisquam, harum assumenda officiis, dolorem eligendi ut maxime
                possimus ullam aperiam?
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
              >
                <IconButton
                  component="a"
                  href="https://github.com/alesiram"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: 48, color: 'white' }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/mariselavasquez"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 48, color: 'white' }} />
                </IconButton>
              </Stack>
            </Box>
          </Box>

          {/* IMAGE */}
          <Box
            sx={{
              gridArea: 'image',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: 220, sm: 300, md: 360 },
                maxWidth: '100%',
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
                  width: '90%',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: 3,
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
