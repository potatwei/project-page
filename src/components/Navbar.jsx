import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1190px)');

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
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Overview', id: 'overview' },
    { label: 'Highlight Data', id: 'highlight-data' },
    { label: 'Core Features', id: 'core-features' },
    { label: 'Details', id: 'details' },
    { label: 'Benchmark', id: 'benchmark' },
    { label: 'Download', id: 'download' },
    { label: 'Research', id: 'research' },
    { label: 'Contributors', id: 'contributors' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: theme.palette.primary.main,
          fontWeight: 700,
        }}
      >
        DNA-Rendering
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}10`,
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: 'center',
                color: theme.palette.primary.main,
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 4 : 0}
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        borderBottom: isScrolled ? `1px solid ${theme.palette.primary.light}20` : 'none',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.main,
            fontWeight: 700,
            cursor: 'pointer',
            '&:hover': {
              color: theme.palette.primary.dark,
            },
          }}
          onClick={() => scrollToSection('home')}
        >
          DNA-Rendering
        </Typography>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              color: isScrolled ? theme.palette.primary.main : '#fff',
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: isScrolled ? theme.palette.primary.main : '#fff',
                  '&:hover': {
                    backgroundColor: isScrolled 
                      ? `${theme.palette.primary.main}10`
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: isMobile ? 'block' : 'none',
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 