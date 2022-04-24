import { Columns } from '@spark-web/columns'
import { Divider } from '@spark-web/divider'
import { Stack } from '@spark-web/stack'
import { Text } from '@spark-web/text'

import { InlineCode, Section } from '../example-helpers'

export default function DividerSection() {
  return (
    <Section heading="Divider">
      <Columns gap="large">
        <Stack gap="xlarge">
          {dividerColors.map((color) => (
            <Stack key={color} gap="small" height="xsmall">
              <Text>
                Color: <InlineCode>{color}</InlineCode>, Width:{' '}
                <InlineCode>standard</InlineCode>
              </Text>
              <Divider color={color} width="standard" />
            </Stack>
          ))}
        </Stack>
        <Stack gap="xlarge">
          {dividerColors.map((color) => (
            <Stack key={color} gap="small" height="xsmall">
              <Text>
                Color: <InlineCode>{color}</InlineCode>, Width:{' '}
                <InlineCode>large</InlineCode>
              </Text>
              <Divider color={color} width="large" />
            </Stack>
          ))}
        </Stack>
      </Columns>
    </Section>
  )
}

const dividerColors = [
  'accent',
  'accentMuted',
  'caution',
  'cautionMuted',
  'critical',
  'criticalMuted',
  'fieldHover',
  'info',
  'infoMuted',
  'neutral',
  'positive',
  'positiveMuted',
  'primary',
  'primaryActive',
  'primaryHover',
  'secondary',
  'secondaryActive',
  'secondaryHover',
  'standard',
] as const
