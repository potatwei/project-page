import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Overview', id: 'overview' },
    { name: 'Core Features', id: 'core-features' },
    { name: 'Details', id: 'details' },
    { name: 'Benchmark', id: 'benchmark' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Download', id: 'download' },
    { name: 'Research', id: 'research' },
    { name: 'Contributors', id: 'contributors' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={isScrolled ? 4 : 0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 0, 
            mr: 4,
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('home')}
        >
          DNA-Rendering
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 