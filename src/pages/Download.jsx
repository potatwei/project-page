import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';

const Download = () => {
  const downloadOptions = [
    {
      title: 'Full Dataset',
      size: '500GB',
      description: 'Complete dataset with all actors, actions, and annotations',
      requirements: [
        '500GB storage space',
        'High-speed internet connection',
        'Python 3.8+',
        'CUDA-compatible GPU',
      ],
    },
    {
      title: 'Sample Dataset',
      size: '50GB',
      description: 'Smaller subset for testing and evaluation',
      requirements: [
        '50GB storage space',
        'Standard internet connection',
        'Python 3.8+',
      ],
    },
    {
      title: 'Annotations Only',
      size: '10GB',
      description: 'Just the annotation files and metadata',
      requirements: [
        '10GB storage space',
        'Standard internet connection',
        'Python 3.8+',
      ],
    },
  ];

  return (
    <Box id="download" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Download
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Access our dataset and start exploring the possibilities of high-fidelity human rendering.
        </Typography>

        <Grid container spacing={4}>
          {downloadOptions.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {option.title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {option.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {option.description}
                  </Typography>
                  <List dense>
                    {option.requirements.map((req, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <StorageIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Download
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

export default Download; 