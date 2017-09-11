import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '../'

describe('<Button />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Button className="test">_</Button>)
    expect($.hasClass('c-btn test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Button tag="a">_</Button>)
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

  it('renders with a size', () => {
    const $ = shallow(<Button size="md">_</Button>)
    expect($.hasClass('c-btn c-btn--md')).toBe(true)
  })

  it('renders with a theme', () => {
    const $ = shallow(<Button theme="alpha">_</Button>)
    expect($.hasClass('c-btn c-btn--alpha')).toBe(true)
  })

  it('renders full width', () => {
    const $ = shallow(<Button fullWidth>_</Button>)
    expect($.hasClass('c-btn c-btn--full')).toBe(true)
  })

  it('renders with a type', () => {
    const $ = shallow(<Button type="submit">_</Button>)
    expect($.prop('type')).toBe('submit')
  })

  it('renders with a pre defined component', () => {
    const RRLink = () => <div />
    const $ = shallow(<Button to="/test" theme="alpha" size="sm" component={RRLink}>_</Button>)
    expect($.type()).toBe(RRLink)
    expect($.prop('to')).toBe('/test')
    expect($.hasClass('c-btn c-btn--alpha c-btn--sm')).toBe(true)
  })

  it('renders a link when passed a "to" prop', () => {
    const $ = shallow(<Button to="/">_</Button>)
    expect($.type()).toBe('a')
  })
})
