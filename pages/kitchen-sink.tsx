import { Accordion, AccordionItem } from '@spark-web/accordion'
import { Alert } from '@spark-web/alert'
import { Box } from '@spark-web/box'
import { Button } from '@spark-web/button'
import { Checkbox } from '@spark-web/checkbox'
import { Columns } from '@spark-web/columns'
import { Container } from '@spark-web/container'
import { Divider } from '@spark-web/divider'
import { Dropzone } from '@spark-web/dropzone'
import { Field } from '@spark-web/field'
import { Fieldset } from '@spark-web/fieldset'
import { Heading } from '@spark-web/heading'
import { Hidden } from '@spark-web/hidden'
import type { IconProps } from '@spark-web/icon'
import * as iconPackage from '@spark-web/icon'
import { Inline } from '@spark-web/inline'
import { ContentDialog } from '@spark-web/modal-dialog'
import { NavLink } from '@spark-web/nav-link'
import { Radio } from '@spark-web/radio'
import { Row } from '@spark-web/row'
import { Select } from '@spark-web/select'
import { Stack } from '@spark-web/stack'
import { Text } from '@spark-web/text'
import { TextArea } from '@spark-web/text-area'
import { TextInput } from '@spark-web/text-input'
import { TextLink } from '@spark-web/text-link'
import { TextList } from '@spark-web/text-list'
import Head from 'next/head'

import { InlineCode, Placeholder } from '../components/example-helpers'

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

function Section({
  children,
  heading,
}: {
  children: React.ReactNode
  heading: string
}) {
  return (
    <Stack gap="large">
      <Heading level="2">{heading}</Heading>
      {children}
    </Stack>
  )
}

function AccordionSection() {
  return (
    <Section heading="Accordion">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" label="What is this?" level="4">
          <Text>This is an example accordion</Text>
        </AccordionItem>
        <AccordionItem value="item-2" label="Should I click this?" level="4">
          <Text>Yes</Text>
        </AccordionItem>
        <AccordionItem value="item-3" label="What is in it for me?" level="4">
          <Text>A nice accordion</Text>
        </AccordionItem>
      </Accordion>
    </Section>
  )
}

function AlertSection() {
  return (
    <Section heading="Alert">
      <Alert tone="caution" heading="This is a caution alert">
        Caution message
      </Alert>
      <Alert tone="positive" heading="This is a positive alert">
        Positive message
      </Alert>
      <Alert tone="info" heading="This is an info alert">
        Info message
      </Alert>
      <Alert tone="critical" heading="This is a critical alert">
        Critical message
      </Alert>
    </Section>
  )
}

function BoxSection() {
  return (
    <Section heading="Box">
      <Box display="flex">
        <Box padding="large" margin="large" background="primary">
          <Text>hi</Text>
        </Box>
        <Box padding="large" margin="large" background="primary">
          <Text>there</Text>
        </Box>
        <Box padding="large" margin="large" background="primary">
          <Text>friend</Text>
        </Box>
      </Box>
    </Section>
  )
}

const { LightBulbIcon } = iconPackage

