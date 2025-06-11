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
    <Box id="details" sx={{ py: 8, bgcolor: '#fff' }}>
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
              background: 'linear-gradient(90deg, #ff9800, #ffe066)', // Orange to Yellow
              borderRadius: '2px',
            },
          }}
        >
          Technical Details
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Learn about the technical specifications and capabilities of our dataset.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/800x600"
              alt="[PLACEHOLDER] Technical Details Image"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              [PLACEHOLDER] Technical Details
            </Typography>
            <Typography variant="body1" paragraph>
              [PLACEHOLDER] This is a placeholder for technical specifications and implementation details. Replace with actual technical information about the project.
            </Typography>
            <Typography variant="body1" paragraph>
              [PLACEHOLDER] This is a placeholder for additional technical details, including system requirements, dependencies, and implementation notes.
            </Typography>
            <Typography variant="body1">
              [PLACEHOLDER] This is a placeholder for performance metrics, benchmarks, and other technical considerations.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" gutterBottom>
              [PLACEHOLDER] Implementation
            </Typography>
            <Typography variant="body1" paragraph>
              [PLACEHOLDER] This is a placeholder for implementation details and methodology. Replace with actual implementation information.
            </Typography>
            <Typography variant="body1">
              [PLACEHOLDER] This is a placeholder for additional implementation notes, including development process and technical decisions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/800x600"
              alt="[PLACEHOLDER] Implementation Image"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>

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