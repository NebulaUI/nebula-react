import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.SearchSubmit />', () => {
  // it('renders with appropriate classNames', () => {
  //   const $ = shallow(<Form.SearchSubmit className="test" />)
  //   expect($.hasClass('c-search__submit test')).toBe(true)
  // })

  it('takes additional props', () => {
    const $ = shallow(<Form.SearchSubmit title="test" style={{ position: 'relative' }} />)
    expect($.prop('title')).toBe('test')
    expect($.prop('type')).toBe('submit')
  })

  it('takes additional attributes', () => {
    const $ = shallow(<Form.SearchSubmit style={{ position: 'relative' }} />)
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <Form.SearchSubmit>
        <child />
      </Form.SearchSubmit>
    )
    expect($.contains(<child />)).toBe(true)
  })
})
