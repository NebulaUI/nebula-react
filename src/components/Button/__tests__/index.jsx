import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '../'

describe('<Button />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Button className="test">_</Button>)
    expect($.hasClass('c-btn test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Button node="a">_</Button>)
    expect($.type()).toBe('a')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Button>_</Button>)
    expect($.type()).toBe('button')
  })

  it('renders children', () => {
    const $ = shallow(<Button>test child</Button>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Button style={{ position: 'relative' }} ariaHidden="true">
        _
      </Button>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
