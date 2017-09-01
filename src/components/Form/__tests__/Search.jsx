import React from 'react'
import { mount } from 'enzyme'

import { randomId } from '../../../utils'

import { Form } from '../'

jest.mock('../../../utils')

const defaultProps = {
  submitPosition: 'left'
}

describe('<Form.Search />', () => {
  it('renders with a random id by default', () => {
    randomId.mockImplementation(() => 'test-id')
    const $ = mount(<Form.Search {...defaultProps} id={randomId()} />)
    expect($.prop('id')).toBe('test-id')
  })

  it.skip('renders with appropriate classNames', () => {
    const $ = mount(<Form.Search {...defaultProps} className="test" />)
    expect($.hasClass('c-search c-search--submit-left test')).toBe(true)
  })

  it.skip('can be configured with the submit button to the left', () => {
    const $ = mount(<Form.Search submitPosition="left" />)
    expect($.hasClass('c-search--submit-left')).toBe(true)
  })

  it.skip('can be configured with the submit button to the right', () => {
    const $ = mount(<Form.Search submitPosition="right" />)
    expect($.hasClass('c-search--submit-right')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = mount(<Form.Search {...defaultProps} placeholder="test" style={{ position: 'relative' }} />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders with type "search" by default', () => {
    const $ = mount(<Form.Search {...defaultProps} type="search" />)
    expect($.prop('type')).toBe('search')
  })

  it('renders small', () => {
    const $ = mount(<Form.Search {...defaultProps} small />)
    expect($.prop('small')).toBe(true)
  })
})
