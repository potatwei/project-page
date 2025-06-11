import { Box, Container, Typography, Grid, Card, CardContent, Button, Link } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';

const Research = () => {
  const publications = [
    {
      title: 'DNA-Rendering: A Diverse Neural Actor Repository for High-Fidelity Human-centric Rendering',
      authors: 'Author 1, Author 2, Author 3',
      venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
      year: '2024',
      abstract: '[Placeholder] This paper presents DNA-Rendering, a large-scale, high-fidelity repository of neural actor rendering represented by neural implicit fields of human actors.',
      pdfLink: '#',
      codeLink: '#',
    },
    {
      title: 'High-Fidelity Neural Human Rendering with Multi-View Consistency',
      authors: 'Author 1, Author 2, Author 3',
      venue: 'International Conference on Computer Vision (ICCV)',
      year: '2023',
      abstract: '[Placeholder] We propose a novel approach for high-fidelity neural human rendering that ensures multi-view consistency across different viewpoints.',
      pdfLink: '#',
      codeLink: '#',
    },
    {
      title: 'Neural Implicit Fields for Human-centric Rendering',
      authors: 'Author 1, Author 2, Author 3',
      venue: 'European Conference on Computer Vision (ECCV)',
      year: '2022',
      abstract: '[Placeholder] This work introduces a new framework for human-centric rendering using neural implicit fields, achieving unprecedented levels of detail and realism.',
      pdfLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <Box id="research" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
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
              background: 'linear-gradient(90deg, #ff1744, #f06292)', // Red to Pink
              borderRadius: '2px',
            },
          }}
        >
          Research
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Explore our research papers and publications on high-fidelity human rendering.
        </Typography>

        <Grid container spacing={4}>
          {publications.map((pub, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {pub.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {pub.authors}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pub.venue}, {pub.year}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {pub.abstract}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<PictureAsPdfIcon />}
                      component={Link}
                      href={pub.pdfLink}
                      sx={{ mr: 2 }}
                    >
                      PDF
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<CodeIcon />}
                      component={Link}
                      href={pub.codeLink}
                    >
                      Code
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Research; 