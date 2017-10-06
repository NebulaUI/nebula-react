import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { FadeIn } from '../'

describe('<FadeIn />', () => {
  it('adds a class once mounted', () => {
    jest.useFakeTimers()
    const $ = mount(
      <FadeIn>
        <div />
      </FadeIn>
    )

    expect($.hasClass(`${NAMESPACE}c-fade-in`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-fade-in--has-mounted`)).toBe(false)

    jest.runAllTimers()
    expect($.hasClass(`${NAMESPACE}c-fade-in--has-mounted`)).toBe(true)
  })

  it('adds the child class once mounted', () => {
    const $ = shallow(
      <FadeIn>
        <div className="test">_</div>
      </FadeIn>
    )
    expect($.hasClass('test')).toBe(true)
  })
})
