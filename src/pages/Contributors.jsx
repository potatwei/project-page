import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const Contributors = () => {
  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Principal Investigator',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Team Member 2',
      role: 'Lead Researcher',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Team Member 3',
      role: 'Research Scientist',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Team Member 4',
      role: 'Research Scientist',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Team Member 5',
      role: 'Research Engineer',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Team Member 6',
      role: 'Research Engineer',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const contributedMembers = [
    {
      name: 'Contributor 1',
      role: 'External Collaborator',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Contributor 2',
      role: 'External Collaborator',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Contributor 3',
      role: 'External Collaborator',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Box id="contributors" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center">
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