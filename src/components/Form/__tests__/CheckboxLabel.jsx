import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Checkbox.Label />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Checkbox.Label className="test" />)
    expect($.hasClass('c-form-input__label c-form-input__label--checkbox test')).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Checkbox.Label htmlFor="test" />)
    expect($.prop('htmlFor')).toBe('test')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.Checkbox.Label htmlFor="test">
        Test label children
      </Form.Checkbox.Label>
    )
    expect($.contains('Test label children')).toBe(true)
  })
})

//TODO - test currently failing because of the below!
// Warning: Failed prop type: The prop `htmlFor` is marked as required in `CheckboxLabel`, but its value is `undefined`.
//   in CheckboxLabel
