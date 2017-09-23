import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

const defaultContext = { tableColumnTitles: ['_'] }

describe('<Table.Cell />', () => {
  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.Cell className="test">_</Table.Cell>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-table__cell test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Table.Cell>test child</Table.Cell>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Cell style={{ position: 'relative' }} ariaHidden="true">
        _
      </Table.Cell>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders the mobile label provided by props', () => {
    const $ = shallow(<Table.Cell label="test">test child</Table.Cell>, { context: defaultContext })
    expect($.prop('data-label')).toBe('test')
  })

  it('renders the mobile label provided by context and the cells index if not provided by a prop', () => {
    const context = { tableColumnTitles: ['foo', 'bar', 'baz'] }
    const $ = shallow(<Table.Cell index={1}>test child</Table.Cell>, { context })
    expect($.prop('data-label')).toBe('bar')
  })
})
