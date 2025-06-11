import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const GradientBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.gradient,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/path/to/your/background-pattern.png")',
    opacity: 0.05,
    zIndex: 1,
  },
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.accent.teal}20 0%, ${theme.palette.accent.mint}20 100%)`,
  filter: 'blur(40px)',
  animation: `${float} 6s ease-in-out infinite`,
  zIndex: 0,
}));

const Home = () => {
  const theme = useTheme();

  return (
    <Box id="home">
      <GradientBox>
        <FloatingElement sx={{ top: '10%', left: '10%' }} />
        <FloatingElement sx={{ bottom: '10%', right: '10%', animationDelay: '-3s' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ 
            textAlign: 'center', 
            color: '#fff',
            py: { xs: 8, md: 12 }
          }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 800,
                mb: 3,
                background: `linear-gradient(135deg, #fff 0%, ${theme.palette.secondary.light} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                letterSpacing: '-0.02em',
              }}
            >
              DNA-Rendering
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 500,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.4,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              [Placeholder] A revolutionary approach to 3D rendering using DNA-based algorithms
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                  },
                  px: 4,
                  py: 1.5,
                  minWidth: '160px',
                }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  px: 4,
                  py: 1.5,
                  minWidth: '160px',
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Container>
      </GradientBox>

      {/* Highlight Data Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
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
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.accent.blue})`,
              borderRadius: '2px',
            },
          }}
        >
          Highlight Data
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="center"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            color: theme.palette.text.secondary,
          }}
        >
          [PLACEHOLDER] This is a placeholder description. Replace with actual dataset information about the number of actors, types of performances, and interaction objects.
        </Typography>
        <Box
          component="img"
          src="https://via.placeholder.com/1200x600"
          alt="[PLACEHOLDER] Dataset Preview Image"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 4,
            boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default Home; 