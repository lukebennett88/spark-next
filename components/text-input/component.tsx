import { Field } from '@spark-web/field'
import { TextInput } from '@spark-web/text-input'

import { Section } from '../example-helpers'

export default function TextInputSection() {
  return (
    <Section heading="TextInput">
      <Field label="Label">
        <TextInput />
      </Field>
    </Section>
  )
}
