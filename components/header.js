import { Box, Image } from 'theme-ui'

export default () => (
  <Box
    as="header"
    sx={{
      background:
        'radial-gradient(96.07% 96.07% at 0% 0%, #8B00FE 0%, #5901C9 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: ['130px', '200px', '200px'],
      maxHeight: '400px',
      pt: 2
    }}
  >
    <Image src="/banner-logo.svg" alt="Hack Club logo" width={100} />
  </Box>
)
