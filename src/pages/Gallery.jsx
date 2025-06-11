import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Tabs, Tab } from '@mui/material';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const categories = ['All', 'Novel Views', 'Novel Poses', 'Novel IDs', 'Special Effects'];

  const items = [
    {
      id: 1,
      title: '[PLACEHOLDER] Novel View Example',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual novel view rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'novel-view',
    },
    {
      id: 2,
      title: '[PLACEHOLDER] Novel Pose Example',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual novel pose rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'novel-pose',
    },
    {
      id: 3,
      title: '[PLACEHOLDER] Novel ID Example',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual novel ID rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'novel-id',
    },
    {
      id: 4,
      title: '[PLACEHOLDER] Special Effect Example',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual special effect rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'special-effects',
    },
    {
      id: 5,
      title: '[PLACEHOLDER] Novel View Example 2',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual novel view rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'novel-view',
    },
    {
      id: 6,
      title: '[PLACEHOLDER] Novel Pose Example 2',
      description: '[PLACEHOLDER] This is a placeholder image. Replace with actual novel pose rendering.',
      image: 'https://via.placeholder.com/800x600',
      category: 'novel-pose',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredItems = selectedTab === 0
    ? items
    : items.filter(item => item.category === categories[selectedTab]);

  return (
    <Box id="gallery" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Gallery
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Browse through our collection of high-quality rendering examples.
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery; 