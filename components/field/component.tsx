import { Columns } from '@spark-web/columns'
import { Field } from '@spark-web/field'
import { Stack } from '@spark-web/stack'
import { Text } from '@spark-web/text'
import { TextInput } from '@spark-web/text-input'
import { TextLink } from '@spark-web/text-link'

import { Section } from '../example-helpers'

export default function FieldSection() {
  return (
    <Section heading="Field">
      <Stack gap="xlarge">
        <Field label="Name" labelVisibility="hidden">
          <TextInput placeholder="hidden" />
        </Field>
        <Columns gap="small">
          <Field label="Name" secondaryLabel="(Optional)">
            <TextInput placeholder="visible" />
          </Field>
          <Field label="Name" labelVisibility="reserve-space">
            <TextInput placeholder="reserve-space" />
          </Field>
        </Columns>
        <Field
          label="Username"
          adornment={
            <Text>
              <TextLink href="#">Forgot username?</TextLink>
            </Text>
          }
        >
          <TextInput placeholder="visible" />
        </Field>
      </Stack>
      <Field
        label="Email"
        description="We take your privacy seriously. We will never give your email to a third party."
        message="This field is required"
        tone="critical"
      >
        <TextInput type="email" />
      </Field>
    </Section>
  )
}
