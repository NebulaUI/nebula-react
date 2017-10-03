import React from 'react'
import { mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { FadeIn } from '../'

describe('<FadeIn />', () => {
  it('adds a class once mounted', () => {
    jest.useFakeTimers()
    const $ = mount(
      <FadeIn>
        <div className="test">_</div>
      </FadeIn>
    )

    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-fade-in`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-fade-in--has-mounted`)).toBe(false)

    jest.runAllTimers()
    expect($.hasClass(`${NAMESPACE}c-fade-in--has-mounted`)).toBe(true)
  })
})
