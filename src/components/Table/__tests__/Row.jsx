import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

describe('<Table.Row />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(
      <Table.Row className="test">
        <Table.Cell>_</Table.Cell>
      </Table.Row>
    )
    expect($.hasClass(`${NAMESPACE}c-table__row test`)).toBe(true)
  })

  it('renders children passing the index', () => {
    const $ = shallow(
      <Table.Row>
        <Table.Cell>_</Table.Cell>
        <Table.Cell>_</Table.Cell>
      </Table.Row>
    )
    expect($.childAt(1).prop('index')).toBe(1)
  })

  it('logs a warning when the child is a string', () => {
    const mockWarn = jest.fn()
    window.console = {
      warn: mockWarn,
      error: jest.fn()
    }

    shallow(
      <Table.Row>test</Table.Row>
    )
    expect(mockWarn).toBeCalledWith('test is not a valid child of TableRow, expected TableCell')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Row style={{ position: 'relative' }} ariaHidden="true">
        <Table.Cell>_</Table.Cell>
      </Table.Row>
    )

    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
