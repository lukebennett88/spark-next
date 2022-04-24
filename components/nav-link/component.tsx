import {
  HomeIcon,
  ClipboardListIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChartSquareBarIcon,
  CogIcon,
} from '@spark-web/icon'
import { NavLink } from '@spark-web/nav-link'
import { Stack } from '@spark-web/stack'

import { Section } from '../example-helpers'

export default function NavLinkSection() {
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
