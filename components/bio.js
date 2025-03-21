import { Avatar, Box, Card, Flex, Text } from 'theme-ui'

export default function Bio({ ...props }) {
  let { img, name, teamRole, pronouns, email } = props

  const avatar = img || '/avatars/placeholder.svg'

  return (
    <>
      <Card
        variant="interactive"
        p={[2, 2, 2]}
        py={[3, 3, 3]}
        sx={{
          display: 'flex'
        }}
      >
        <Avatar size={64} mr={3} src={avatar} alt={name} />
        <Box>
          <Text sx={{ fontSize: 3 }} variant="headline">
            {name}
          </Text>
          <Flex>
            <Text>
              <Text
                color="green"
                variant="caption"
                sx={{
                  fontWeight: 'bold'
                }}
              >
                {teamRole}
              </Text>

              {pronouns && (
                <Text ml={1} variant="caption">
                  ({pronouns})
                </Text>
              )}
            </Text>
          </Flex>
          <Text variant="caption" as={'a'} href={`mailto:${email}`}>
            {email}
            <br />
          </Text>
        </Box>
      </Card>
    </>
  )
}
