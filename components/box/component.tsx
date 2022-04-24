import { Box } from '@spark-web/box'
import { Text } from '@spark-web/text'

import { Section } from '../example-helpers'

export default function BoxSection() {
  return (
    <Section heading="Box">
      <Box display="flex">
        <Box padding="large" margin="large" background="primary">
          <Text>hi</Text>
        </Box>
        <Box padding="large" margin="large" background="primary">
          <Text>there</Text>
        </Box>
        <Box padding="large" margin="large" background="primary">
          <Text>friend</Text>
        </Box>
      </Box>
    </Section>
  )
}
