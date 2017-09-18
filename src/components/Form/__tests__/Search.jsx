import React from 'react'
import { shallow, mount } from 'enzyme'

import { Form } from '../'
import { randomId } from '../../../utils/'

import { NAMESPACE } from '../../../constants'

jest.mock('../../../utils/randomId')

const defaultProps = {
  submitPosition: 'left'
}

beforeEach(() => {
  randomId.mockImplementation(() => '_')
})

describe('<Form.Search />', () => {
  it('can be configured with the submit button to the left', () => {
    const $ = mount(<Form.Search submitPosition="left" />)
    expect($.find(Form.SearchWrapper).hasClass(`${NAMESPACE}c-search--submit-left`)).toBe(true)
  })

  it('can be configured with the submit button to the right', () => {
    const $ = mount(<Form.Search submitPosition="right" />)
    expect($.find(Form.SearchWrapper).hasClass(`${NAMESPACE}c-search--submit-right`)).toBe(true)
  })

  it('renders small', () => {
    const props = {
      ...defaultProps,
      small: true
    }
    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.SearchInput).hasClass(`${NAMESPACE}c-text-input--sm`))
  })

  it('takes attributes', () => {
    const props = {
      ...defaultProps,
      style: { position: 'relative' }
    }
    const $ = shallow(<Form.Search {...props} />)
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders with type "search"', () => {
    const $ = mount(<Form.Search {...defaultProps} />)
    expect($.find(Form.SearchInput).html()).toMatch(/type="search"/)
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

  it('can render with a label', () => {
    const props = {
      ...defaultProps,
      label: 'Test label'
    }
    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.Label).exists()).toBe(true)
    expect($.html()).toMatch(/<form role="search">/)
    expect($.find(Form.SearchWrapper).html()).toMatch('<div class="c-search')
  })

  it('can render without a label', () => {
    const props = {
      ...defaultProps,
      label: undefined
    }
    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.Label).exists()).toBe(false)
    expect($.find(Form.SearchWrapper).html()).toMatch('<form role="search" class="c-search')
  })

  it('generates a random ID that is passed to the label and the input', () => {
    randomId.mockImplementation(() => 'test-id')
    const props = {
      ...defaultProps,
      label: '_'
    }
    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.Label).prop('htmlFor')).toBe('test-id')
    expect($.find(Form.SearchInput).prop('id')).toBe('test-id')
  })

  it('takes a user defined id that is passed to label and the input', () => {
    const props = {
      ...defaultProps,
      label: '_',
      id: 'hello'
    }
    const $ = mount(<Form.Search {...props} />)
    expect($.find(Form.Label).prop('htmlFor')).toBe('hello')
    expect($.find(Form.SearchInput).prop('id')).toBe('hello')
  })

  it('renders the input and submit in that order', () => {
    const $ = mount(<Form.Search {...defaultProps} />)
    expect($.find(Form.SearchWrapper).childAt(0).type()).toBe(Form.SearchInput)
    expect($.find(Form.SearchWrapper).childAt(1).type()).toBe(Form.SearchSubmit)
  })
})
