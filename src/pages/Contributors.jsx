import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const Contributors = () => {
  const teamMembers = [
    {
      name: "[PLACEHOLDER] Team Member 1",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Team Member 2",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Team Member 3",
      role: "Research Scientist",
      image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Team Member 4",
      role: "Research Scientist",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Team Member 5",
      role: "Research Engineer",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Team Member 6",
      role: "Research Engineer",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&auto=format"
    }
  ];

  const contributedMembers = [
    {
      name: "[PLACEHOLDER] Contributor 1",
      role: "External Collaborator",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Contributor 2",
      role: "External Collaborator",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&auto=format"
    },
    {
      name: "[PLACEHOLDER] Contributor 3",
      role: "External Collaborator",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&auto=format"
    }
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