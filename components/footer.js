import { Box, Link } from 'theme-ui'
import Footer from './footer.mdx'
import Icon from './icon'

const Service = ({ href, icon, name = '', ...props }) => (
  <Link
    target="_blank"
    rel="noopener me"
    href={href}
    title={`Hack Club MCHS on ${name ? name : icon}`}
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
      px: 2,
      py: [3, 4],
      mt: [4, 5],
      a: { color: 'secondary' }
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
    <Footer />
  </Box>
)

export default FooterComponent
