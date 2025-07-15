import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

const CoreFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { number: 60, label: 'Motions', color: 'secondary', suffix: '' },
    { number: 26, label: 'Views', color: 'success', suffix: '' },
    { number: 4000000, label: 'Frames', color: 'warning', suffix: '' },
    { number: 4096, label: 'Max Resolution', color: 'error', suffix: '' },
  ];

  // Format numbers for display
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const interval = duration / steps;

      stats.forEach((stat, index) => {
        let currentValue = 0;
        const increment = stat.number / steps;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.number) {
            currentValue = stat.number;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(currentValue);
            return newStats;
          });
        }, interval);
      });
    }
  }, [isVisible]);

  const features = [
    {
      title: 'Multi-Camera Dance Capture',
      description: 'Comprehensive dance dataset captured with 26 synchronized cameras featuring over 50 dance styles including chacha, basic, suzieq, attitude, promenade, and more. Each performance ranges from 10 seconds to 2 minutes.',
      image: 'https://picsum.photos/300/200?random=20',
    },
    {
      title: '3D Gaussian Splatting Training',
      description: 'Advanced 3DGS models trained for each frame, providing high-fidelity neural representations for real-time rendering and novel view synthesis of human dance performances.',
      image: 'https://picsum.photos/300/200?random=21',
    },
    {
      title: 'Diverse Dance Styles',
      description: 'Covers a wide range of dance genres and difficulty levels, from basic movements to complex choreography, with 527 clothing types and 422 action types for comprehensive research applications.',
      image: 'https://picsum.photos/300/200?random=22',
    },
    {
      title: 'High-Quality Annotations',
      description: 'Includes precise 2D/3D human keypoints, foreground masks, and SMPL-X models, specifically optimized for 3D human body scenarios and dance motion analysis.',
      image: 'https://picsum.photos/300/200?random=23',
    },
  ];

  return (
    <Box id="core-features" ref={sectionRef} sx={{ py: 8, bgcolor: '#f8f9fa' }}>
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
              background: 'linear-gradient(90deg, #00A3B4, #43ea6d)', // Teal to Green
              borderRadius: '2px',
            },
          }}
        >
          Core Features
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          Our comprehensive dance dataset provides unprecedented scale and quality for 3D human rendering research, featuring multi-camera capture and 3D Gaussian Splatting training for each frame.
        </Typography>

        {/* Statistics Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={7} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: 2, 
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(87, 6, 140, 0.05) 0%, rgba(0, 102, 177, 0.05) 100%)',
                }}>
                  <Typography variant="h3" component="div" color="primary" fontWeight="bold">
                    {formatNumber(animatedStats[index])}
                    {stat.suffix}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Main Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4, justifyContent: 'center' }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 12px)' },
              minWidth: { sm: '300px' },
              maxWidth: { sm: '500px' }
            }}>
              <Card sx={{ height: '100%', width: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
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
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreFeatures; 