// Project.jsx 
// Renders all portfolio projects in a responsive grid using MUI cards. 

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import projectData from './ProjectData.js';

export default function Projects(){
    return (
      <Box sx={{ py: 6 }}>
      <Typography id="sectionHeader" variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        Projects
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>

          {/* Looping through all projects and creating a card for each one */}
          {projectData.map((project) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardActionArea href={project.link} target="_blank">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
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