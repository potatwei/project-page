import { Box, Container, Typography } from '@mui/material';
import SplatViewer from '../components/SplatViewer';

const Demo = () => {
  return (
    <Box id="demo" sx={{ py: 8, bgcolor: '#ffffff' }}>
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
              background: 'linear-gradient(90deg, #43ea6d, #c6ff00)',
              borderRadius: '2px',
            },
          }}
        >
          Live Demo
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          Interact with our 3D Gaussian Splatting technology. Load custom .splatv files 
          or explore the default scene with full camera controls.
        </Typography>

        <SplatViewer height={700} />

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            How to Use
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Mouse: Orbit around the scene<br/>
            • Scroll: Zoom in/out<br/>
            • Drag & Drop: Load your own .splatv files<br/>
            • Upload button: Select files from your computer
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Demo;