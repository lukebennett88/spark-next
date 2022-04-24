import { Columns } from '@spark-web/columns'
import { Stack } from '@spark-web/stack'

import { Section, Placeholder } from '../example-helpers'

export default function StackSection() {
  return (
    <Section heading="Stack">
      <Columns gap="large">
        <Stack gap="large">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
        <Stack gap="large" dividers>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      </Columns>
    </Section>
  )
}
