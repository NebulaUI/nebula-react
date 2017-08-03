import React from 'react'

import { SiteWrap, Section, Tabs, BareList, InlineList } from 'nebula-react'

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
              <InlineList.Wrapper spacing="md">
                <InlineList.Item>Help</InlineList.Item>
                <InlineList.Item>Me</InlineList.Item>
              </InlineList.Wrapper>
            </Tabs.Panel>
            <Tabs.Panel>
              <BareList.Wrapper spacing="md">
                <BareList.Item>Help</BareList.Item>
                <BareList.Item>Me</BareList.Item>
              </BareList.Wrapper>
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs.Wrapper>
      </SiteWrap>
    </Section>
  </div>
)

export default App