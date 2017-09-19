import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { BareList } from '../'

describe('<BareList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<BareList.Wrapper spacing="md" />)
    expect($.hasClass(`${NAMESPACE}o-bare-list ${NAMESPACE}o-bare-list--spaced-md`)).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['md', 'md@sm']
    const $ = shallow(<BareList.Wrapper spacing={spacing} />)
    expect($.hasClass(`${NAMESPACE}o-bare-list ${NAMESPACE}o-bare-list--spaced-md ${NAMESPACE}o-bare-list--spaced-md@sm`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <BareList.Wrapper>
        <div className="child" />
      </BareList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<BareList.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<BareList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<BareList.Wrapper />)
    expect($.hasClass(`${NAMESPACE}o-bare-list`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <BareList.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </BareList.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<BareList.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}o-bare-list ${NAMESPACE}test`)).toBe(true)
  })
})
