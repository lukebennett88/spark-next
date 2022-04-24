import { Inline } from '@spark-web/inline'
import { Row } from '@spark-web/row'

import { Section, Placeholder } from '../example-helpers'

export default function RowSection() {
  return (
    <Section heading="Row">
      <Inline gap="xxlarge">
        <Row gap="small">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="medium">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="large">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="xlarge">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
      </Inline>
    </Section>
  )
}
