import React from 'react'
import { shallow } from 'enzyme'

import { ButtonDropdown } from '../'

describe('<ButtonDropdown.Content />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <ButtonDropdown.Content>
        <child />
      </ButtonDropdown.Content>
    )
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Content className="test">_</ButtonDropdown.Content>)
    expect($.hasClass('c-btn-dropdown__content test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Content node="article">_</ButtonDropdown.Content>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<ButtonDropdown.Content>_</ButtonDropdown.Content>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Content style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
