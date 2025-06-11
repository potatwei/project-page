import { Box, Container, Typography, Button, Grid } from '@mui/material';

const Home = () => {
  return (
    <Box id="home">
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: '64px', // Add padding top to account for fixed navbar
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                DNA-Rendering
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom>
                A Diverse Neural Actor Repository for High-Fidelity Human-centric Rendering
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                [Placeholder for abstract text] We present DNA-Rendering, a large-scale, high-fidelity repository of neural actor rendering represented by neural implicit fields of human actors.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
                onClick={() => {
                  const element = document.getElementById('overview');
                  if (element) {
                    const navbarHeight = 64;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
              >
                Pause
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/600x400"
                alt="Hero Image"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlight Data Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Highlight Data
        </Typography>
        <Typography variant="body1" paragraph align="center">
          [Placeholder] Our dataset contains 500 actors and covers a wide range of special performances and everyday actions, including a large variety of costumes, makeup, and interaction object types.
        </Typography>
        <Box
          component="img"
          src="https://via.placeholder.com/1200x600"
          alt="Highlight Data"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            mt: 4,
          }}
        />
      </Container>
    </Box>
  );
};

export default Home; 