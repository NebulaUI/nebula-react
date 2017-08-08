import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.TextArea />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.TextArea className="test" />)
    expect($.hasClass('c-text-input c-text-input--textarea test')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.TextArea placeholder="test" id="foo" />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('id')).toBe('foo')
  })
})
