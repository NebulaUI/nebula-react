import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

const defaultContext = {
  tableSortedBy: {
    index: -1,
    descending: false
  }
}

describe('<Table.Body />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(
      <Table.Body className="test">_</Table.Body>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__body test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Table.Body>test child</Table.Body>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Body style={{ position: 'relative' }} ariaHidden="true">
        _
      </Table.Body>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('highlights the row when hovered', () => {
    const $ = shallow(
      <Table.Body hoverRowHighlight>_</Table.Body>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__body`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table__body--hover-row-highlight`)).toBe(true)
  })

  describe('sorting', () => {
    const getText = ($, row, cell) =>
      $.childAt(row).childAt(cell).childAt(0).text()
    const buildRows = () => (
      <Table.Body>
        <Table.Row>
          <Table.Cell>f</Table.Cell>
          <Table.Cell>10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>a</Table.Cell>
          <Table.Cell>22</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>d</Table.Cell>
          <Table.Cell>5</Table.Cell>
        </Table.Row>
      </Table.Body>
    )

    it('doesnt sort the items when the sort index is -1', () => {
      const context = {
        tableSortedBy: {
          index: -1,
          descending: false
        },
        tableColumnTitles: ['a', 'b']
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 0)).toBe('f')
      expect(getText($, 1, 0)).toBe('a')
      expect(getText($, 2, 0)).toBe('d')
    })

    it('sorts the items in ascending order by the first column', () => {
      const context = {
        tableSortedBy: {
          index: 0,
          descending: false
        }
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 0)).toBe('a')
      expect(getText($, 1, 0)).toBe('d')
      expect(getText($, 2, 0)).toBe('f')
    })

    it('sorts the items in descending order by the first column', () => {
      const context = {
        tableSortedBy: {
          index: 0,
          descending: true
        }
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 0)).toBe('f')
      expect(getText($, 1, 0)).toBe('d')
      expect(getText($, 2, 0)).toBe('a')
    })

    it('sorts the items in descending order by the second column', () => {
      const context = {
        tableSortedBy: {
          index: 1,
          descending: true
        }
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 1)).toBe('22')
      expect(getText($, 1, 1)).toBe('10')
      expect(getText($, 2, 1)).toBe('5')
    })

    it('sorts the items in ascending order by the second column', () => {
      const context = {
        tableSortedBy: {
          index: 1,
          descending: false
        }
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 1)).toBe('5')
      expect(getText($, 1, 1)).toBe('10')
      expect(getText($, 2, 1)).toBe('22')
    })

    it('does not sort the items default sorting is disabled', () => {
      const context = {
        tableSortedBy: {
          index: 0,
          descending: false
        },
        tableDisableDefaultSorting: true
      }
      const $ = shallow(buildRows(), { context })
      expect(getText($, 0, 0)).toBe('f')
      expect(getText($, 1, 0)).toBe('a')
      expect(getText($, 2, 0)).toBe('d')
    })
  })
})
