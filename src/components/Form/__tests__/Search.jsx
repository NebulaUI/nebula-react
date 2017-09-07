import React from 'react'
import { shallow, mount } from 'enzyme'

import { Form } from '../'

const defaultProps = {
  submitPosition: 'left'
}

describe('<Form.Search />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Search {...defaultProps} className="test" />)
    expect($.find(Form.SearchWrapper).hasClass('c-search test'))
  })

  it('can be configured with the submit button to the left', () => {
    const $ = mount(<Form.Search submitPosition="left" />)
    expect($.find(Form.SearchWrapper).prop('submitPosition')).toBe('left')
    expect($.find(Form.SearchWrapper).hasClass('c-search--submit-left')).toBe(true)
  })

  it('can be configured with the submit button to the right', () => {
    const $ = mount(<Form.Search submitPosition="right" />)
    expect($.find(Form.SearchWrapper).prop('submitPosition')).toBe('right')
    expect($.find(Form.SearchWrapper).hasClass('c-search--submit-right')).toBe(true)
  })

  it('renders small', () => {
    const $ = mount(<Form.Search {...defaultProps} small />)
    expect($.prop('small')).toBe(true)
    expect($.find(Form.SearchInput).hasClass('c-text-input--sm'))
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.Search {...defaultProps} placeholder="test" style={{ position: 'relative' }} />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders with type "search" by default', () => {
    const $ = shallow(<Form.Search {...defaultProps} type="search" />)
    expect($.prop('type')).toBe('search')
  })

  it('takes a onChange prop passing it to <Form.SearchInput />', () => {
    const props = {
      ...defaultProps,
      onChange: jest.fn()
    }
    const mockFn = jest.fn()
    const $ = mount(<Form.Search {...props} onChange={mockFn} />)
    expect($.find(Form.SearchInput).prop('onChange')).toBe(mockFn)

    expect(mockFn).not.toBeCalled()
    $.find(Form.SearchInput).simulate('change')
    expect(mockFn).toBeCalled()
  })
})
