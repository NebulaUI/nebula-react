import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.RadioWrapper id="radio-1" name="radio-group" />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.RadioWrapper className="test" />)
    expect($.hasClass('c-form-input test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.RadioWrapper>
        Test container children
      </Form.RadioWrapper>)
    expect($.contains('Test container children')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Form.RadioWrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Form.RadioWrapper />)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Form.RadioWrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.RadioWrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
