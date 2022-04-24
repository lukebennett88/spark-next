import { Field } from '@spark-web/field'
import { TextArea } from '@spark-web/text-area'

import { Section } from '../example-helpers'

export default function TextAreaSection() {
  return (
    <Section heading="TextArea">
      <Field label="Add some text">
        <TextArea placeholder="This is a textarea" />
      </Field>
    </Section>
  )
}
