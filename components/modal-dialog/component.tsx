import { Box } from '@spark-web/box'
import { Button } from '@spark-web/button'
import { ContentDialog } from '@spark-web/modal-dialog'
import { Text } from '@spark-web/text'

import { Section } from '../example-helpers'

export default function ContentDialogSection() {
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
