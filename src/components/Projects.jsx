// Project.jsx 
// Renders all portfolio projects in a responsive grid using MUI cards. 

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import projectData from './ProjectData.js';

export default function Projects(){
  
    return (

      <Box sx={{ py: 8 }}>
      <Typography id="sectionHeader" variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        Projects
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>

          {/* Looping through all projects and creating a card for each one */}
          {projectData.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <Card
              sx={(theme) => ({
                maxWidth: 365,
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
                <CardContent >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover"
                      }}
                  
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardContent>
                <Box sx={{ p: 1, mt: 'auto' }}>
                  <Button size="small" href={project.link} target="_blank">
                    See Project
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
      
    )
}