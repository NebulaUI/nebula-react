import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { MatrixList } from '../'

describe('<MatrixList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<MatrixList.Wrapper spacing="md" />)
    expect($.hasClass(`${NAMESPACE}o-matrix-list ${NAMESPACE}o-matrix-list-md`)).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['md', 'md@sm']
    const $ = shallow(<MatrixList.Wrapper spacing={spacing} />)
    expect($.hasClass(`${NAMESPACE}o-matrix-list ${NAMESPACE}o-matrix-list-md ${NAMESPACE}o-matrix-list-md@sm`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <MatrixList.Wrapper>
        <div className="child" />
      </MatrixList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<MatrixList.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<MatrixList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<MatrixList.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}o-matrix-list ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <MatrixList.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </MatrixList.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
