import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Form } from '../'

describe('<Form.Textarea />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Textarea className="test" />)
    expect($.hasClass(`${NAMESPACE}c-text-input ${NAMESPACE}c-text-input--textarea`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.Textarea placeholder="test" id="foo" />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('id')).toBe('foo')
  })
})
