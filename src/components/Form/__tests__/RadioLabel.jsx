import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.RadioLabel id="radio-1" name="radio-group" />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.RadioLabel className="test" id="radio-1" htmlFor="radio-1" />)
    expect($.hasClass('c-form-input__label c-form-input__label--radio test')).toBe(true)
  })

  it('renders with a htmlFor prop aliased to `id`', () => {
    const $ = shallow(<Form.RadioLabel id="radio-1" />)
    expect($.prop('htmlFor')).toBe('radio-1')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.RadioLabel id="radio-1">
        Test label children
      </Form.RadioLabel>
    )
    expect($.contains('Test label children')).toBe(true)
  })
})
