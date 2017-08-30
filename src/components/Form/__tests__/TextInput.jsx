import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.TextInput />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.TextInput className="test" />)
    expect($.hasClass('c-text-input test')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.TextInput placeholder="test" id="foo" />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('id')).toBe('foo')
  })

  it('renders with type "text" by default', () => {
    const $ = shallow(<Form.TextInput />)
    expect($.prop('type')).toBe('text')
  })

  it('renders with a defined type', () => {
    const $ = shallow(<Form.TextInput type="password" />)
    expect($.prop('type')).toBe('password')
  })

  it('renders small', () => {
    const $ = shallow(<Form.TextInput small />)
    expect($.hasClass('c-text-input c-text-input--sm')).toBe(true)
  })
})