function ButtonSection() {
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

function CheckboxSection() {
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

function ColumnsSection() {
  return (
    <Section heading="Columns">
      <Stack gap="medium" dividers>
        <Columns gap="small" alignY="top">
          <Placeholder />
          <Placeholder label="top (default)" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="center">
          <Placeholder />
          <Placeholder label="center" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="bottom">
          <Placeholder />
          <Placeholder label="bottom" height={64} />
          <Placeholder />
        </Columns>
        <Columns gap="small" alignY="stretch">
          <Placeholder />
          <Placeholder label="stretch" height={64} />
          <Placeholder />
        </Columns>
      </Stack>
    </Section>
  )
}

function ContainerSection() {
  return (
    <Section heading="Container">
      <Container size="xsmall">
        <Placeholder label="xsmall" height={64} />
      </Container>
      <Container size="small">
        <Placeholder label="small" height={64} />
      </Container>
      <Container size="medium">
        <Placeholder label="medium" height={64} />
      </Container>
      <Container size="large">
        <Placeholder label="large" height={64} />
      </Container>
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

function DividerSection() {
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

function DropzoneSection() {
  return (
    <Section heading="Dropzone">
      <Field
        label="Upload image"
        description="Drop an image here to see a preview"
      >
        <Dropzone accept="image/jpeg" showImageThumbnails />
      </Field>
    </Section>
  )
}

function FieldSection() {
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

function FieldsetSection() {
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

function HeadingSection() {
  return (
    <Section heading="Heading">
      <Columns>
        <Stack dividers gap="large">
          <Heading level="1">Heading level 1</Heading>
          <Heading level="2">Heading level 2</Heading>
          <Heading level="3">Heading level 3</Heading>
          <Heading level="4">Heading level 4</Heading>
        </Stack>
        <Stack dividers>
          <Heading level="1">Heading level 1</Heading>
          <Heading level="2">Heading level 2</Heading>
          <Heading level="3">Heading level 3</Heading>
          <Heading level="4">Heading level 4</Heading>
        </Stack>
      </Columns>
    </Section>
  )
}

function HiddenSection() {
  return (
    <Section heading="Hidden">
      <Stack gap="small">
        <Hidden below="wide">
          <Placeholder label="1. Hidden below wide" height={64} />
        </Hidden>
        <Hidden below="desktop">
          <Placeholder label="2. Hidden below desktop" height={64} />
        </Hidden>
        <Hidden below="tablet">
          <Placeholder label="3. Hidden below tablet" height={64} />
        </Hidden>
        <Hidden above="mobile">
          <Placeholder label="4. Hidden above mobile" height={64} />
        </Hidden>
        <Hidden above="tablet">
          <Placeholder label="5. Hidden above tablet" height={64} />
        </Hidden>
        <Hidden above="desktop">
          <Placeholder label="6. Hidden above desktop" height={64} />
        </Hidden>
      </Stack>
    </Section>
  )
}

const { createIcon, ...icons } = iconPackage
function IconsSection() {
  return (
    <Section heading="Icons">
      <Inline gap="large">
        {Object.values(icons).map(
          (Icon: { (props: IconProps): JSX.Element; displayName: string }) => (
            <Icon key={Icon.displayName} size="xsmall" />
          )
        )}
      </Inline>
    </Section>
  )
}

function InlineSection() {
  return (
    <Section heading="Inline">
      <Stack gap="medium" align="center" dividers>
        <Inline gap="small" alignY="top">
          <Placeholder />
          <Placeholder label="top" height={64} width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" alignY="center">
          <Placeholder />
          <Placeholder label="center" height={64} width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" alignY="bottom">
          <Placeholder />
          <Placeholder label="bottom" height={64} width={128} />
          <Placeholder />
        </Inline>
      </Stack>
      <Stack gap="medium" dividers>
        <Inline gap="small" align="left">
          <Placeholder label="left" width={128} />
          <Placeholder />
          <Placeholder />
        </Inline>
        <Inline gap="small" align="center">
          <Placeholder />
          <Placeholder label="center" width={128} />
          <Placeholder />
        </Inline>
        <Inline gap="small" align="right">
          <Placeholder />
          <Placeholder />
          <Placeholder label="right" width={128} />
        </Inline>
      </Stack>
    </Section>
  )
}

function ContentDialogSection() {
  return (
    <Section heading="Content Dialog">
      <ContentDialog
        title="Title"
        description="Uncontrolled Content Dialog example"
        trigger={
          <Box>
            <Button>Open dialog</Button>
          </Box>
        }
      >
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          optio molestiae dolorem qui omnis reiciendis dignissimos numquam
          aperiam, rem natus, totam, repudiandae cum voluptatibus quos? Dicta,
          odio! Accusantium, reiciendis quidem.
        </Text>
      </ContentDialog>
    </Section>
  )
}

const {
  HomeIcon,
  ClipboardListIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChartSquareBarIcon,
  CogIcon,
} = iconPackage
function NavLinkSection() {
  return (
    <Section heading="NavLink">
      <Stack as="nav" gap="small">
        <NavLink href="#" isSelected>
          <HomeIcon />
          Dashboard
        </NavLink>
        <NavLink href="#">
          <ClipboardListIcon />
          Applications
        </NavLink>
        <NavLink href="#">
          <BriefcaseIcon />
          Leads
        </NavLink>
        <NavLink href="#">
          <AcademicCapIcon />
          Training
        </NavLink>
        <NavLink href="#">
          <ChartSquareBarIcon />
          Analytics
        </NavLink>
        <NavLink href="#">
          <CogIcon />
          Settings
        </NavLink>
      </Stack>
    </Section>
  )
}

function RadioSection() {
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

function RowSection() {
  return (
    <Section heading="Row">
      <Inline gap="xxlarge">
        <Row gap="small">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="medium">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="large">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
        <Row gap="xlarge">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Row>
      </Inline>
    </Section>
  )
}

function SelectSection() {
  return (
    <Section heading="Select">
      <Field label="Choose your favourite character">
        <Select
          placeholder="TV Characters"
          options={[
            {
              label: 'Mad Men',
              options: [
                { label: 'Don Draper', value: 'don-draper' },
                { label: 'Peggy Olson', value: 'peggy-olson' },
                { label: 'Joan Harris', value: 'joan-harris' },
                { label: 'Roger Sterling', value: 'roger-sterling' },
                { label: 'Pete Campbell', value: 'pete-campbell' },
              ],
            },
            {
              label: 'Breaking Bad',
              options: [
                { label: 'Walter White', value: 'walter-white' },
                { label: 'Jesse Pinkman', value: 'jesse-pinkman' },
                { label: 'Saul Goodman', value: 'saul-goodman' },
                { label: 'Gus Fring', value: 'gus-fring' },
                { label: 'Hank Schrader', value: 'hank-schrader' },
                { label: 'Mike Ehrmantraut', value: 'mike-ehrmantraut' },
              ],
            },
          ]}
        />
      </Field>
    </Section>
  )
}

function StackSection() {
  return (
    <Section heading="Stack">
      <Columns gap="large">
        <Stack gap="large">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
        <Stack gap="large" dividers>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Stack>
      </Columns>
    </Section>
  )
}

function TextSection() {
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

function TextAreaSection() {
  return (
    <Section heading="TextArea">
      <Field label="Add some text">
        <TextArea placeholder="This is a textarea" />
      </Field>
    </Section>
  )
}

function TextInputSection() {
  return (
    <Section heading="TextInput">
      <Field label="Label">
        <TextInput />
      </Field>
    </Section>
  )
}

function TextLinkSection() {
  return (
    <Section heading="TextLink">
      <Text>
        This is some text containing a <TextLink href="#">text link</TextLink>
      </Text>
    </Section>
  )
}

const { CheckCircleIcon } = iconPackage
function TextListSection() {
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
