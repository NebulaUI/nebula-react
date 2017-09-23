import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

describe('<Table.HeaderRow />', () => {
  it('renders with attributes', () => {
    const $ = shallow(
      <Table.HeaderRow style={{ position: 'relative' }} ariaHidden>
        <Table.HeaderCell>_</Table.HeaderCell>
      </Table.HeaderRow>
    )
    expect($.prop('style')).toEqual({ position: 'relative' })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(
      <Table.HeaderRow className="test">
        <Table.HeaderCell>_</Table.HeaderCell>
      </Table.HeaderRow>
    )
    expect($.hasClass(`${NAMESPACE}c-table__row`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table__header-row`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('passes the appropriate index to the cell children', () => {
    const $ = shallow(
      <Table.HeaderRow className="test">
        <Table.HeaderCell>_</Table.HeaderCell>
        <Table.HeaderCell>_</Table.HeaderCell>
        <Table.HeaderCell>_</Table.HeaderCell>
      </Table.HeaderRow>
    )
    expect($.childAt(0).prop('index')).toBe(0)
    expect($.childAt(1).prop('index')).toBe(1)
    expect($.childAt(2).prop('index')).toBe(2)
  })

  it('warns the consumer if the child type is not a TableHeaderCell', () => {
    const warningMock = jest.fn()
    window.console = {
      error: jest.fn(),
      warn: warningMock
    }
    shallow(
      <Table.HeaderRow className="test">
        Error!
      </Table.HeaderRow>
    )
    expect(warningMock).toHaveBeenCalledWith('Error! is not a valid child of TableHeaderRow, expected TableHeaderCell')
  })
})
