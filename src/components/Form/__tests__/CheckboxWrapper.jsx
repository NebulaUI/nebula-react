import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Checkbox.Wrapper />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.Checkbox.Wrapper className="test" />)
    expect($.hasClass('c-form-input test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.Checkbox.Wrapper>
        Test container children
      </Form.Checkbox.Wrapper>)
    expect($.contains('Test container children')).toBe(true)
  })
})
