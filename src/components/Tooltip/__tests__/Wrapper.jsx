import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Tooltip } from '../'

describe('<Tooltip.Wrapper />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<Tooltip.Wrapper className="something else">_</Tooltip.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-tooltip`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Tooltip.Wrapper tag="article">_</Tooltip.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tooltip.Wrapper>_</Tooltip.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tooltip.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </Tooltip.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Tooltip.Wrapper>test child</Tooltip.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })
})
