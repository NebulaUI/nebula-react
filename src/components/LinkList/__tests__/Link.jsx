import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { LinkList } from '../'

const defaultProps = {
  to: '/'
}

describe('<LinkList.Link />', () => {
  it('renders with the correct default className', () => {
    const $ = shallow(<LinkList.Link {...defaultProps}>_</LinkList.Link>)
    expect($.hasClass(`${NAMESPACE}c-link-list__link`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<LinkList.Link className="test" {...defaultProps}>_</LinkList.Link>)
    expect($.hasClass(`${NAMESPACE}c-link-list__link`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with a default activeClassName when active', () => {
    const $ = shallow(<LinkList.Link {...defaultProps} isActive>_</LinkList.Link>)
    expect($.hasClass(`${NAMESPACE}c-link-list__link is-active`)).toBe(true)
  })

  it('renders with a defined activeClassName when active', () => {
    const $ = shallow(<LinkList.Link {...defaultProps} isActive activeClassName="foo">_</LinkList.Link>)
    expect($.hasClass(`${NAMESPACE}c-link-list__link foo`)).toBe(true)
  })

  it('renders a "a" by default', () => {
    const $ = shallow(<LinkList.Link {...defaultProps}>_</LinkList.Link>)
    expect($.type()).toBe('a')
  })

  it('renders children', () => {
    const $ = shallow(
      <LinkList.Link {...defaultProps}>
        test child
      </LinkList.Link>
    )
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <LinkList.Link {...defaultProps} style={{ position: 'relative' }} ariaHidden="true">
        _
      </LinkList.Link>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<LinkList.Link onClick={mockCallback} {...defaultProps}>Test</LinkList.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<LinkList.Link {...defaultProps}>Test</LinkList.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  describe('HOC', () => {
    // eslint-disable-next-line react/prop-types
    const RRLinkList = props => <div>{props.children}</div>

    it('renders the component with children', () => {
      const $ = shallow(<LinkList.Link component={RRLinkList} {...defaultProps}>
        Nebula
      </LinkList.Link>)
      expect($.find(RRLinkList)).toHaveLength(1)
      expect($.find(RRLinkList).contains('Nebula')).toBe(true)
    })

    it('passes through "to", "className" and "activeClassName" props', () => {
      const $ = shallow(
        <LinkList.Link
          isActive
          className="test"
          activeClassName="test-active-classname"
          component={RRLinkList}
          to="/test"
        >
          Nebula
        </LinkList.Link>
      )
      expect($.find(RRLinkList).hasClass(`${NAMESPACE}c-link-list__link test`)).toBe(true)
      expect($.find(RRLinkList).prop('activeClassName')).toBe('test-active-classname')
      expect($.find(RRLinkList).prop('to')).toBe('/test')
    })

    it('passes a default "activeClassName" prop', () => {
      const $ = shallow(
        <LinkList.Link
          isActive
          component={RRLinkList}
          to="/test"
        >
          Nebula
        </LinkList.Link>
      )
      expect($.find(RRLinkList).prop('activeClassName')).toBe('is-active')
    })

    it('renders with attributes', () => {
      const $ = shallow(
        <LinkList.Link
          component={RRLinkList}
          style={{ position: 'relative' }}
          ariaHidden="true"
          {...defaultProps}
        >
          _
        </LinkList.Link>
      )
      expect($.find(RRLinkList).prop('style')).toEqual({
        position: 'relative'
      })
      expect($.find(RRLinkList).prop('ariaHidden')).toBe('true')
    })
  })
})
