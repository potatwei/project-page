import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import rotatingGif from '../assets/rotating.gif';

const Contributors = () => {
  const teamMembers = [
    {
      name: "[PLACEHOLDER] Team Member 1",
      role: "Principal Investigator",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Team Member 2",
      role: "Lead Researcher",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Team Member 3",
      role: "Research Scientist",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Team Member 4",
      role: "Research Scientist",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Team Member 5",
      role: "Research Engineer",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Team Member 6",
      role: "Research Engineer",
      image: rotatingGif
    }
  ];

  const contributedMembers = [
    {
      name: "[PLACEHOLDER] Contributor 1",
      role: "External Collaborator",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Contributor 2",
      role: "External Collaborator",
      image: rotatingGif
    },
    {
      name: "[PLACEHOLDER] Contributor 3",
      role: "External Collaborator",
      image: rotatingGif
    }
  ];

  return (
    <Box id="contributors" sx={{ py: 8, bgcolor: '#fff' }}>
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
              background: 'linear-gradient(90deg, #f06292, #57068C)', // Pink to Purple
              borderRadius: '2px',
            },
          }}
        >
          Contributors
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          [Placeholder] Meet the team behind DNA-Rendering and our collaborators.
        </Typography>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 6, mb: 4 }}>
          Core Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" component="h4" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h3" gutterBottom sx={{ mt: 8, mb: 4 }}>
          Collaborators
        </Typography>
        <Grid container spacing={4}>
          {contributedMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" component="h4" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
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

export default Contributors; 