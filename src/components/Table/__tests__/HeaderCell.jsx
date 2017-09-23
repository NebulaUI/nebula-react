import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

const defaultContext = { tableGetColumnValues: jest.fn() }

describe('<Table.HeaderCell />', () => {
  it('renders children', () => {
    const $ = shallow(<Table.HeaderCell>test child</Table.HeaderCell>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.HeaderCell style={{ position: 'relative' }} ariaHidden>
        _
      </Table.HeaderCell>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.HeaderCell className="test">_</Table.HeaderCell>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__header-cell`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table__header-cell--sortable`)).toBe(false)
  })

  it('renders with a sortable className if the child is a sort button', () => {
    const $ = shallow(
      <Table.HeaderCell>
        <Table.SortButton>_</Table.SortButton>
      </Table.HeaderCell>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__header-cell`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table__header-cell--sortable`)).toBe(true)
  })

  it('passes the index through to the sort button.', () => {
    const $ = shallow(
      <Table.HeaderCell index={10}>
        <Table.SortButton>_</Table.SortButton>
      </Table.HeaderCell>
    , { context: defaultContext })
    expect($.childAt(0).prop('index')).toBe(10)
  })
})
