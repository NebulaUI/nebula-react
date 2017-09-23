import sortChildren from '../sortChildren'

const data = [
  {
    props: {
      children: [
        {
          props: {
            children: 'Robert Smith'
          }
        },
        {
          props: {
            children: new Date('2012-12-06')
          }
        },
        {
          props: {
            children: '6'
          }
        }
      ]
    }
  },
  {
    props: {
      children: [
        {
          props: {
            children: 'Elliot Hesp'
          }
        },
        {
          props: {
            children: new Date('2017-08-06')
          }
        },
        {
          props: {
            children: '100'
          }
        }
      ]
    }
  },
  {
    props: {
      children: [
        {
          props: {
            children: 'Mike Darmid'
          }
        },
        {
          props: {
            children: new Date('1650-11-06')
          }
        },
        {
          props: {
            children: '12'
          }
        }
      ]
    }
  },
  {
    props: {
      children: [
        {
          props: {
            children: 'Russell Wheatley'
          }
        },
        {
          props: {
            children: new Date('1984-11-16')
          }
        },
        {
          props: {
            children: '40'
          }
        }
      ]
    }
  }
]

const getFirstItem = node => node.props.children[0].props.children

describe('sortChildren', () => {
  it('sorts items when children are strings and descending', () => {
    const actual = sortChildren(data, { index: 0, descending: true })
    expect(getFirstItem(actual[0])).toBe('Russell Wheatley')
    expect(getFirstItem(actual[1])).toBe('Robert Smith')
    expect(getFirstItem(actual[2])).toBe('Mike Darmid')
    expect(getFirstItem(actual[3])).toBe('Elliot Hesp')
  })

  it('sorts items when children are strings and ascending', () => {
    const actual = sortChildren(data, { index: 0, descending: false })
    expect(getFirstItem(actual[3])).toBe('Russell Wheatley')
    expect(getFirstItem(actual[2])).toBe('Robert Smith')
    expect(getFirstItem(actual[1])).toBe('Mike Darmid')
    expect(getFirstItem(actual[0])).toBe('Elliot Hesp')
  })

  it('sorts items when children are numbers and descending', () => {
    const actual = sortChildren(data, { index: 2, descending: true })
    expect(getFirstItem(actual[0])).toBe('Elliot Hesp')
    expect(getFirstItem(actual[1])).toBe('Russell Wheatley')
    expect(getFirstItem(actual[2])).toBe('Mike Darmid')
    expect(getFirstItem(actual[3])).toBe('Robert Smith')
  })

  it('sorts items when children are dates and ascending', () => {
    const actual = sortChildren(data, { index: 1, descending: false })
    expect(getFirstItem(actual[3])).toBe('Elliot Hesp')
    expect(getFirstItem(actual[2])).toBe('Robert Smith')
    expect(getFirstItem(actual[1])).toBe('Russell Wheatley')
    expect(getFirstItem(actual[0])).toBe('Mike Darmid')
  })

  it('sorts items when children are dates and descending', () => {
    const actual = sortChildren(data, { index: 1, descending: true })
    expect(getFirstItem(actual[0])).toBe('Elliot Hesp')
    expect(getFirstItem(actual[1])).toBe('Robert Smith')
    expect(getFirstItem(actual[2])).toBe('Russell Wheatley')
    expect(getFirstItem(actual[3])).toBe('Mike Darmid')
  })
})
