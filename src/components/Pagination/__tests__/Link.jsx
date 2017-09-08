import React from 'react'
import { shallow } from 'enzyme'

import { Pagination } from '../'

describe('<Pagination.Link />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Pagination.Link to="/">
        Link text
      </Pagination.Link>
    )
    expect($.contains('Link text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Pagination.Link to="/" className="test">Test</Pagination.Link>)
    expect($.hasClass('c-pagination__link test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Pagination.Link to="/" node="article">_</Pagination.Link>)
    expect($.type()).toBe('article')
  })

  it('renders an a by default', () => {
    const $ = shallow(<Pagination.Link to="/">-</Pagination.Link>)
    expect($.type()).toBe('a')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Link to="/" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Pagination.Link>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Pagination.Link to="/" callback={mockCallback}>Test</Pagination.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Pagination.Link to="/">Test</Pagination.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('takes a "to" prop that renders as a href attribute', () => {
    const $ = shallow(<Pagination.Link to="/test">Test</Pagination.Link>)
    expect($.prop('href')).toBe('/test')
  })

  describe('HOC', () => {
    // eslint-disable-next-line react/prop-types
    const RRPaginationLink = props => <div>{props.children}</div>

    it('renders the component with children', () => {
      const $ = shallow(<Pagination.Link component={RRPaginationLink} to="/test">Nebula</Pagination.Link>)
      expect($.find(RRPaginationLink)).toHaveLength(1)
      expect($.find(RRPaginationLink).contains('Nebula')).toBe(true)
    })

    it('passes through "to", "className" and "activeClassName" props', () => {
      const $ = shallow(
        <Pagination.Link
          className="test"
          activeClassName="is-test"
          component={RRPaginationLink}
          to="/test"
        >Nebula</Pagination.Link>
      )
      expect($.find(RRPaginationLink).hasClass('c-pagination__link test')).toBe(true)
      expect($.find(RRPaginationLink).prop('activeClassName')).toBe('is-test')
      expect($.find(RRPaginationLink).prop('to')).toBe('/test')
    })

    it('gets an activeClassName default', () => {
      const $ = shallow(
        <Pagination.Link
          component={RRPaginationLink}
          to="/"
        >Nebula</Pagination.Link>
      )
      expect($.find(RRPaginationLink).prop('activeClassName')).toBe('is-active')
    })

    it('renders with attributes', () => {
      const $ = shallow(
        <Pagination.Link
          component={RRPaginationLink}
          to="/"
          style={{ position: 'relative' }}
          ariaHidden="true"
        >
          _
        </Pagination.Link>
      )
      expect($.find(RRPaginationLink).prop('style')).toEqual({
        position: 'relative'
      })
      expect($.find(RRPaginationLink).prop('ariaHidden')).toBe('true')
    })
  })
})
