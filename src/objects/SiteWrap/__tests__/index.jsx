import React from 'react'
import { shallow } from 'enzyme'

import { SiteWrap } from '../'

describe('<SiteWrap />', () => {
  it('renders with the correct classname', () => {
    const $ = shallow(<SiteWrap />)
    expect($.prop('className')).toBe('o-site-wrap')
  })

  it('renders with padding', () => {
    const $ = shallow(<SiteWrap padding />)
    expect($.prop('className')).toBe('o-site-wrap o-site-wrap--padding')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<SiteWrap className="test" />)
    expect($.prop('className')).toBe('o-site-wrap test')
  })

  it('renders children', () => {
    const $ = shallow(
      <SiteWrap>
        <div className="child" />
      </SiteWrap>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<SiteWrap node="article" />)
    expect($.type()).toBe('article')
  })
})
