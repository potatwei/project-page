import { Box, Container, Typography, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: '#57068C' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Have questions about DNA-Rendering? Get in touch with our team.
        </Typography>

        <Paper elevation={3} sx={{ p: 6, borderTop: '4px solid #57068C' }}>
          <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ color: '#57068C' }}>
            Contact Information
          </Typography>
          <Box sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ mr: 2, color: '#57068C' }} />
              <Typography variant="body1">
                contact@dna-rendering.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: '#57068C' }} />
              <Typography variant="body1">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 2, color: '#57068C' }} />
              <Typography variant="body1">
                123 Research Avenue<br />
                University Campus<br />
                City, State 12345
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact; 