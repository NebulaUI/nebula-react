import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Section } from '../'

describe('<Section />', () => {
  it('renders the user defined className', () => {
    const $ = shallow(<Section className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('takes a single size', () => {
    const $ = shallow(<Section size="md" />)
    expect($.hasClass(`${NAMESPACE}o-section-md`)).toBe(true)
  })

  it('takes a list of sizes', () => {
    const sizes = ['sm', 'md@sm']
    const $ = shallow(<Section size={sizes} />)
    expect($.hasClass(`${NAMESPACE}o-section-sm ${NAMESPACE}o-section-md@sm`)).toBe(true)
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
