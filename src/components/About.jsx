import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ py: 6 }}>
      <Typography id="sectionHeader" variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        About
      </Typography>
    <Typography sx={{ color: 'white', fontSize: { xs: 16, sm: 19 } }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam dolore dolorum, excepturi reiciendis accusantium, maiores id quaerat quas amet modi et eveniet explicabo dignissimos corporis corrupti quisquam quod ea tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa vero fugiat ipsum quaerat ducimus reiciendis tenetur perferendis quam incidunt earum expedita, assumenda soluta ab quasi fuga eaque voluptatum illum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam eveniet maiores quia quas dolore tempora, ab itaque optio dolor? Ipsum ex numquam itaque, incidunt eos delectus distinctio neque aperiam harum.
        </Typography>
    </Box>
    </Container>
  );
}
