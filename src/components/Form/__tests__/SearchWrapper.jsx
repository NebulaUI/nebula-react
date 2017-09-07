import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

const defaultProps = {
  submitPosition: 'left'
}

describe('<Form.SearchWrapper />', () => {
  it('takes additional props', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} id="form-1" action="/test.html" method="post" />)
    expect($.prop('id')).toBe('form-1')
    expect($.prop('action')).toBe('/test.html')
    expect($.prop('method')).toBe('post')
  })

  it('takes an onSubmit prop', () => {
    const testFn = jest.fn()
    const $ = shallow(<Form.SearchWrapper {...defaultProps} onSubmit={testFn} />)
    expect($.prop('onSubmit')).toBe(testFn)
  })

  it('takes attributes', () => {
    const $ = shallow(<Form.SearchWrapper {...defaultProps} placeholder="test" style={{ position: 'relative' }} />)
    expect($.prop('placeholder')).toBe('test')
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })
})
