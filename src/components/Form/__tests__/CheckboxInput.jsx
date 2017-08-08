import React from 'react'
import { shallow } from 'enzyme'
import { classNames } from '../../utils/'

import { Form } from '../'

describe('<Form.Checkbox />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.Checkbox className="test" />)
    expect($.hasClass('c-form-input test')).toBe(true)
  })
})
