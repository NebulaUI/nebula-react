import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { SiteWrap } from '../'

describe('<SiteWrap />', () => {
  it('renders with padding', () => {
    const $ = shallow(<SiteWrap padding />)
    expect($.hasClass(`${NAMESPACE}o-site-wrap ${NAMESPACE}o-site-wrap--padding`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<SiteWrap className="test" />)
    expect($.hasClass(`${NAMESPACE}o-site-wrap ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <SiteWrap style={{ position: 'relative' }} ariaHidden="true">
        _
      </SiteWrap>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(
      <SiteWrap>
        <div className="child" />
      </SiteWrap>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<SiteWrap tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<SiteWrap />)
    expect($.type()).toBe('div')
  })
})
