import { Button } from '@spark-web/button'
import { Divider } from '@spark-web/divider'
import { LightBulbIcon } from '@spark-web/icon'
import { Inline } from '@spark-web/inline'
import { Text } from '@spark-web/text'

import { Section } from '../example-helpers'

export default function ButtonSection() {
  return (
    <Section heading="Button">
      <Text weight="strong">High prominence</Text>
      <Inline gap="small">
        <Button prominence="high" tone="primary">
          <LightBulbIcon />
          Primary
        </Button>
        <Button prominence="high" tone="secondary">
          <LightBulbIcon />
          Secondary
        </Button>
        <Button prominence="high" tone="neutral">
          <LightBulbIcon />
          Neutral
        </Button>
        <Button prominence="high" tone="positive">
          <LightBulbIcon />
          Positive
        </Button>
        <Button prominence="high" tone="critical">
          <LightBulbIcon />
          Critical
        </Button>
      </Inline>
      <Divider />
      <Text weight="strong">Low prominence</Text>
      <Inline gap="small">
        <Button prominence="low" tone="primary">
          <LightBulbIcon />
          Primary
        </Button>
        <Button prominence="low" tone="secondary">
          <LightBulbIcon />
          Secondary
        </Button>
        <Button prominence="low" tone="neutral">
          <LightBulbIcon />
          Neutral
        </Button>
        <Button prominence="low" tone="positive">
          <LightBulbIcon />
          Positive
        </Button>
        <Button prominence="low" tone="critical">
          <LightBulbIcon />
          Critical
        </Button>
        <Button prominence="low" tone="caution">
          <LightBulbIcon />
          Critical
        </Button>
        <Button prominence="low" tone="info">
          <LightBulbIcon />
          Informative
        </Button>
      </Inline>
      <Divider />
      <Text weight="strong">None prominence</Text>
      <Inline gap="small">
        <Button prominence="none" tone="primary">
          <LightBulbIcon />
          Primary
        </Button>
        <Button prominence="none" tone="secondary">
          <LightBulbIcon />
          Secondary
        </Button>
        <Button prominence="none" tone="neutral">
          <LightBulbIcon />
          Neutral
        </Button>
        <Button prominence="none" tone="positive">
          <LightBulbIcon />
          Positive
        </Button>
        <Button prominence="none" tone="critical">
          <LightBulbIcon />
          Critical
        </Button>
        <Button prominence="none" tone="caution">
          <LightBulbIcon />
          Critical
        </Button>
        <Button prominence="none" tone="info">
          <LightBulbIcon />
          Informative
        </Button>
      </Inline>
    </Section>
  )
}
