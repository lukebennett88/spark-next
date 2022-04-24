import { Container } from '@spark-web/container'
import { Heading } from '@spark-web/heading'
import { Stack } from '@spark-web/stack'
import Head from 'next/head'

import { AccordionSection } from '../components/accordion'
import { AlertSection } from '../components/alert'
import { BoxSection } from '../components/box'
import { ButtonSection } from '../components/button'
import { CheckboxSection } from '../components/checkbox'
import { ColumnsSection } from '../components/columns'
import { ContainerSection } from '../components/container'
import { DividerSection } from '../components/divider'
import { DropzoneSection } from '../components/dropzone'
import { FieldSection } from '../components/field'
import { FieldsetSection } from '../components/fieldset'
import { HeadingSection } from '../components/heading'
import { HiddenSection } from '../components/hidden'
import { IconsSection } from '../components/icon'
import { InlineSection } from '../components/inline'
import { ContentDialogSection } from '../components/modal-dialog'
import { NavLinkSection } from '../components/nav-link'
import { RadioSection } from '../components/radio'
import { RowSection } from '../components/row'
import { SelectSection } from '../components/select'
import { StackSection } from '../components/stack'
import { TextSection } from '../components/text'
import { TextAreaSection } from '../components/text-area'
import { TextInputSection } from '../components/text-input'
import { TextLinkSection } from '../components/text-link'
import { TextListSection } from '../components/text-list'

export default function Home() {
  return (
    <Container size="medium">
      <Head>
        <title>Kitchen Sink: Spark Web</title>
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
        <AccordionSection />
        <AlertSection />
        <BoxSection />
        <ButtonSection />
        <CheckboxSection />
        <ColumnsSection />
        <ContainerSection />
        <DividerSection />
        <DropzoneSection />
        <FieldSection />
        <FieldsetSection />
        <HeadingSection />
        <HiddenSection />
        <IconsSection />
        <InlineSection />
        <ContentDialogSection />
        <NavLinkSection />
        <RadioSection />
        <RowSection />
        <SelectSection />
        <StackSection />
        <TextSection />
        <TextAreaSection />
        <TextInputSection />
        <TextLinkSection />
        <TextListSection />
      </Stack>
    </Container>
  )
}
