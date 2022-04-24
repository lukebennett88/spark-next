import { Container } from '@spark-web/container'

import { Placeholder, Section } from '../example-helpers'

export default function ContainerSection() {
  return (
    <Section heading="Container">
      <Container size="xsmall">
        <Placeholder label="xsmall" height={64} />
      </Container>
      <Container size="small">
        <Placeholder label="small" height={64} />
      </Container>
      <Container size="medium">
        <Placeholder label="medium" height={64} />
      </Container>
      <Container size="large">
        <Placeholder label="large" height={64} />
      </Container>
    </Section>
  )
}
