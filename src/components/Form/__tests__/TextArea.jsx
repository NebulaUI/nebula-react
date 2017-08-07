import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.TextArea />', () => {
  it.only('renders with appropriate id', () => {
    const $ = shallow(<Form.TextArea id="text-input-3" />)
    expect($.prop('id')).toBe('text-input-3')
  })
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.TextArea className="test" />)
    expect($.hasClass('c-text-input c-text-input--textarea test')).toBe(true)
  })
  it('renders with appropriate placeholder text', () => {
    const $ = shallow(<Form.TextArea placeholder="Your message…" />)
    expect($.prop('placeholder')).toEqual('Your message…')
  })
})
