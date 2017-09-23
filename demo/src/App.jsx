import React, { Component } from 'react'

import {
  SiteWrap,
  Section,
  Pagination,
  Pill,
  UIList,
  Table,
  LinkList,
  Form,
} from 'nebula-react'


const TableExample = () => (
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
    <Pagination.Wrapper style={{ display: 'inline-block' }}>
      <Pagination.Item>
        <Pagination.Link aria-label="Page Link" to="/" previous>Prev</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link ariaLabel="Page Link 1" to="/" >1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/" isActive>2</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link to="/" next>Next</Pagination.Link>
      </Pagination.Item>
    </Pagination.Wrapper>
    </Table.Footer>
  </Table.Wrapper>
)

/*
<Section size="md">
              <Table.DataTable data={tableData} spacing="md" stackAt="max-sm" />
            </Section>
            */

class App extends Component {
  render() {
    return (
      <div>
        <Section size="md">
          <SiteWrap padding>
            <Section size="md">
              <TableExample />
            </Section>
            <Pill>Base</Pill>
            <Pill isActive>Active</Pill>
            <Pill status="success">Success</Pill>
            <Pill status="info">Info</Pill>
            <Pill status="warning">Warning</Pill>
            <Pill status="error">Error</Pill>

            <UIList.Wrapper spacing="sm">
              <UIList.Item>Item 1</UIList.Item>
              <UIList.Item>Item 2</UIList.Item>
              <UIList.Item>Item 3</UIList.Item>
              <UIList.Item>Item 4</UIList.Item>
              <UIList.Item>Item 5</UIList.Item>
            </UIList.Wrapper>
            <h3>Link List with Divider</h3>
            <LinkList.Wrapper spacing="sm">
              <LinkList.Item>
                <LinkList.Group divider>
                  <LinkList.Item>
                    <LinkList.Link to="/" isActive>Item 1</LinkList.Link>
                  </LinkList.Item>
                  <LinkList.Item>
                    <LinkList.Link to="/">Item 2</LinkList.Link>
                  </LinkList.Item>
                  <LinkList.Item>
                    <LinkList.Link to="/">Item 3</LinkList.Link>
                  </LinkList.Item>
                </LinkList.Group>
              </LinkList.Item>
              <LinkList.Item>
                <LinkList.Group>
                  <LinkList.Item>
                    <LinkList.Link to="/">Item 1</LinkList.Link>
                  </LinkList.Item>
                  <LinkList.Item>
                    <LinkList.Link to="/">Item 2</LinkList.Link>
                  </LinkList.Item>
                  <LinkList.Item>
                    <LinkList.Link to="/">Item 3</LinkList.Link>
                  </LinkList.Item>
                </LinkList.Group>
              </LinkList.Item>
            </LinkList.Wrapper>
            <h3>Link List without Divider</h3>
            <LinkList.Wrapper spacing="md">
              <LinkList.Item>
                <LinkList.Link to="/" isActive>Item 1</LinkList.Link>
              </LinkList.Item>
              <LinkList.Item>
                <LinkList.Link to="/">Item 2</LinkList.Link>
              </LinkList.Item>
              <LinkList.Item>
                <LinkList.Link to="/">Item 3</LinkList.Link>
              </LinkList.Item>
            </LinkList.Wrapper>
          </SiteWrap>
        </Section>
      </div>
    )
  }
}

export default App
