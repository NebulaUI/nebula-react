import React from 'react'
import { shallow, mount } from 'enzyme'

import { Pagination } from '../'

const defaultProps = {
  to: '/'
}

describe('<Pagination.Link />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Pagination.Link {...defaultProps}>
        Link text
      </Pagination.Link>
    )
    expect($.contains('Link text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Pagination.Link {...defaultProps} className="test">Test</Pagination.Link>)
    expect($.hasClass('c-pagination__link test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Pagination.Link {...defaultProps} tag="article">_</Pagination.Link>)
    expect($.type()).toBe('article')
  })

  it('renders an a by default', () => {
    const $ = shallow(<Pagination.Link {...defaultProps}>_</Pagination.Link>)
    expect($.type()).toBe('a')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Link {...defaultProps} style={{ position: 'relative' }}>
        _
      </Pagination.Link>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders the aria-label attr with a default value', () => {
    const $ = mount(<Pagination.Link {...defaultProps} aria-label="Test">_</Pagination.Link>)
    expect($.prop('aria-label')).toBe('Test')
  })

  it('renders the aria-label with a prop passed in as an override', () => {
    const $ = mount(<Pagination.Link {...defaultProps} aria-label="Test" ariaLabel="Test Override">_</Pagination.Link>)
    expect($.prop('aria-label')).toBe('Test')
    expect($.prop('ariaLabel')).toBe('Test Override')
  })

  it('allows an isActive prop to be passed', () => {
    const $ = mount(<Pagination.Link {...defaultProps} isActive>_</Pagination.Link>)
    expect($.prop('isActive')).toBe(true)
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(
      <Pagination.Link {...defaultProps} callback={mockCallback}>
        Test
      </Pagination.Link>
    )
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Pagination.Link {...defaultProps}>Test</Pagination.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('takes a "to" prop that renders as a href attribute', () => {
    const $ = shallow(<Pagination.Link {...defaultProps}>Test</Pagination.Link>)
    expect($.prop('href')).toBe('/')
  })

  describe('can be configured with a previous and next link', () => {
    it('renders the previous link', () => {
      const $ = shallow(
        <Pagination.Link {...defaultProps} previous>
          _
        </Pagination.Link>
      )
      expect($.hasClass('c-pagination__link--previous')).toBe(true)
    })
    it('renders the next link', () => {
      const $ = shallow(
        <Pagination.Link {...defaultProps} next>
          _
        </Pagination.Link>
      )
      expect($.hasClass('c-pagination__link--next')).toBe(true)
    })
  })

  describe('HOC', () => {
    // eslint-disable-next-line react/prop-types
    const RRPaginationLink = props => <div>{props.children}</div>

    it('renders the component with children', () => {
      const $ = shallow(
        <Pagination.Link component={RRPaginationLink} {...defaultProps}>
          Nebula
        </Pagination.Link>
      )
      expect($.find(RRPaginationLink)).toHaveLength(1)
      expect($.find(RRPaginationLink).contains('Nebula')).toBe(true)
    })

    it('passes through "to", "className" and "activeClassName" props', () => {
      const $ = shallow(
        <Pagination.Link
          className="test"
          activeClassName="is-test"
          component={RRPaginationLink}
          {...defaultProps}
        >Nebula</Pagination.Link>
      )
      expect($.find(RRPaginationLink).hasClass('c-pagination__link test')).toBe(true)
      expect($.find(RRPaginationLink).prop('activeClassName')).toBe('is-test')
      expect($.find(RRPaginationLink).prop('to')).toBe('/')
    })

    it('gets an activeClassName default', () => {
      const $ = shallow(
        <Pagination.Link
          component={RRPaginationLink}
          {...defaultProps}
        >Nebula</Pagination.Link>
      )
      expect($.find(RRPaginationLink).prop('activeClassName')).toBe('is-active')
    })

    it('renders with attributes', () => {
      const $ = shallow(
        <Pagination.Link
          component={RRPaginationLink}
          {...defaultProps}
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
