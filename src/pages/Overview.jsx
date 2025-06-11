import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Overview = () => {
  const features = [
    {
      title: 'Large-scale Dataset',
      description: '500 actors with diverse performances and everyday actions',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'High-fidelity Rendering',
      description: 'Neural implicit fields for photorealistic human rendering',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Special Effects',
      description: 'Support for various costumes, makeup, and interaction objects',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Box id="overview" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Overview
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] DNA-Rendering is a comprehensive dataset and framework for high-fidelity human-centric rendering, featuring a diverse collection of actors and performances.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Overview; 