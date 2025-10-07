import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { alpha } from '@mui/material/styles';

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const contactData = new FormData(event.target)

    contactData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(contactData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

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
            onSubmit={onSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ alignSelf: "center" }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
