import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const CoreFeatures = () => {
  const features = [
    {
      title: 'Neural Implicit Fields',
      description: 'Advanced neural representation for high-fidelity human rendering',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Diverse Performances',
      description: 'Wide range of actions and interactions captured in high quality',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Special Effects',
      description: 'Support for various costumes, makeup, and interaction objects',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'High Resolution',
      description: 'Ultra-high resolution capture for detailed rendering',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Box id="core-features" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Core Features
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Our core features enable high-quality human-centric rendering with unprecedented detail and realism.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/800x600"
                alt="[PLACEHOLDER] Feature 1"
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  [PLACEHOLDER] Feature 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  [PLACEHOLDER] This is a placeholder description for the first core feature. Replace with actual feature description.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/800x600"
                alt="[PLACEHOLDER] Feature 2"
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  [PLACEHOLDER] Feature 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  [PLACEHOLDER] This is a placeholder description for the second core feature. Replace with actual feature description.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/800x600"
                alt="[PLACEHOLDER] Feature 3"
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  [PLACEHOLDER] Feature 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  [PLACEHOLDER] This is a placeholder description for the third core feature. Replace with actual feature description.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreFeatures; 