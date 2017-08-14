import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.RadioInput />', () => {
  it('renders the appropriate classNames and type', () => {
    const $ = shallow(<Form.RadioInput id="test-radio-1" name="test-radio-group" className="test" />)
    expect($.hasClass('c-form-input__input test')).toBe(true)
    expect($.prop('type')).toBe('radio')
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.RadioInput id="test-radio-1" name="test-radio-group" value="foo" />)
    expect($.prop('id')).toBe('test-radio-1')
    expect($.prop('value')).toBe('foo')
    expect($.prop('name')).toBe('test-radio-group')
  })

  it('renders selected', () => {
    const $ = shallow(<Form.RadioInput id="test-radio-1" name="test-radio-group" checked />)
    expect($.prop('checked')).toBe(true)
  })

  it('renders in a disselected state', () => {
    const $ = shallow(<Form.RadioInput id="test-radio-1" name="test-radio-group" />)
    expect($.prop('checked')).toBe(undefined)
  })

  it('renders with `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.RadioInput id="test-radio-1" name="test-radio-group" disabled />)
    expect($.prop('disabled')).toBe(true)
  })

  it('takes a onChange prop passing it to <Form.CheckboxInput />', () => {
    const testFn = jest.fn()
    const $ = shallow(
      <Form.CheckboxInput id="test-checkbox-1" onChange={testFn} >
        _
      </Form.CheckboxInput>)
    expect($.prop('onChange')).toBe(testFn)
  })
})
