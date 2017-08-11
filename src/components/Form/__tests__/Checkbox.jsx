import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Checkbox />', () => {
  it('renders <Form.CheckboxInput /> && <Form.CheckboxLabel /> in the correct order', () => {
    const $ = shallow(<Form.Checkbox id="test-checkbox-1">_</Form.Checkbox>)
    expect($.childAt(0).type()).toBe(Form.CheckboxInput)
    expect($.childAt(1).type()).toBe(Form.CheckboxLabel)
  })

  it('renders <Form.CheckboxInput /> with an id, checked, disabled and name prop', () => {
    const $ = shallow(<Form.Checkbox id="test-checkbox-1" checked disabled>_</Form.Checkbox>)
    expect($.find(Form.CheckboxInput).prop('id')).toBe('test-checkbox-1')
    expect($.find(Form.CheckboxInput).prop('checked')).toBe(true)
    expect($.find(Form.CheckboxInput).prop('disabled')).toBe(true)

    const $$ = shallow(<Form.Checkbox id="test-checkbox-1" name="test-checkbox-group">_</Form.Checkbox>)
    expect($$.find(Form.CheckboxInput).prop('checked')).toBe(undefined)
    expect($$.find(Form.CheckboxInput).prop('disabled')).toBe(undefined)
  })

  it('renders <Form.CheckboxLabel /> with an htmlFor prop aliased from "id"', () => {
    const $ = shallow(<Form.Checkbox id="test-checkbox-1">_</Form.Checkbox>)
    expect($.find(Form.CheckboxLabel).prop('htmlFor')).toBe('test-checkbox-1')
  })

  it('renders children inside <Form.CheckboxLabel />', () => {
    const $ = shallow(
      <Form.Checkbox id="test-checkbox-1" name="test-checkbox-group">
        hello test
      </Form.Checkbox>
    )
    expect($.find(Form.CheckboxLabel).contains('hello test')).toBe(true)
  })

  it('takes a handleChange prop passing it to <Form.CheckboxInput />', () => {
    const testFn = jest.fn()
    const $ = shallow(<Form.Checkbox id="test-checkbox-1" onChange={testFn} >_</Form.Checkbox>)
    expect($.find(Form.CheckboxInput).prop('onChange')).toBe(testFn)
  })

  it('renders with attributes on <Form.CheckboxWrapper />', () => {
    const $ = shallow(
      <Form.Checkbox id="test" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.Checkbox>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
