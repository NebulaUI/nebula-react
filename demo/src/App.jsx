import React from 'react'

import {
  SiteWrap,
  Section,
  Pill,
  Table,
  LinkList,
  ProgressBar,
  Form,
} from 'nebula-react'

const App = () => (
  <div>
    <Section size="md">
      <SiteWrap padding>
        <Section size="md">
          <SiteWrap padding>
            <h3>Link List with Divider</h3>
            <h3>Progress Bar</h3>
            <Section size="md">
              <ProgressBar.Wrapper>
                <ProgressBar.Indicator animated percent="50" />
              </ProgressBar.Wrapper>
            </Section>
          </SiteWrap>
          <Table.Wrapper>
            <Table.Container spacing="sm" sortedBy={{ index: 3, descending: false }} stackAt="max-sm" onChange={value => console.log(value)}>
              <Table.Header>
                <Table.HeaderRow>
                  <Table.HeaderCell>
                    <Form.Checkbox name="dark-matter">
                      All
                    </Form.Checkbox>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <Table.SortButton>
                      Name
                    </Table.SortButton>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <Table.SortButton>
                      Email
                    </Table.SortButton>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <Table.SortButton targetColumnIndex="3" defaultSorted>
                      Age
                    </Table.SortButton>
                  </Table.HeaderCell>
                </Table.HeaderRow>
              </Table.Header>
              <Table.Body hoverRowHighlight>
                <Table.Row>
                  <Table.Cell label="Select">
                    <Form.Checkbox name="dark-matter" defaultChecked />
                  </Table.Cell>
                  <Table.Cell>
                    Robert Smith
                  </Table.Cell>
                  <Table.Cell>
                    robert.smith@checked.media
                  </Table.Cell>
                  <Table.Cell>
                    32
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Select">
                    <Form.Checkbox name="dark-matter" />
                  </Table.Cell>
                  <Table.Cell>
                    Elliot Hesp
                  </Table.Cell>
                  <Table.Cell label="email">
                    elliot.hesp@checked.media
                  </Table.Cell>
                  <Table.Cell label="age">
                    26
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Select">
                    <Form.Checkbox name="dark-matter" />
                  </Table.Cell>
                  <Table.Cell>
                    Mike Darmid
                  </Table.Cell>
                  <Table.Cell label="email">
                    mike.darmid@checked.media
                  </Table.Cell>
                  <Table.Cell label="age">
                    100
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Container>
            <Table.Footer style={{ textAlign: 'center' }}>
              Foo
            </Table.Footer>
          </Table.Wrapper>
        </Section>
        <Pill>Base</Pill>
        <Pill isActive>Active</Pill>
        <Pill status="success">Success</Pill>
        <Pill status="info">Info</Pill>
        <Pill status="warning">Warning</Pill>
        <Pill status="error">Error</Pill>
      </SiteWrap>
    </Section>
  </div>
)

export default App
