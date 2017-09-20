import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Form } from '../'

const defaultProps = {
  onChange: jest.fn()
}

describe('<Form.Select />', () => {
  it('renders the appropriate className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Form.Select {...props} />)
    expect($.hasClass(`${NAMESPACE}c-select`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.Select {...defaultProps}>
        select children test
      </Form.Select>
    )
    expect($.contains('select children test')).toBe(true)
  })

  it('takes a callback function assign to the "onChange prop', () => {
    const mockFn = jest.fn()
    const props = {
      onChange: mockFn
    }
    const $ = shallow(
      <Form.Select {...props}>
        select children test
      </Form.Select>
    )
    expect(mockFn).not.toBeCalled()
    $.simulate('change')
    expect(mockFn).toBeCalled()
  })

  it('takes attributes', () => {
    const props = {
      ...defaultProps,
      placeholder: 'test',
      id: 'foo'
    }
    const $ = shallow(<Form.Select {...props} />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('id')).toBe('foo')
  })

  it('renders small variant', () => {
    const props = {
      ...defaultProps,
      small: true
    }
    const $ = shallow(<Form.Select {...props} />)
    expect($.hasClass(`${NAMESPACE}c-select ${NAMESPACE}c-select--sm`)).toBe(true)
  })
})
