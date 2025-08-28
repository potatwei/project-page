import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import rotatingGif from '../assets/rotating.gif';

const Benchmark = () => {
  const benchmarks = [
    {
      title: 'Novel View Synthesis',
      description: 'Evaluation of rendering quality from unseen viewpoints',
      image: rotatingGif,
    },
    {
      title: 'Novel Pose Synthesis',
      description: 'Assessment of pose transfer and animation capabilities',
      image: rotatingGif,
    },
    {
      title: 'Novel Identity Synthesis',
      description: 'Testing identity transfer and personalization features',
      image: rotatingGif,
    },
    {
      title: 'Special Effects',
      description: 'Evaluation of costume and makeup transfer capabilities',
      image: rotatingGif,
    },
  ];

  return (
    <Box id="benchmark" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
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
              background: 'linear-gradient(90deg, #43ea6d, #c6ff00)', // Green to Lime
              borderRadius: '2px',
            },
          }}
        >
          Benchmark
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Explore our comprehensive benchmark results across various rendering tasks.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
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