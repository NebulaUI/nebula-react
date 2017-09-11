import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.CheckboxWrapper />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.CheckboxWrapper className="test" />)
    expect($.hasClass('c-form-input test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.CheckboxWrapper>
        Test container children
      </Form.CheckboxWrapper>)
    expect($.contains('Test container children')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Form.CheckboxWrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Form.CheckboxWrapper />)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Form.CheckboxWrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.CheckboxWrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
