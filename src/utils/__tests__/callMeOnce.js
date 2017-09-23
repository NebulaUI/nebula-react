import callMeOnce from '../callMeOnce'

describe('callMeOnce', () => {
  it('allows the callback to be called once only', () => {
    const mockCb = jest.fn()
    callMeOnce(mockCb)
    expect(mockCb).toHaveBeenCalledTimes(1)

    callMeOnce(mockCb)
    expect(mockCb).toHaveBeenCalledTimes(1)
  })
})
