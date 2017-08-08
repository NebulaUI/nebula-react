import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Label />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Label className="test" htmlFor="t" />)
    expect($.hasClass('c-label test')).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Label className="test" htmlFor="test" />)
    expect($.prop('htmlFor')).toBe('test')
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.Label id="foo" htmlFor="t" />)
    expect($.prop('id')).toBe('foo')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.Label htmlFor="t">
        test
      </Form.Label>
    )
    expect($.contains('test')).toBe(true)
  })
})
