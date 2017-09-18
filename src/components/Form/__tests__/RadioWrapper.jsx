import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Form } from '../'

describe('<Form.RadioWrapper id="radio-1" name="radio-group" />', () => {
  it('renders the appropriate classNames', () => {
    const $ = shallow(<Form.RadioWrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}c-form-input ${NAMESPACE}test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.RadioWrapper>
        Test container children
      </Form.RadioWrapper>)
    expect($.contains('Test container children')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Form.RadioWrapper tag="article" />)
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
