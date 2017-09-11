import React from 'react'
import { shallow } from 'enzyme'

import { Section } from '../'

describe('<Section />', () => {
  it('takes a single size', () => {
    const $ = shallow(<Section size="lg" />)
    expect($.hasClass('o-section-lg')).toBe(true)
  })

  it('takes a list of sizes', () => {
    const sizes = ['sm', 'md@sm']
    const $ = shallow(<Section size={sizes} />)
    expect($.hasClass('o-section-sm o-section-md@sm')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Section>
        <div className="child" />
      </Section>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Section tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Section />)
    expect($.type()).toBe('section')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<Section className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Section style={{ position: 'relative' }} ariaHidden="true">
        _
      </Section>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
