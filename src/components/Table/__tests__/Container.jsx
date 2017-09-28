import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

describe('<Table.Container />', () => {
  it('renders children', () => {
    const $ = shallow(<Table.Container>test child</Table.Container>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Container style={{ position: 'relative' }} ariaHidden>
        _
      </Table.Container>
    )
    expect($.prop('style')).toEqual({ position: 'relative' })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.Container className="test">_</Table.Container>
    )
    expect($.hasClass(`${NAMESPACE}c-table-container`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Table.Container>_</Table.Container>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Table.Container tag="article">_</Table.Container>)
    expect($.type()).toBe('article')
  })
})
