import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Table } from '../'

describe('<Table.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(<Table.Wrapper>test child</Table.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Table.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </Table.Wrapper>
      )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with an appropriate classNames', () => {
    const $ = shallow(<Table.Wrapper className="test">_</Table.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-table`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-table--stack@max-sm`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--sorted`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--no-labels`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-table--spacing-sm`)).toBe(false)
  })

  it('stacks at a defined breakpoint', () => {
    const $ = shallow(<Table.Wrapper stackAt="max-sm">_</Table.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-table--stack@max-sm`)).toBe(true)
  })

  it('renders in a sorted state', () => {
    const $ = mount(
      <Table.Wrapper>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>
              <Table.SortButton>
                Name
              </Table.SortButton>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
      </Table.Wrapper>
    )
    expect($.hasClass(`${NAMESPACE}c-table--sorted`)).toBe(true)
  })

  it('renders without labels', () => {
    const $ = shallow(<Table.Wrapper noLabels>_</Table.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-table--no-labels`)).toBe(true)
  })

  it('renders with spacing', () => {
    const $ = shallow(<Table.Wrapper spacing="md">_</Table.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-table--spacing-md`)).toBe(true)
  })

  it('allows columns to be sorted', () => {
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const $ = mount(
      <Table.Wrapper>
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
      </Table.Wrapper>
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
      <Table.Wrapper>
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
      </Table.Wrapper>
    )
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')
  })

  it('calls an onSortChange callback when sorted', () => {
    const mockOnSortChange = jest.fn()
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const $ = mount(
      <Table.Wrapper onSortChange={mockOnSortChange}>
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
      </Table.Wrapper>
    )

    expect(mockOnSortChange).toHaveBeenCalledWith({
      index: 0,
      descending: true
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(mockOnSortChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: true
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 2)).toBe('Elliot Hesp')

    clickSortButton($, 1)
    expect(mockOnSortChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: false
    })
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')
  })

  it('allows sort events to be handled externally, clicking the sortbutton calling onSortChange sortfunction reading from sortedBy Prop rather than state', () => {
    const mockOnSortChange = jest.fn()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const $ = mount(
      <Table.Wrapper onSortChange={mockOnSortChange} sortedBy={{ index: 1, descending: true }}>
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
      </Table.Wrapper>
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
    expect(mockOnSortChange).toHaveBeenLastCalledWith({
      index: 1,
      descending: true
    })
    expect(getUserName($, 2)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Mike Darmid')
    expect(getUserName($, 0)).toBe('Elliot Hesp')
  })

  it('allows the sorting to be handled externally, clicking the sortbutton calling onChange', () => {
    const mockOnSortChange = jest.fn()
    const clickSortButton = ($, index) => $.find(Table.HeaderRow).childAt(index).childAt(0).simulate('click')
    const getUserName = ($, index) => $.find(Table.Body).childAt(index).childAt(0).text()
    const $ = mount(
      <Table.Wrapper
        disableDefaultSorting
        onSortChange={mockOnSortChange}
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
      </Table.Wrapper>
    )

    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')

    clickSortButton($, 1)
    expect(mockOnSortChange).toHaveBeenLastCalledWith({
      index: 1
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')

    clickSortButton($, 1)
    expect(mockOnSortChange).toHaveBeenLastCalledWith({
      index: 1
    })
    expect(getUserName($, 0)).toBe('Robert Smith')
    expect(getUserName($, 1)).toBe('Elliot Hesp')
    expect(getUserName($, 2)).toBe('Mike Darmid')
  })
})
