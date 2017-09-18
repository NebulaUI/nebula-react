import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Form } from '../'

describe('<Form.Label />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Label className="test" htmlFor="t" />)
    expect($.hasClass(`${NAMESPACE}c-label ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Label className="test" htmlFor="test" />)
    expect($.prop('htmlFor')).toBe('test')
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Label htmlFor="t" />)
    expect($.prop('htmlFor')).toBe('t')
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
