import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'


describe('<Table.Footer />', () => {
  it('renders with an additional className', () => {
    const $ = shallow(
      <Table.Footer className="test">_</Table.Footer>)
    expect($.hasClass(`${NAMESPACE}c-table__footer test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Table.Footer>test child</Table.Footer>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Footer style={{ position: 'relative' }} ariaHidden="true">
        _
      </Table.Footer>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Table.Footer>_</Table.Footer>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag', () => {
    const $ = shallow(<Table.Footer tag="article">_</Table.Footer>)
    expect($.type()).toBe('article')
  })
})
