import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Grid } from '../'

describe('<Grid.Wrapper />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Grid.Wrapper>
        <div className="test" />
      </Grid.Wrapper>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Grid.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Grid.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Grid.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Grid.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Grid.Wrapper />)
    expect($.type()).toBe('div')
  })

  it('takes a single gutter size', () => {
    const $ = shallow(<Grid.Wrapper gutter="md" />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--gutter-md`)).toBe(true)
  })


  it('takes an array of gutter sizes', () => {
    const $ = shallow(<Grid.Wrapper gutter={['md@sm', 'lg@md']} />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--gutter-md@sm ${NAMESPACE}o-grid--gutter-lg@md`)).toBe(true)
  })

  it('renders a matrix', () => {
    const $ = shallow(<Grid.Wrapper matrix />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--matrix`)).toBe(true)
  })

  it('renders equal height items', () => {
    const $ = shallow(<Grid.Wrapper equalHeight />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--equal-height`)).toBe(true)
  })

  it('renders items in reverse order', () => {
    const $ = shallow(<Grid.Wrapper reverse />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--reverse`)).toBe(true)
  })

  it('renders items vertically aligned to the center', () => {
    const $ = shallow(<Grid.Wrapper align="center" />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--center`)).toBe(true)
  })

  it('renders items vertically aligned to the bottom', () => {
    const $ = shallow(<Grid.Wrapper align="bottom" />)
    expect($.hasClass(`${NAMESPACE}o-grid ${NAMESPACE}o-grid--bottom`)).toBe(true)
  })
})
