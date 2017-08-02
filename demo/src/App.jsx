import React from 'react'

import { Flag, FlagBody, FlagComponent, SiteWrap } from 'nebula-react'

const App = () => (
  <div>
    <SiteWrap padding className="u-hard">
      it works! welcome to nebula react!
      <Flag node="article" breakpoint="md">
        <FlagBody>The body</FlagBody>
        <FlagComponent nowrap>The component</FlagComponent>
      </Flag>
    </SiteWrap>
  </div>
)

export default App