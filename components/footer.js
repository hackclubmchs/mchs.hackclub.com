import { Box, Link, Text } from 'theme-ui'
import Icon from './icon'

const Service = ({ href, icon, name = '', ...props }) => (
  <Link
    target="_blank"
    rel="noopener me"
    href={href}
    title={`Hack Club MCHS on ${name ? name : icon}`}
    sx={{
      display: 'inline-flex',
      mx: [0, 1],
    }}
    {...props}
  >
    <Icon glyph={icon} />
  </Link>
)

const FooterComponent = () => (
  <Box
    as="footer"
    sx={{
      color: 'secondary',
      bg: 'sunken',
      textAlign: 'center',
      p: [3, 4],
      mt: [4, 5],
      a: { color: 'secondary' },
      display: 'flex',
      flexDirection: 'column',
      gap: [2, 3],
    }}
  >
    <Box>
      <Service
        href="https://www.instagram.com/hackclubmchs"
        icon="instagram"
        name="Instagram"
      />
      <Service
        href="https://github.com/hackclubmchs"
        icon="github"
        name="GitHub"
      />
      <Service
        href="https://join.slack.com/t/hackclub/shared_invite/zt-306f6k985-hoVeSXw0Z8Z6bu~hN3tWTA"
        icon="slack"
        name="Slack"
      />
      <Service
        href="https://classroom.google.com/c/NzAyNjcwMDMxNDM3?cjc=bwhbexu"
        icon="google"
        name="Google Classroom (@lodiusd.org)"
      />
    </Box>

    <Text>
      Hack Club MCHS is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
    </Text>

    <Link href="https://github.com/RyanLua/mchs.hackclub.com">
      Open source on GitHub
    </Link>
  </Box>
)

export default FooterComponent
