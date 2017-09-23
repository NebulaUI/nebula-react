import React from 'react'
import { shallow, mount } from 'enzyme'

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
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an appropriate classNames', () => {
    const $ = shallow(<Table.Container className="test">_</Table.Container>)
    expect($.hasClass(`${NAMESPACE}c-table`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table--stack@max-sm`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--sorted`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--no-labels`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--spacing-sm`)).toBe(false)
  })

  it('stacks at a defined breakpoint', () => {
    const $ = shallow(<Table.Container stackAt="max-sm">_</Table.Container>)
    expect($.hasClass(`${NAMESPACE}c-table--stack@max-sm`)).toBe(true)
  })

  it('renders in a sorted state', () => {
    const $ = mount(
      <Table.Container>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
      </Table.Container>
    )
    expect($.hasClass(`${NAMESPACE}c-table--sorted`)).toBe(true)
  })

  it('renders without labels', () => {
    const $ = shallow(<Table.Container noLabels>_</Table.Container>)
    expect($.hasClass(`${NAMESPACE}c-table--no-labels`)).toBe(true)
  })

  it('renders with spacing', () => {
    const $ = shallow(<Table.Container spacing="md">_</Table.Container>)
    expect($.hasClass(`${NAMESPACE}c-table--spacing-md`)).toBe(true)
  })

  it('allows columns to be sorted', () => {
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const $ = mount(
      <Table.Container>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton defaultSorted>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Table.SortButton>
                Age
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert Smith</Table.Cell>
            <Table.Cell>32</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Elliot Hesp</Table.Cell>
            <Table.Cell>26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mike Darmid</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Container>
    )
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 0)
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')
  })

  it('doesnt sort the columns if no sort buttons are rendered', () => {
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const $ = mount(
      <Table.Container>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell>
              Age
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert Smith</Table.Cell>
            <Table.Cell>32</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Elliot Hesp</Table.Cell>
            <Table.Cell>26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mike Darmid</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Container>
    )
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')
  })

  it('calls an onchange callback when sorted', () => {
    const mockOnChange = jest.fn()
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const $ = mount(
      <Table.Container onChange={mockOnChange}>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton defaultSorted>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Table.SortButton>
                Age
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert Smith</Table.Cell>
            <Table.Cell>32</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Elliot Hesp</Table.Cell>
            <Table.Cell>26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mike Darmid</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Container>
    )

    expect(mockOnChange).toHaveBeenCalledWith({
      index: 0,
      descending: true
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(mockOnChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: true
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(mockOnChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: false
    })
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')
  })

  it('allows sort events to be handled externally, clicking the sortbutton calling onChange sortfunction reading from sortedBy Prop rather than state', () => {
    const mockOnChange = jest.fn()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const $ = mount(
      <Table.Container onChange={mockOnChange} sortedBy={{ index: 1, descending: true }}>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Table.SortButton>
                Age
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert Smith</Table.Cell>
            <Table.Cell>32</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Elliot Hesp</Table.Cell>
            <Table.Cell>26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mike Darmid</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Container>
    )

    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    $.setProps({
      sortedBy: { index: 1, descending: false }
    })
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(mockOnChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: true
    })
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')
  })

  it('allows the sorting to be handled externally, clicking the sortbutton calling onChange', () => {
    const mockOnChange = jest.fn()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const $ = mount(
      <Table.Container
        disableDefaultSorting
        onChange={mockOnChange}
      >
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Table.SortButton>
                Age
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert Smith</Table.Cell>
            <Table.Cell>32</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Elliot Hesp</Table.Cell>
            <Table.Cell>26</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mike Darmid</Table.Cell>
            <Table.Cell>27</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Container>
    )

    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')

    clickSortButton($, 1)
    expect(mockOnChange).toHaveBeenLastCalledWith({
      index: 1
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')

    clickSortButton($, 1)
    expect(mockOnChange).toHaveBeenLastCalledWith({
      index: 1
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')
  })
})
