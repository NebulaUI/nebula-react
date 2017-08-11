import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Select />', () => {
  it('renders the appropriate className', () => {
    const $ = shallow(<Form.Select className="test" />)
    expect($.hasClass('c-select test')).toBe(true)
  })

  it('renders children inside <Form.Select />', () => {
    const $ = shallow(
      <Form.Select>
        select children test
      </Form.Select>
    )
    expect($.find(Form.Select).contains('select children test')).toBe(true)
  })
})
