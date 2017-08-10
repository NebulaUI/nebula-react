import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.RadioInput id="radio-1" name="radio-group" />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.RadioInput id="radio-1" name="radio-group" className="test" />)
    expect($.hasClass('c-form-input__input test')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.RadioInput id="radio-1" name="radio-group" type="radio" value="foo" />)
    expect($.prop('id')).toBe('radio-1')
    expect($.prop('type')).toBe('radio')
    expect($.prop('value')).toBe('foo')
    expect($.prop('name')).toBe('radio-group')
  })

  it('renders selected', () => {
    const $ = shallow(<Form.RadioInput id="radio-1" name="radio-group" checked />)
    expect($.prop('checked')).toBe(true)
  })

  // it('renders in a disselected state', () => {
  //   const $ = shallow(<Form.RadioInput id="radio-1" name="radio-group" />)
  //   expect($.prop('checked')).toBe(false)
  // })

  it('renders a `checked` and a `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.RadioInput id="radio-1" name="radio-group" checked disabled />)
    expect($.prop('checked')).toBe(true)
    expect($.prop('disabled')).toBe(true)
  })
})
