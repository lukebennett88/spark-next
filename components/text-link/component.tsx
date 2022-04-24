import { Text } from '@spark-web/text'
import { TextLink } from '@spark-web/text-link'

import { Section } from '../example-helpers'

export default function TextLinkSection() {
  return (
    <Section heading="TextLink">
      <Text>
        This is some text containing a <TextLink href="#">text link</TextLink>
      </Text>
    </Section>
  )
}
