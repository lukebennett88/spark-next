import { Columns } from '@spark-web/columns'
import { Heading } from '@spark-web/heading'
import { Stack } from '@spark-web/stack'

import { Section } from '../example-helpers'

export default function HeadingSection() {
  return (
    <Section heading="Heading">
      <Columns>
        <Stack dividers gap="large">
          <Heading level="1">Heading level 1</Heading>
          <Heading level="2">Heading level 2</Heading>
          <Heading level="3">Heading level 3</Heading>
          <Heading level="4">Heading level 4</Heading>
        </Stack>
        <Stack dividers>
          <Heading level="1">Heading level 1</Heading>
          <Heading level="2">Heading level 2</Heading>
          <Heading level="3">Heading level 3</Heading>
          <Heading level="4">Heading level 4</Heading>
        </Stack>
      </Columns>
    </Section>
  )
}
