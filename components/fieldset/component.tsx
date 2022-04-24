import { Checkbox } from '@spark-web/checkbox'
import { Columns } from '@spark-web/columns'
import { Field } from '@spark-web/field'
import { Fieldset } from '@spark-web/fieldset'
import { TextInput } from '@spark-web/text-input'

import { Section } from '../example-helpers'

export default function FieldsetSection() {
  return (
    <Section heading="Fieldset">
      <Fieldset legend="Name">
        <Columns gap="small">
          <Field label="First" labelVisibility="hidden">
            <TextInput placeholder="e.g. Jane" />
          </Field>
          <Field label="Last" labelVisibility="hidden">
            <TextInput placeholder="e.g. Smith" />
          </Field>
        </Columns>
      </Fieldset>
      <Fieldset legend="Email signup">
        <Checkbox size="medium">Sign up for our mailing list?</Checkbox>
      </Fieldset>
    </Section>
  )
}
