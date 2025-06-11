import { useState, useRef } from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, useTheme, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const GalleryCard = styled(Card)(({ theme }) => ({
  minWidth: 300,
  maxWidth: 400,
  scrollSnapAlign: 'start',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

const Dot = styled(Box)(({ active, theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[400],
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  zIndex: 1,
}));

const HighlightData = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: "[PLACEHOLDER] Novel View Example",
      description: "This is a placeholder image. Replace with actual novel view rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "novel-view"
    },
    {
      id: 2,
      title: "[PLACEHOLDER] Novel Pose Example",
      description: "This is a placeholder image. Replace with actual novel pose rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "novel-pose"
    },
    {
      id: 3,
      title: "[PLACEHOLDER] Novel ID Example",
      description: "This is a placeholder image. Replace with actual novel ID rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "novel-id"
    },
    {
      id: 4,
      title: "[PLACEHOLDER] Special Effect Example",
      description: "This is a placeholder image. Replace with actual special effect rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "special-effect"
    },
    {
      id: 5,
      title: "[PLACEHOLDER] Novel View Example 2",
      description: "This is a placeholder image. Replace with actual novel view rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "novel-view"
    },
    {
      id: 6,
      title: "[PLACEHOLDER] Novel Pose Example 2",
      description: "This is a placeholder image. Replace with actual novel pose rendering.",
      image: "https://via.placeholder.com/400x300",
      category: "novel-pose"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 300 + 24; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      
      // If we're at the cloned items at the start, jump to the real items
      if (newIndex < items.length) {
        scrollContainerRef.current.scrollLeft = (newIndex + items.length) * cardWidth;
      }
      // If we're at the cloned items at the end, jump to the real items
      else if (newIndex >= items.length * 2) {
        scrollContainerRef.current.scrollLeft = (newIndex - items.length) * cardWidth;
      }
      
      setActiveIndex(newIndex % items.length);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 300 + 24; // card width + gap
      // Add items.length to ensure we're in the middle set of items
      scrollContainerRef.current.scrollTo({
        left: (index + items.length) * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 300 + 24; // card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 300 + 24; // card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Create a looped array by adding items at both ends
  const loopedItems = [...items, ...items, ...items];

  return (
    <Box id="highlight-data" sx={{ py: 12, bgcolor: '#fff' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
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
              background: 'linear-gradient(90deg, #57068C, #0066B1)',
              borderRadius: '2px',
            },
          }}
        >
          Highlight Data
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <NavigationButton
            onClick={handlePrev}
            sx={{ left: -20 }}
          >
            <ArrowBackIosNewIcon />
          </NavigationButton>
          <ScrollableContainer 
            ref={scrollContainerRef} 
            onScroll={handleScroll}
            sx={{ 
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
            }}
          >
            {loopedItems.map((item, index) => (
              <GalleryCard key={`${item.id}-${index}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </GalleryCard>
            ))}
          </ScrollableContainer>
          <NavigationButton
            onClick={handleNext}
            sx={{ right: -20 }}
          >
            <ArrowForwardIosIcon />
          </NavigationButton>
        </Box>
        <NavigationDots>
          {items.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex % items.length}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </NavigationDots>
      </Container>
    </Box>
  );
};

export default HighlightData; 