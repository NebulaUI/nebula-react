import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { ProgressBar } from '../'

describe('<ProgressBar.Wrapper />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<ProgressBar.Wrapper className="test">_</ProgressBar.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-progress-bar`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<ProgressBar.Wrapper tag="article">_</ProgressBar.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<ProgressBar.Wrapper>_</ProgressBar.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ProgressBar.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </ProgressBar.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<ProgressBar.Wrapper>test child</ProgressBar.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })
})
