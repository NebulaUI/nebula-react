import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

const defaultContext = { tableSortedBy: { index: 0 } }

describe('<Table.Header />', () => {
  it('renders children', () => {
    const $ = shallow(<Table.Header>test child</Table.Header>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Header style={{ position: 'relative' }} ariaHidden>
        _
      </Table.Header>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.Header className="test">_</Table.Header>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__header`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table__header--hover-row-highlight`)).toBe(false)
  })

  it('allows rows to be highlighted when hovered', () => {
    const $ = shallow(
      <Table.Header hoverRowHighlight>_</Table.Header>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__header--hover-row-highlight`)).toBe(true)
  })

  it('renders a sorted by aria label if the table is sorted', () => {
    const context = {
      ...defaultContext,
      tableSortedBy: { index: 0 }
    }
    const $ = shallow(
      <Table.Header hoverRowHighlight>_</Table.Header>
    , { context })
    expect($.prop('aria-label')).toBe('Sorted by')
  })

  it('does not render a sorted by aria label if the table is unsorted', () => {
    const context = {
      ...defaultContext,
      tableSortedBy: { index: -1 }
    }
    const $ = shallow(
      <Table.Header hoverRowHighlight>_</Table.Header>
    , { context })
    expect($.prop('aria-label')).not.toBe('Sorted by')
  })
})
