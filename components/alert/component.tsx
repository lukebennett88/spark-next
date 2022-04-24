import { Alert } from '@spark-web/alert'

import { Section } from '../example-helpers'

export default function AlertSection() {
  return (
    <Section heading="Alert">
      <Alert tone="caution" heading="This is a caution alert">
        Caution message
      </Alert>
      <Alert tone="positive" heading="This is a positive alert">
        Positive message
      </Alert>
      <Alert tone="info" heading="This is an info alert">
        Info message
      </Alert>
      <Alert tone="critical" heading="This is a critical alert">
        Critical message
      </Alert>
    </Section>
  )
}
