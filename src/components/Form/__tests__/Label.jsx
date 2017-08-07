import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Label />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Label className="test" />)
    expect($.hasClass('c-label test')).toBe(true)
  })
  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Label className="test" htmlFor="text-input-1" />)
    expect($.prop('htmlFor')).toBe('text-input-1')
  })
})
