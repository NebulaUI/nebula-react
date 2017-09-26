import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { ProgressBar } from '../'

describe('<ProgressBar.Indicator />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<ProgressBar.Indicator className="test" />)
    expect($.hasClass(`${NAMESPACE}c-progress-bar__indicator`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-progress-bar__indicator--animated`)).toBe(false)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with an animated gradient', () => {
    const $ = shallow(<ProgressBar.Indicator animated />)
    expect($.hasClass(`${NAMESPACE}c-progress-bar__indicator`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-progress-bar__indicator--animated`)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<ProgressBar.Indicator tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<ProgressBar.Indicator />)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ProgressBar.Indicator style={{ position: 'relative' }} ariaHidden />
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders with the correct aria values', () => {
    const $ = shallow(<ProgressBar.Indicator percent="50" />)
    expect($.prop('role')).toBe('progressbar')
    expect($.prop('aria-valuemin')).toBe('0%')
    expect($.prop('aria-valuemax')).toBe('100%')
    expect($.prop('aria-valuenow')).toBe('50%')
  })

  describe('percent prop', () => {
    it('renders an inline style width as a percentage', () => {
      const $ = shallow(<ProgressBar.Indicator percent="50" />)
      expect($.prop('style')).toEqual({
        width: '50%'
      })
    })

    it('only appends the percentage unit if not passed', () => {
      const $ = shallow(<ProgressBar.Indicator percent="50%" />)
      expect($.prop('style')).toEqual({
        width: '50%'
      })
    })
  })
})
