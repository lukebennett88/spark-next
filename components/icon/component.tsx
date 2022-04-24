import * as iconPackage from '@spark-web/icon'
import { IconProps } from '@spark-web/icon'
import { Inline } from '@spark-web/inline'

import { Section } from '../example-helpers'

export default function IconsSection() {
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

const { createIcon: UNUSED_CREATE_ICON, ...icons } = iconPackage
