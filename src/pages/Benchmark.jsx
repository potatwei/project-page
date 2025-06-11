import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Benchmark = () => {
  const benchmarks = [
    {
      title: 'Novel View Synthesis',
      description: 'Evaluation of rendering quality from unseen viewpoints',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel Pose Synthesis',
      description: 'Assessment of pose transfer and animation capabilities',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel Identity Synthesis',
      description: 'Testing identity transfer and personalization features',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Special Effects',
      description: 'Evaluation of costume and makeup transfer capabilities',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Box id="benchmark" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Benchmark Results
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Explore our comprehensive benchmark results across various rendering tasks.
        </Typography>

        <Grid container spacing={4}>
          {benchmarks.map((benchmark, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <Box
                  component="img"
                  src={benchmark.image}
                  alt={benchmark.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {benchmark.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {benchmark.description}
                  </Typography>
                  <Button variant="outlined" color="primary" size="small">
                    View Results
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benchmark; 