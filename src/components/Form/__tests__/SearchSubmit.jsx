import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Form } from '../'

describe('<Form.SearchSubmit />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.SearchSubmit className="test" />)
    expect($.hasClass(`${NAMESPACE}c-search__submit ${NAMESPACE}c-btn ${NAMESPACE}c-btn--alpha`)).toBe(true)
  })

  it('renders with a static type of "submit"', () => {
    const $ = shallow(<Form.SearchSubmit />)
    expect($.prop('type')).toBe('submit')
  })

  it('renders with a default title', () => {
    const $ = shallow(<Form.SearchSubmit />)
    expect($.prop('title')).toBe('Submit')
  })

  it('renders with a defined title', () => {
    const $ = shallow(<Form.SearchSubmit title="test" />)
    expect($.prop('title')).toBe('test')
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
