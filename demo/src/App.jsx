import React from 'react'

import { Flag, SiteWrap } from 'nebula-react'

const App = () => (
  <div>
    <SiteWrap padding className="u-hard">
      it works! welcome to nebula react!
      <Flag.Wrapper node="article" breakpoint="md">
        <Flag.Body>The body</Flag.Body>
        <Flag.Component nowrap>The component</Flag.Component>
      </Flag.Wrapper>
    </SiteWrap>
  </div>
)

export default App