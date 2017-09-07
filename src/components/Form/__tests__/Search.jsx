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

  it('takes a onChange handler that is called when the search input changes', () => {
    const mockOnChange = jest.fn()
    const props = {
      ...defaultProps,
      onChange: mockOnChange
    }
    
    const $ = mount(<Form.Search {...props} />)

    expect(mockOnChange).not.toBeCalled()
    $.find(Form.SearchInput).simulate('change')
    expect(mockOnChange).toBeCalled()
  })

  it('takes a onSubmit handler that is called when the form submits', () => {
    const mockOnSubmit = jest.fn()
    const props = {
      ...defaultProps,
      onSubmit: mockOnSubmit
    }
    
    const $ = mount(<Form.Search {...props} />)

    expect(mockOnSubmit).not.toBeCalled()
    $.find(Form.SearchWrapper).simulate('submit')
    expect(mockOnSubmit).toBeCalled()
  })

  it('takes a defaultValue prop passing it to the input', () => {
    const props = {
      ...defaultProps,
      defaultValue: 'test-default-value',
      onChange: jest.fn()
    }

    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.SearchInput).prop('defaultValue')).toBe('test-default-value')
  })

  it('takes a value prop passing it to the input', () => {
    const props = {
      ...defaultProps,
      value: 'test-value',
      onChange: jest.fn()
    }

    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.SearchInput).prop('value')).toBe('test-value')
  })
})
