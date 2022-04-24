import { Hidden } from '@spark-web/hidden'
import { Stack } from '@spark-web/stack'

import { Section, Placeholder } from '../example-helpers'

export default function HiddenSection() {
  return (
    <Section heading="Hidden">
      <Stack gap="small">
        <Hidden below="wide">
          <Placeholder label="1. Hidden below wide" height={64} />
        </Hidden>
        <Hidden below="desktop">
          <Placeholder label="2. Hidden below desktop" height={64} />
        </Hidden>
        <Hidden below="tablet">
          <Placeholder label="3. Hidden below tablet" height={64} />
        </Hidden>
        <Hidden above="mobile">
          <Placeholder label="4. Hidden above mobile" height={64} />
        </Hidden>
        <Hidden above="tablet">
          <Placeholder label="5. Hidden above tablet" height={64} />
        </Hidden>
        <Hidden above="desktop">
          <Placeholder label="6. Hidden above desktop" height={64} />
        </Hidden>
      </Stack>
    </Section>
  )
}
