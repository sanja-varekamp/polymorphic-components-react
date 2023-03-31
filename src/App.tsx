import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ExampleText } from "./components/ExampleText";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { Text } from "./components/Text/Text";

// because of the typing we used, we can also pass a custom component to 'as', one that we create, like the one underneath
const BoldText = ({ children }: { children: React.ReactText }) => {
  return (
    <b style={{ background: "teal", color: "black", fontSize: "25px" }}>
      {children}
    </b>
  );
};

function App() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Polymorphic components app
      </h1>

      <SectionTitle title="Text" />
      <div className="flex flex-col">
        <Text>I am a regular text component</Text>
        <Text as="h3">I am an unstyled heading</Text>
        <Text as="small">I am small text</Text>
        <Text as="em">I am emphasized text</Text>
      </div>

      <SectionTitle title="Buttons" />
      <div>
        <Button type="button">Button</Button>
        <Button variant="secondary" type="button">
          Outlined
        </Button>
        <Button variant="link" as="a" href="https://google.com">
          Link to google
        </Button>
      </div>

      <SectionTitle title="Custom component" />
      <ExampleText as={BoldText}>
        Component passed as text component
      </ExampleText>
    </>
  );
}

export default App;
