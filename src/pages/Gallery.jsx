import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Tabs, Tab } from '@mui/material';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const categories = ['All', 'Novel Views', 'Novel Poses', 'Novel IDs', 'Special Effects'];

  const galleryItems = [
    {
      title: 'Novel View Example 1',
      category: 'Novel Views',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel Pose Example 1',
      category: 'Novel Poses',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel ID Example 1',
      category: 'Novel IDs',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Special Effect Example 1',
      category: 'Special Effects',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel View Example 2',
      category: 'Novel Views',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Novel Pose Example 2',
      category: 'Novel Poses',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredItems = selectedTab === 0
    ? galleryItems
    : galleryItems.filter(item => item.category === categories[selectedTab]);

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