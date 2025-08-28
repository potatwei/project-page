import { Box, Container, Typography, Grid, Card, CardContent, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { CameraAlt, Code, ThreeDRotation, Memory, Speed, Storage, Visibility, Build, BuildCircle, FourKRounded, FourGMobiledata, FourMp, FourKOutlined } from '@mui/icons-material';

const Details = () => {
  const technicalSections = [
    {
      title: 'Capture System',
      icon: <CameraAlt sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: 'Professional multi-camera setup for high-fidelity data acquisition',
      details: [
        'Hardware Configuration: 26 synchronized cameras at 1280×800 resolution',
        'Capture Rate: 30 FPS with hardware-level synchronization',
        'Lighting Setup: Professional LED array with controlled illumination',
        'Coverage: 360-degree capture volume with optimal viewpoint distribution',
        'Data Format: RAW image sequences with metadata timestamps'
      ],
    },
    {
      title: 'Data Preprocessing',
      icon: <Code sx={{ fontSize: 40, color: '#388e3c' }} />,
      description: 'Advanced pipeline for data cleaning, calibration, and preparation',
      details: [
        'Background Subtraction: Automated foreground mask generation',
        'Quality Control: Automated detection and filtering of corrupted frames',
        'Calibration: Precise camera intrinsic and extrinsic parameter estimation in COLMAP format',
        'Dense Point Cloud Generation: 3D point cloud generation from multi-view images with OpenMVS',
      ],
    },
    {
      title: '4D Gaussian Splatting',
      icon: <FourKOutlined sx={{ fontSize: 40, color: '#f57c00' }} />,
      description: 'Compact scene representation with real-time rendering capability',
      details: [
        'Training Pipeline: Multi-view consistency optimization with differentiable rendering',
        'Deformation Network: Deformation network to model the dynamic scene',
        'Batch Training: Batch size of 30 frames to improve training stability',
        
      ],

    },
    {
      title: '3DGS Extraction',
      icon: <ThreeDRotation sx={{ fontSize: 40, color: '#d32f2f' }} />,
      description: 'High-quality 3DGS extraction from 4DGS for real-time rendering',
      details: [
        'Gaussian Primitives: Adaptive density control with position, scale, and rotation',
        'Extraction: 3DGS extraction from 4DGS',
        'Export: Perframe 3DGS for traditional 3DGS pipeline',
        'Rendering: Real-time rendering with SuperSplat',
      ],
    }
  ];

  const workflowSteps = [
    { step: 1, title: 'Multi-Camera Capture', description: 'Synchronized recording from 60 cameras' },
    { step: 2, title: 'Data Preprocessing', description: 'Calibration, filtering, and annotation' },
    { step: 3, title: '4DGS Training', description: 'Dynamic scene representation learning' },
    { step: 4, title: '3DGS Extraction', description: 'Static scene representation extraction' }
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
              background: 'linear-gradient(90deg, #ff9800, #ffe066)',
              borderRadius: '2px',
            },
          }}
        >
          Technical Details
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
          Our comprehensive technical pipeline combines cutting-edge hardware with advanced algorithms 
          to deliver unprecedented quality in human-centric neural rendering and mesh generation.
        </Typography>

        {/* Workflow Overview */}
        <Paper elevation={3} sx={{ py: 4, px: 8, mb: 6, bgcolor: '#f8f9fa' }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Processing Workflow
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 1, sm: 2, md: 4 },
            px: { xs: 0, sm: 1, md: 2 }
          }}>
            {workflowSteps.map((item, index) => (
              <Box key={index} sx={{ 
                flex: 1,
                textAlign: 'center',
                minWidth: 0
              }}>
                <Box
                  sx={{
                    width: { xs: 35, sm: 50, md: 60 },
                    height: { xs: 35, sm: 50, md: 60 },
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: { xs: 0.5, sm: 1, md: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1.25rem', md: '1.5rem' },
                    fontWeight: 'bold'
                  }}
                >
                  {item.step}
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem' },
                    lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                    mb: { xs: 0.5, sm: 1, md: 1 },
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: { xs: 1.2, sm: 1.3, md: 1.5 },
                    display: { xs: 'none', sm: 'block' },
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
                          ))}
            </Box>
        </Paper>

        {/* Technical Sections */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
          {technicalSections.map((section, index) => (
            <Box key={index} sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 8px)' },
              minWidth: { sm: '300px' },
              maxWidth: 'none'
            }}>
              <Card sx={{ 
                height: '100%',
                width: '100%',
                transition: 'none',
                '&:hover': {
                  transform: 'none',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {section.icon}
                    <Typography variant="h4" sx={{ ml: 2, fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {section.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                    Key Features
                  </Typography>
                  <List dense>
                    {section.details.map((detail, idx) => (
                      <ListItem key={idx} sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 20 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={detail}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>


                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>


      </Container>
    </Box>
  );
};

export default Details; 