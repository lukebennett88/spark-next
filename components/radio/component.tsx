import { Divider } from '@spark-web/divider'
import { Fieldset } from '@spark-web/fieldset'
import { Radio } from '@spark-web/radio'
import { Stack } from '@spark-web/stack'

import { Section } from '../example-helpers'

export default function RadioSection() {
  return (
    <Section heading="Radio">
      <Fieldset legend="Radio example" gap="large">
        <Stack gap="large">
          <Radio size="small" checked={false}>
            Unchecked
          </Radio>
          <Radio size="small" checked>
            Checked
          </Radio>
          <Radio size="small" disabled>
            Disabled
          </Radio>
          <Radio size="small" checked disabled>
            Checked + disabled
          </Radio>
          <Divider />
          <Radio size="medium" checked={false}>
            Unchecked
          </Radio>
          <Radio size="medium" checked>
            Checked
          </Radio>
          <Radio size="medium" disabled>
            Disabled
          </Radio>
          <Radio size="medium" checked disabled>
            Checked + disabled
          </Radio>
        </Stack>
      </Fieldset>
    </Section>
  )
}
