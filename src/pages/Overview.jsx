import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Overview = () => {
  const features = [
    {
      title: 'High Diversity',
      description: 'We collected comprehensive dance performances featuring 60 distinct motions across 50+ dance styles including chacha, basic, suzieq, attitude, promenade, and more. Our dataset encompasses 527 different clothing types and 422 action types, with performance durations ranging from 10 seconds to 2 minutes.',
    },
    {
      title: 'High Fidelity',
      description: 'We construct a professional multi-view capture system containing 26 synchronized cameras with maximum 4096 × 3000 resolution. Each frame is trained with 3D Gaussian Splatting (3DGS) models, providing high-fidelity neural representations for real-time rendering and novel view synthesis.',
    },
    {
      title: 'Rich Annotations',
      description: 'We provide off-the-shelf high-precision annotations including 2D/3D human body keypoints, foreground masks, and SMPL-X models. Our annotations are specifically optimized for 3D human body scenarios and dance motion analysis.',
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
          Abstract
        </Typography>
        
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="body1" paragraph align="justify" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
            We present <strong>DanceNet3D</strong>, a large-scale, high-fidelity repository of neural dance rendering represented by 3D Gaussian Splatting of human dance performers. Our dataset provides comprehensive dance performances with:
          </Typography>

          <Box sx={{ pl: 2 }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="body1" component="div" sx={{ mb: 1 }}>
                  <strong>{feature.title}:</strong> {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body1" paragraph align="justify" sx={{ mt: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
            This dataset serves as a comprehensive resource for researchers working on 3D human rendering, dance analysis, and neural implicit field generation, with particular focus on multi-view dance capture and 3D Gaussian Splatting applications.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Overview; 