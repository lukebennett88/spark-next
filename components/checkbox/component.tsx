import { Checkbox } from '@spark-web/checkbox'
import { Divider } from '@spark-web/divider'
import { Fieldset } from '@spark-web/fieldset'
import { Stack } from '@spark-web/stack'

import { Section } from '../example-helpers'

export default function CheckboxSection() {
  return (
    <Section heading="Checkbox">
      <Fieldset legend="Checkbox example" gap="large">
        <Stack gap="large">
          <Checkbox size="small" checked={false}>
            Unchecked
          </Checkbox>
          <Checkbox size="small" checked>
            Checked
          </Checkbox>
          <Checkbox size="small" disabled>
            Disabled
          </Checkbox>
          <Checkbox size="small" checked disabled>
            Checked + disabled
          </Checkbox>
          <Divider />
          <Checkbox size="medium" checked={false}>
            Unchecked
          </Checkbox>
          <Checkbox size="medium" checked>
            Checked
          </Checkbox>
          <Checkbox size="medium" disabled>
            Disabled
          </Checkbox>
          <Checkbox size="medium" checked disabled>
            Checked + disabled
          </Checkbox>
        </Stack>
      </Fieldset>
    </Section>
  )
}
