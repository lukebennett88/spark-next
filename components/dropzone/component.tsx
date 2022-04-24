import { Dropzone } from '@spark-web/dropzone'
import { Field } from '@spark-web/field'

import { Section } from '../example-helpers'

export default function DropzoneSection() {
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
