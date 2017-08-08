import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Checkbox.Input />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.Checkbox.Input className="test" />)
    expect($.hasClass('c-form-input__input test')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.Checkbox.Input id="check-1" type="checkbox" value />)
    expect($.prop('id')).toBe('check-1')
    expect($.prop('type')).toBe('checkbox')
    expect($.prop('value')).toBe(true)
  })

  it('renders a `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.Checkbox.Input disabled value="off" />)
    expect($.prop('disabled')).toBe(true)
    expect($.prop('value')).toBe('off')
  })

  it('renders a `checked` attr and is selected', () => {
    const $ = shallow(<Form.Checkbox.Input checked value="on" />)
    expect($.prop('checked')).toBe(true)
    expect($.prop('value')).toBe('on')
  })

  it('renders a `checked` and a `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.Checkbox.Input checked disabled value="off" />)
    expect($.prop('checked')).toBe(true)
    expect($.prop('disabled')).toBe(true)
    expect($.prop('value')).toBe('off')
  })
})
