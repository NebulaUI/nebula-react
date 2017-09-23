import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

describe('<Table.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(<Table.Wrapper>test child</Table.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </Table.Wrapper>
    )
    expect($.prop('style')).toEqual({ position: 'relative' })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.Wrapper className="test">_</Table.Wrapper>
    )
    expect($.hasClass(`${NAMESPACE}c-table-container`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Table.Wrapper>_</Table.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Table.Wrapper tag="article">_</Table.Wrapper>)
    expect($.type()).toBe('article')
  })
})
