import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, Link, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { ArrowForward, Launch, PictureAsPdf, Code } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LandingNavbar from '../components/LandingNavbar';

// Styled components
const GradientBox = styled(Box)(({ theme }) => ({
  background: `
    linear-gradient(135deg, 
      rgba(45, 55, 72, 0.95) 0%, 
      rgba(87, 6, 140, 0.9) 40%, 
      rgba(0, 102, 177, 0.85) 100%
    ),
    radial-gradient(circle at 20% 80%, rgba(255, 184, 28, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 184, 28, 0.1) 0%, transparent 50%)
  `,
  minHeight: '60vh',
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
    background: `
      linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.03) 50%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(255, 255, 255, 0.03) 50%, transparent 55%)
    `,
    backgroundSize: '60px 60px',
    opacity: 0.5,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 30%)
    `,
    pointerEvents: 'none',
  },
}));

const SimpleCard = styled(Card)(({ theme }) => ({
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0px 8px 24px ${theme.palette.primary.main}15`,
  },
  transition: 'all 0.3s ease',
}));

const LandingPage = () => {
  const theme = useTheme();

  // Sample data - replace with actual data
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Principal Investigator",
      affiliation: "NYU Tandon School of Engineering",
      image: "https://picsum.photos/200/200?random=60"
    },
    {
      name: "Dr. John Doe",
      role: "Co-Principal Investigator",
      affiliation: "NYU Courant Institute",
      image: "https://picsum.photos/200/200?random=61"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Research Scientist",
      affiliation: "NYU Center for Data Science",
      image: "https://picsum.photos/200/200?random=62"
    },
    {
      name: "Dr. Mike Chen",
      role: "Senior Researcher",
      affiliation: "NYU Computer Science",
      image: "https://picsum.photos/200/200?random=63"
    },
  ];

  const publications = [
    {
      title: 'DNA-Rendering: A Diverse Neural Actor Repository for High-Fidelity Human-centric Rendering',
      authors: 'Smith J., Doe J., Johnson S., Chen M.',
      venue: 'ICCV 2024',
      year: '2024',
      abstract: 'This paper presents DNA-Rendering, a comprehensive repository of neural actor representations for high-fidelity human-centric rendering applications.',
      pdfLink: '#',
      codeLink: '#',
    },
    {
      title: 'Neural Implicit Fields for Human Performance Capture',
      authors: 'Doe J., Smith J., Johnson S.',
      venue: 'CVPR 2024',
      year: '2024',
      abstract: 'We introduce a novel approach for capturing human performance using neural implicit fields, achieving unprecedented quality and efficiency.',
      pdfLink: '#',
      codeLink: '#',
    },
    {
      title: 'High-Fidelity Human Rendering with Multi-View Consistency',
      authors: 'Chen M., Smith J., Johnson S.',
      venue: 'SIGGRAPH 2023',
      year: '2023',
      abstract: 'A comprehensive framework for ensuring multi-view consistency in neural human rendering while maintaining high visual fidelity.',
      pdfLink: '#',
      codeLink: '#',
    },
  ];

  const acknowledgments = [
    "National Science Foundation (NSF) for funding this research",
    "NYU High Performance Computing Center for computational resources",
    "NVIDIA Research for hardware support and collaboration",
    "The volunteer participants who contributed to our dataset",
    "Open source community for invaluable tools and frameworks"
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      width: '100%' 
    }}>
      <LandingNavbar />
      {/* Hero Section */}
      <GradientBox>
        <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            textAlign: 'center', 
            color: '#fff',
            width: '100%',
            py: { xs: 6, md: 8 }
          }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Project Title
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              A Diverse Neural Actor Repository for High-Fidelity Human-centric Rendering
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              mt: 2,
            }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                href="/dataset"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  },
                  px: 5,
                  py: 2,
                  minWidth: '200px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Dataset
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<Launch />}
                href="#research"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  px: 3,
                  py: 1.5,
                  minWidth: '160px',
                }}
              >
                View Research
              </Button>
            </Box>
          </Box>
        </Container>
      </GradientBox>

      {/* Project Summary */}
      <Box id="overview" sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Project Overview
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1, pr: { md: 2 } }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
                Our project represents a groundbreaking initiative to revolutionize human-centric rendering 
                through a comprehensive, diverse repository of neural actor representations. Our project aims 
                to advance the field of computer graphics and computer vision by providing researchers and 
                developers with high-quality, accessible research data.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3 }}>
                This innovative repository enables the creation of more realistic and diverse human 
                representations in virtual environments, opening new possibilities for applications in 
                entertainment, education, healthcare, and beyond. By democratizing access to advanced 
                neural rendering capabilities, we're fostering innovation across multiple domains.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our interdisciplinary approach combines cutting-edge research in neural networks, 
                computer vision, and human performance capture to deliver unprecedented quality and 
                diversity in human-centric rendering solutions.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <SimpleCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
                    Mission
                  </Typography>
                  <Typography variant="body1" paragraph>
                    To advance the field of computer graphics and computer vision through a comprehensive, 
                    diverse repository of neural actor representations, providing researchers with 
                    high-quality, accessible research data.
                  </Typography>
                </CardContent>
              </SimpleCard>
              <SimpleCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
                    Impact
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Enabling more realistic and diverse human representations in virtual environments, 
                    contributing to applications in entertainment, education, healthcare, and beyond.
                  </Typography>
                </CardContent>
              </SimpleCard>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Related Research */}
      <Box id="research" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.accent.coral})`,
                borderRadius: '2px',
              },
            }}
          >
            Related Publications
          </Typography>
          
          <Grid container spacing={4}>
            {publications.map((pub, index) => (
              <Grid item xs={12} key={index}>
                <SimpleCard>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom color="primary">
                      {pub.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {pub.authors}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                      {pub.venue} • {pub.year}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {pub.abstract}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<PictureAsPdf />}
                        component={Link}
                        href={pub.pdfLink}
                      >
                        PDF
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<Code />}
                        component={Link}
                        href={pub.codeLink}
                      >
                        Code
                      </Button>
                    </Box>
                  </CardContent>
                </SimpleCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Participants Section */}
      <Box id="team" sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.accent.teal}, ${theme.palette.primary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Research Team
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Our interdisciplinary team brings together expertise in computer graphics, computer vision, 
            machine learning, and human-computer interaction from across NYU.
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SimpleCard sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        border: `2px solid ${theme.palette.primary.main}20`,
                      }}
                    />
                    <Typography variant="h6" component="h4" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 1, fontWeight: 500 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.affiliation}
                    </Typography>
                  </CardContent>
                </SimpleCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Acknowledgments */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.accent.mint}, ${theme.palette.accent.teal})`,
                borderRadius: '2px',
              },
            }}
          >
            Acknowledgments
          </Typography>
          
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
            }}
          >
            <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
              We extend our heartfelt gratitude to the following organizations and individuals 
              who made this research possible:
            </Typography>
            
            <Grid container spacing={3}>
              {acknowledgments.map((acknowledgment, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.main,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1">
                      {acknowledgment}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 10, bgcolor: theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: '#fff' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, color: theme.palette.secondary.main }}>
              Ready to Explore?
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Dive into our comprehensive dataset and discover the future of human-centric rendering
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="/dataset"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: 'translateY(-5px) scale(1.05)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                },
                '&:active': {
                  transform: 'translateY(-2px) scale(1.02)',
                },
                px: 8,
                py: 3.5,
                fontSize: '1.5rem',
                fontWeight: 800,
                borderRadius: 6,
                minWidth: '300px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.8s ease',
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}
            >
              Explore Dataset
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 