import React from 'react'
import { shallow, mount } from 'enzyme'

import { randomId } from '../../../utils'

import { Form } from '../'

jest.mock('../../../utils')

const defaultProps = {
  submitPosition: 'left'
}

describe('<Form.Search />', () => {
  it('renders with a random id by default', () => {
    randomId.mockImplementation(() => 'test-id')
    const $ = shallow(<Form.Search {...defaultProps} id={randomId()} />)
    expect($.prop('id')).toBe('test-id')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Search {...defaultProps} className="test" />)
    expect($.find(Form.SearchWrapper).hasClass('c-search test'))
  })

  it('can be configured with the submit button to the left', () => {
    const $ = shallow(<Form.Search submitPosition="left" />)
    expect($.find(Form.SearchWrapper).prop('submitPosition')).toBe('left')
    expect($.find(Form.SearchWrapper).hasClass('c-search--submit-left'))
  })

  it('can be configured with the submit button to the right', () => {
    const $ = shallow(<Form.Search submitPosition="right" />)
    expect($.find(Form.SearchWrapper).prop('submitPosition')).toBe('right')
    expect($.find(Form.SearchWrapper).hasClass('c-search--submit-left'))
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
})
