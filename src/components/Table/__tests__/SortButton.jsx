import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

const defaultContext = {
  tableSort: jest.fn(),
  tableSortedBy: { index: -1, descending: true },
  tableInitialiseSorting: jest.fn()
}

describe('<Table.SortButton />', () => {
  it('renders with an className', () => {
    const $ = shallow(
      <Table.SortButton className="test">_</Table.SortButton>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__sort-button test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Table.SortButton>test child</Table.SortButton>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.SortButton style={{ position: 'relative' }} ariaHidden="true">
        _
      </Table.SortButton>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  describe('sorting', () => {
    it('renders with an active state and descending', () => {
      const context = {
        ...defaultContext,
        tableSortedBy: { index: 1, descending: true }
      }
      const $ = shallow(
        <Table.SortButton index={1}>_</Table.SortButton>
      , { context })
      expect($.hasClass(`${NAMESPACE}c-table__sort-button`)).toBe(true)
      expect($.hasClass('is-active')).toBe(true)
      expect($.hasClass('is-descending')).toBe(true)
    })

    it('renders with an active state and ascending', () => {
      const context = {
        ...defaultContext,
        tableSortedBy: { index: 5, descending: false }
      }
      const $ = shallow(
        <Table.SortButton index={5}>_</Table.SortButton>
      , { context })
      expect($.hasClass(`${NAMESPACE}c-table__sort-button`)).toBe(true)
      expect($.hasClass('is-active')).toBe(true)
      expect($.hasClass('is-descending')).toBe(false)
    })

    it('renders inactive', () => {
      const context = {
        ...defaultContext,
        tableSortedBy: { index: 5, descending: false }
      }
      const $ = shallow(
        <Table.SortButton index={4}>_</Table.SortButton>
      , { context })
      expect($.hasClass(`${NAMESPACE}c-table__sort-button`)).toBe(true)
      expect($.hasClass('is-active')).toBe(false)
      expect($.hasClass('is-descending')).toBe(false)
    })

    it('renders sorted if the targetColumn index matches the sortedBy index', () => {
      const context = {
        ...defaultContext,
        tableSortedBy: { index: 5, descending: true }
      }
      const $ = shallow(
        <Table.SortButton targetColumnIndex="5" index={4}>_</Table.SortButton>
      , { context })
      expect($.hasClass(`${NAMESPACE}c-table__sort-button`)).toBe(true)
      expect($.hasClass('is-active')).toBe(true)
      expect($.hasClass('is-descending')).toBe(true)
    })

    it('sorts the table when clicked passing the targetColumn index if exists', () => {
      const mockTableSort = jest.fn()
      const context = {
        ...defaultContext,
        tableSort: mockTableSort
      }

      const $ = shallow(<Table.SortButton targetColumnIndex={10}>_</Table.SortButton>, { context })
      expect(mockTableSort).not.toHaveBeenCalled()

      $.simulate('click')
      expect(mockTableSort).toHaveBeenCalledWith(10)
    })

    it('sorts the table when clicked passing the index if targetColumn does not exist', () => {
      const mockTableSort = jest.fn()
      const context = {
        ...defaultContext,
        tableSort: mockTableSort
      }

      const $ = shallow(<Table.SortButton index={5}>_</Table.SortButton>, { context })
      expect(mockTableSort).not.toHaveBeenCalled()

      $.simulate('click')
      expect(mockTableSort).toHaveBeenCalledWith(5)
    })

    it('initialises table sorting prior to mounting passing the index and if this is the default sorted column', () => {
      const mockTableInitialiseSorting = jest.fn()
      const context = {
        ...defaultContext,
        tableInitialiseSorting: mockTableInitialiseSorting
      }

      mount(
        <Table.SortButton index={5} defaultSorted>_</Table.SortButton>
        , { context }
      )
      expect(mockTableInitialiseSorting).toHaveBeenCalledWith(5, true)

      mount(
        <Table.SortButton index={5}>_</Table.SortButton>
        , { context }
      )
      expect(mockTableInitialiseSorting).toHaveBeenLastCalledWith(5, undefined)
    })
  })
})
