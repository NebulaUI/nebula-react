import React from 'react'
import { shallow } from 'enzyme'

import { MatrixList } from '../'

describe('<MatrixList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<MatrixList.Wrapper spacing="md" />)
    expect($.hasClass('o-matrix-list o-matrix-list-md')).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['sm', 'md@sm']
    const $ = shallow(<MatrixList.Wrapper spacing={spacing} />)
    expect($.hasClass('o-matrix-list o-matrix-list-sm o-matrix-list-md@sm')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <MatrixList.Wrapper>
        <div className="child" />
      </MatrixList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<MatrixList.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<MatrixList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<MatrixList.Wrapper />)
    expect($.hasClass('o-matrix-list')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<MatrixList.Wrapper className="test" />)
    expect($.hasClass('o-matrix-list test')).toBe(true)
  })
})
