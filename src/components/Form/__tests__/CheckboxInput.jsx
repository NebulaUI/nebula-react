import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.CheckboxInput />', () => {
  it('renders the appropriate classNames and type', () => {
    const $ = shallow(<Form.CheckboxInput id="test-checkbox-1" className="test" />)
    expect($.hasClass('c-form-input__input test')).toBe(true)
    expect($.prop('type')).toBe('checkbox')
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.CheckboxInput id="test-checkbox-1" value="foo" />)
    expect($.prop('id')).toBe('test-checkbox-1')
    expect($.prop('value')).toBe('foo')
  })

  it('renders selected', () => {
    const $ = shallow(<Form.CheckboxInput id="test-checkbox-1" checked />)
    expect($.prop('checked')).toBe(true)
  })

  it('renders in a disselected state', () => {
    const $ = shallow(<Form.CheckboxInput id="test-checkbox-1" />)
    expect($.prop('checked')).toBe(undefined)
  })

  it('renders with `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.CheckboxInput id="test-checkbox-1" disabled />)
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
