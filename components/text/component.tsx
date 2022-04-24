import { Columns } from '@spark-web/columns'
import { Stack } from '@spark-web/stack'
import { Text } from '@spark-web/text'

import { Section } from '../example-helpers'

export default function TextSection() {
  return (
    <Section heading="Text">
      <Columns gap="large" collapseBelow="wide">
        <Stack gap="medium">
          <Text size="large">large regular</Text>
          <Text size="large" weight="medium">
            large medium
          </Text>
          <Text size="large" weight="strong">
            large strong
          </Text>
        </Stack>
        <Stack gap="medium">
          <Text size="standard">standard regular</Text>
          <Text size="standard" weight="medium">
            standard medium
          </Text>
          <Text size="standard" weight="strong">
            standard strong
          </Text>
        </Stack>
        <Stack gap="small">
          <Text size="small">small regular</Text>
          <Text size="small" weight="medium">
            small medium
          </Text>
          <Text size="small" weight="strong">
            small strong
          </Text>
        </Stack>
        <Stack gap="small">
          <Text size="xsmall">xsmall regular</Text>
          <Text size="xsmall" weight="medium">
            xsmall medium
          </Text>
          <Text size="xsmall" weight="strong">
            xsmall strong
          </Text>
        </Stack>
      </Columns>
    </Section>
  )
}
