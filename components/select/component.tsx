import { Field } from '@spark-web/field'
import { Select } from '@spark-web/select'

import { Section } from '../example-helpers'

export default function SelectSection() {
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
