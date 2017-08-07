import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.TextInput />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.TextInput className="test" />)
    expect($.hasClass('c-text-input test')).toBe(true)
  })
})
