import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Radio id="radio-1" name="radio-group" />', () => {
  it('renders radioInput && RadioLabel with ids', () => {
    const $ = shallow(<Form.Radio id="radio-1" name="radio-group">_</Form.Radio>)
    expect($.childAt(0).type()).toBe(Form.RadioInput)
    expect($.childAt(0).prop('id')).toBe('radio-1')
    expect($.childAt(0).prop('name')).toBe('radio-group')

    expect($.childAt(1).type()).toBe(Form.RadioLabel)
    expect($.childAt(1).prop('id')).toBe('radio-1')
  })

  it('renders children inside RadioLabel', () => {
    const $ = shallow(
      <Form.Radio id="radio-1" name="radio-group">
        hello test
      </Form.Radio>
    )
    expect($.find(Form.RadioLabel).contains('hello test')).toBe(true)
  })
})
