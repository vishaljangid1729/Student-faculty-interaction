import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const stateOptions = [
    { key: 'coed', text: 'Computer', value: 'computer' },
    { key: 'med', text: 'Mechanical', value: 'mechanical' },
    { key: 'ched', text: 'Chemical', value: 'chemical' },
    { key: 'ced', text: 'Civil', value: 'civil' },
    { key: 'eed', text: 'Electrical ', value: 'electrical' },
    { key: 'ecd', text: 'Electronic', value: 'electronic' },
    { key: 'chem', text: 'Applied', value: 'chemistry' },
    { key: 'phy', text: 'Applied Physics', value: 'physics' },
    { key: 'math', text: 'Applied Math. & Humanities', value: 'math' },
    { key: 'mech', text: 'Applied Mechanics', value: 'mechanics' }
]

const Filter = () => (
  <Dropdown
    placeholder='Departments'
    fluid
    multiple
    search
    selection
    options={stateOptions}
  />
)

export default Filter