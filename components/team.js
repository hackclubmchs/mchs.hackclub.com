import { Container, Box, Heading } from 'theme-ui'
import Bio from './bio'
import teamData from '../data/team.json'

const Team = () => (
  <Container>
    <Heading variant="headline">Board</Heading>
    <Box sx={{
      my: 4,
      gap: 4,
    }} >
      {teamData.map(member => (
        <Bio
          img={member.avatar}
          name={member.name}
          teamRole={member.role}
          text={member.bio}
          pronouns={member.pronouns}
          email={member.email}
          href={member.website}
          key={member.name}
        />
      ))}
    </Box>
  </Container>
)

export default Team
