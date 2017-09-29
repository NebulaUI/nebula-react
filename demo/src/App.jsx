import React from 'react'

import {
  SiteWrap,
  Section,
  Pill,
  Table,
  Tooltip,
  ProgressBar,
  Form,
} from 'nebula-react'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p><p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Test
        <Tooltip.Wrapper>
          I
          <Tooltip.Content direction="north">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Tooltip.Content>
        </Tooltip.Wrapper>
          test
        </p>
        <Tooltip.Wrapper>
          T
          <Tooltip.Content direction="south">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Tooltip.Content>
        </Tooltip.Wrapper>
        <Tooltip.Wrapper>
          T
          <Tooltip.Content direction="east">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Tooltip.Content>
        </Tooltip.Wrapper>
        <Tooltip.Wrapper>
          T
          <Tooltip.Content direction="west">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Tooltip.Content>
        </Tooltip.Wrapper>
      </SiteWrap>
    </Section>
  </div>
)

export default App
