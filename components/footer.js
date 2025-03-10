import Footer from './footer.mdx'
import { Box, Grid, Link } from 'theme-ui'
import Icon from './icon'

const Service = ({ href, icon, ...props }) => (
  <Link
    target="_blank"
    rel="noopener"
    href={href}
    title={`Hack Club MCHS on ${icon}`}
    children={<Icon glyph={icon} />}
    {...props}
  />
)

const FooterComponent = () => (
  <Box
    as="footer"
    sx={{
      color: 'secondary',
      bg: 'sunken', textAlign: 'center', px: 2, py: [3, 4], mt: [4, 5],
      a: { color: 'secondary' }
    }}
  >
    <Box>
      <Service
        href="https://www.instagram.com/hackclubmchs"
        icon="instagram"
      />
      <Service
        href="https://github.com/hackclubmchs"
        icon="github"
      />
    </Box>
    <Footer />
  </Box>
);

export default FooterComponent;