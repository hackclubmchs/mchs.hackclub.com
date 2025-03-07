import Footer from './footer.mdx'
import { Box } from 'theme-ui'

const FooterComponent = () => (
  <Box
    as="footer"
    sx={{
      bg: 'sunken', textAlign: 'center', px: 2, py: [3, 4], mt: [4, 5],
      'p': {
        color: 'secondary',
        a: { color: 'secondary' }
      },
    }}
  >
    <Footer />
  </Box>
);

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;