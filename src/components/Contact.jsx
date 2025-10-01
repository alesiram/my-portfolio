import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { alpha } from '@mui/material/styles';

export default function Contact() {
  return (
    <Box id="contact-section" sx={{ py: 8 }}>
      <Typography
        id="sectionHeader"
        variant="h3"
        sx={{ fontWeight: 800, mb: 3 }}
      >
        Contact Me
      </Typography>

      <Card
      sx={(theme) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
         
                
        // Theme-aware surface
        backgroundColor: alpha(theme.palette.background.paper, 0.95),
        border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,

      // Hover
        transition: 'transform .3s, box-shadow .3s, border-color .3s',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: 6,
        borderColor: alpha(theme.palette.primary.main, 0.35),
      },
      })}



  
      >
        <CardContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ alignSelf: "flex-start" }}
            >
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
