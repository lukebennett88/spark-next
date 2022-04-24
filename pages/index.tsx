import { Container } from '@spark-web/container'
import { Heading } from '@spark-web/heading'
import { Stack } from '@spark-web/stack'
import { Text } from '@spark-web/text'
import { TextLink } from '@spark-web/text-link'
import Head from 'next/head'

export default function Home() {
  return (
    <Container size="medium">
      <Head>
        <title>Spark Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack
        as="main"
        gap="xxlarge"
        dividers
        paddingX="large"
        paddingY="xxlarge"
      >
        <Heading level="1">Kitchen Sink</Heading>
        <Text>
          <TextLink href="/kitchen-sink">
            Go to “Kitchen Sink” example page
          </TextLink>
        </Text>
      </Stack>
    </Container>
  )
}
