import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Details = () => {
  const details = [
    {
      title: 'Dataset Statistics',
      description: '500 actors, 527 clothing sets, 269 action types',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Capture System',
      description: '60 synchronized cameras at 4096 × 3000 resolution',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Annotations',
      description: '2D/3D keypoints, masks, and SMPL-X models',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Box id="details" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Technical Details
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Learn about the technical specifications and capabilities of our dataset.
        </Typography>

        <Grid container spacing={4}>
          {details.map((detail, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <Box
                  component="img"
                  src={detail.image}
                  alt={detail.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {detail.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {detail.description}
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

export default Details; 