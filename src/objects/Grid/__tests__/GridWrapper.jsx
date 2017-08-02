import React from 'react'
import { shallow } from 'enzyme'

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
    expect($.hasClass('o-grid test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Grid.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('takes a gutter size', () => {
    const $ = shallow(<Grid.Wrapper gutter="md" />)
    expect($.hasClass('o-grid o-grid--gutter-md')).toBe(true)
  })

  it('takes an array of gutter sizes', () => {
    const $ = shallow(<Grid.Wrapper gutter={['md@sm', 'lg@md']} />)
    expect($.hasClass('o-grid o-grid--gutter-md@sm o-grid--gutter-lg@md')).toBe(true)
  })

  it('renders a matrix', () => {
    const $ = shallow(<Grid.Wrapper matrix />)
    expect($.hasClass('o-grid o-grid--matrix')).toBe(true)
  })

  it('renders equal height items', () => {
    const $ = shallow(<Grid.Wrapper equalHeight />)
    expect($.hasClass('o-grid o-grid--equal-height')).toBe(true)
  })

  it('renders items in reverse order', () => {
    const $ = shallow(<Grid.Wrapper reverse />)
    expect($.hasClass('o-grid o-grid--reverse')).toBe(true)
  })

  it('renders items vertically aligned to the center', () => {
    const $ = shallow(<Grid.Wrapper align="center" />)
    expect($.hasClass('o-grid o-grid--center')).toBe(true)
  })

  it('renders items vertically aligned to the bottom', () => {
    const $ = shallow(<Grid.Wrapper align="bottom" />)
    expect($.hasClass('o-grid o-grid--bottom')).toBe(true)
  })
})
