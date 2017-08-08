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
})
