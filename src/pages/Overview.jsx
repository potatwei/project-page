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
    <Box id="overview" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #1976d2, #00e5ff)', // Blue to Cyan
              borderRadius: '2px',
            },
          }}
        >
          Overview
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [PLACEHOLDER] This is a comprehensive dataset for high-fidelity human-centric rendering, featuring a diverse collection of actors and performances.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/800x600"
              alt="[PLACEHOLDER] Overview Image"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              [PLACEHOLDER] This is a placeholder description for the overview section. Replace with actual content about the project overview, goals, and significance.
            </Typography>
            <Typography variant="body1">
              [PLACEHOLDER] This is a placeholder for additional information about the project's scope, methodology, and expected outcomes.
            </Typography>
          </Grid>
        </Grid>

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