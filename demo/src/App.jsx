import React from 'react'

import { Flag, FlagBody, FlagComponent } from 'nebula-react'

const App = () => (
  <div>
    it works! welcome to nebula react!
    <Flag breakpoint="md">
      <FlagBody>The body</FlagBody>
      <FlagComponent nowrap>The component</FlagComponent>
    </Flag>
  </div>
)

export default App