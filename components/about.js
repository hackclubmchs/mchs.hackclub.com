import { Container, Text } from 'theme-ui'

const About = () => (
  <Container
    variant="copy"
    sx={{
      my: 3,
      py: 3,
      border: '2px dashed',
      borderColor: 'sunken',
      borderRadius: 'default',
      mt: [3, 4],
      mb: [3, 4]
    }}
  >
    <Text sx={{ fontSize: '24px' }}>
      You can build anything, we want to show the potential of students. To
      build confidence for education and future careers.
    </Text>
  </Container>
)

export default About
