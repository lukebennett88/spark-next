import { Columns } from '@spark-web/columns'
import { Stack } from '@spark-web/stack'

import { Placeholder, Section } from '../example-helpers'

export default function ColumnsSection() {
  return (
    <Section heading="Columns">
      <Stack gap="medium" dividers>
        <Columns gap="small" alignY="top">
          <Placeholder />
          <Placeholder label="top (default)" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="center">
          <Placeholder />
          <Placeholder label="center" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="bottom">
          <Placeholder />
          <Placeholder label="bottom" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="stretch">
          <Placeholder />
          <Placeholder label="stretch" height={64} />
          <Placeholder />
        </Columns>
      </Stack>
    </Section>
  )
}
