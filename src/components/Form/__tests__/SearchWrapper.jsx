import React from 'react'
import { shallow } from 'enzyme'

import { randomId } from '../../../utils'

import { Form } from '../'

jest.mock('../../../utils')

const defaultProps = {
  submitPosition: 'left'
}

describe('<Form.SearchWrapper />', () => {
  it('renders with a random id by default', () => {
    randomId.mockImplementation(() => 'test-id')
    const $ = shallow(<Form.SearchWrapper {...defaultProps} id={randomId()} />)
    expect($.prop('id')).toBe('test-id')
  })

  it.skip('renders with appropriate classNames', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} className="test" />)
    expect($.hasClass('c-search c-search--submit-left test')).toBe(true)
  })

  it.skip('can be configured with the submit button to the left', () => {
    const $ = shallow(<Form.SearchWrapper submitPosition="left" />)
    expect($.hasClass('c-search--submit-left')).toBe(true)
  })

  it.skip('can be configured with the submit button to the right', () => {
    const $ = shallow(<Form.SearchWrapper submitPosition="right" />)
    expect($.hasClass('c-search--submit-right')).toBe(true)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} placeholder="test" style={{ position: 'relative' }} />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders with type "search" by default', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} type="search" />)
    expect($.prop('type')).toBe('search')
  })

  it('renders small', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} small />)
    expect($.prop('small')).toBe(true)
  })
})
