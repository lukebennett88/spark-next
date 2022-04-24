import { Columns } from '@spark-web/columns'
import { CheckCircleIcon } from '@spark-web/icon'
import { Text } from '@spark-web/text'
import { TextList } from '@spark-web/text-list'

import { Section } from '../example-helpers'

export default function TextListSection() {
  return (
    <Section heading="TextList">
      <Columns gap="large">
        <TextList>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
        </TextList>
        <TextList type="number">
          <Text>Number</Text>
          <Text>Number</Text>
          <Text>Number</Text>
        </TextList>
        <TextList icon={<CheckCircleIcon size="xxsmall" />}>
          <Text>Icon</Text>
          <Text>Icon</Text>
          <Text>Icon</Text>
        </TextList>
      </Columns>
    </Section>
  )
}
