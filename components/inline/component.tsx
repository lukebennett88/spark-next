import { Inline } from '@spark-web/inline'
import { Stack } from '@spark-web/stack'

import { Placeholder, Section } from '../example-helpers'

export default function InlineSection() {
  return (
    <Section heading="Inline">
      <Stack gap="medium" align="center" dividers>
        <Inline gap="small" alignY="top">
          <Placeholder />
          <Placeholder label="top" height={64} width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" alignY="center">
          <Placeholder />
          <Placeholder label="center" height={64} width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" alignY="bottom">
          <Placeholder />
          <Placeholder label="bottom" height={64} width={128} />
          <Placeholder />
        </Inline>
      </Stack>
      <Stack gap="medium" dividers>
        <Inline gap="small" align="left">
          <Placeholder label="left" width={128} />
          <Placeholder />
          <Placeholder />
        </Inline>
        <Inline gap="small" align="center">
          <Placeholder />
          <Placeholder label="center" width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" align="right">
          <Placeholder />
          <Placeholder />
          <Placeholder label="right" width={128} />
        </Inline>
      </Stack>
    </Section>
  )
}
