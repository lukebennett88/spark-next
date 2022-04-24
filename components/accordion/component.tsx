import { Accordion, AccordionItem } from '@spark-web/accordion'
import { Text } from '@spark-web/text'

import { Section } from '../example-helpers'

export default function AccordionSection() {
  return (
    <Section heading="Accordion">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" label="What is this?" level="4">
          <Text>This is an example accordion</Text>
        </AccordionItem>
        <AccordionItem value="item-2" label="Should I click this?" level="4">
          <Text>Yes</Text>
        </AccordionItem>
        <AccordionItem value="item-3" label="What is in it for me?" level="4">
          <Text>A nice accordion</Text>
        </AccordionItem>
      </Accordion>
    </Section>
  )
}
