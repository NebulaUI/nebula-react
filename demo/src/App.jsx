import React from 'react'

import { Flag, SiteWrap, Section, Tabs } from 'nebula-react'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <Tabs.Wrapper>
          <Tabs.TabList>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.Panels>
            <Tabs.Panel>
              Tab 1 content
            </Tabs.Panel>
            <Tabs.Panel>
              Tab 2 content
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs.Wrapper>
      </SiteWrap>
    </Section>
  </div>
)

export default App