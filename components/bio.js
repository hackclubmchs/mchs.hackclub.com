import Icon from '@hackclub/icons'
import { useState } from 'react'
import { Avatar, Box, Card, Flex, Text, Link } from 'theme-ui'

export default function Bio({ popup = true, spanTwo = false, ...props }) {
  let { img, name, teamRole, pronouns, text, email } =
    props
  const [expand, setExpand] = useState(false)

  // Check if we should show popup based on content availability
  const hasPopupContent = text || email

  const avatar = img || '/avatars/placeholder.svg'

  return (
    <>
      <Card
        variant='interactive'
        p={popup ? [2, 2, 2] : [3, 3, 3]}
        py={popup ? [3, 3, 3] : [4, 4, 4]}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          maxWidth: '600px',
          zIndex: !popup ? 1003 : 5,
        }}
        target="_blank"
        onClick={() => {
          if (hasPopupContent && popup) {
            setExpand(true)
          }
        }}
      >
        <Avatar
          size={64}
          mr={3}
          src={avatar}
          alt={name}
          sx={{
            overflow: 'hidden',
            objectFit: 'cover',
            flexShrink: 0,
            width: '64px',
            height: '64px'
          }}
        />
        <Box>
          <Text sx={{ fontSize: 3 }} variant="headline">
            {name}
          </Text>
          <Flex>
            <Text>
              <Text
                color="green"
                variant="subheadline"
                fontSize={2}
                sx={{
                  fontSize: '1.1em',
                }}
              >
                {teamRole}
              </Text>

              {pronouns && (
                <Text ml={1} variant='caption'>
                  ({pronouns})
                </Text>
              )}
            </Text>
          </Flex>
          {!popup && email && (
            <Text variant='caption' as={'a'} href={`mailto:${email}`}>
              {email}
              <br />
            </Text>
          )}
        </Box>
      </Card>
      {popup && expand && (
        <>
          <Flex
            sx={{
              position: 'fixed',
              zIndex: 1004,
              top: 0,
              left: 0,
              height: '100vh',
              width: '100vw',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.6)',
              pb: 4
            }}
          >
            <Bio {...props} popup={false} />
            <Flex
              sx={{
                position: 'fixed',
                zIndex: 1002,
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                alignItems: 'center',
                justifyContent: 'center',
                pb: 4
              }}
              onClick={() => setExpand(false)}
            ></Flex>
          </Flex>
        </>
      )}
    </>
  )
}
