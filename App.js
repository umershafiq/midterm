import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Body, Title, Footer, Button, Text, FooterTab } from "native-base";
const dataArray = [
  { title: "Objective", content: "I am looking for a suitable position that can offer me new experiences and growth potential to utilize my skills and play an effective part in the development of the organization." },
  { title: "Experience", content: "Front-end Intern, Protege Global, May 2018 - August 2018" },
  { title: "Education", content: "BSCS, MAJU, 2016 - Present" }
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Umer Shafiq</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>umershafiq7@gmail.com</Text>
            </Button>
            <Text>|</Text>
            <Button>
              <Text>0348-9095-405</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}