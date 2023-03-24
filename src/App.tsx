import React from "react";
import "./App.css";
import { Text } from "./components/Text";

// because of the typing we used, we can also pass a custom component to 'as', one that we create, like the one underneath
const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ background: "yellow", color: "black", fontSize: "40px" }}>
      {children}
    </em>
  );
};

function App() {
  return (
    <div className="App">
      <Text as="h1"> Hello world</Text>
      <Text as="h2"> Here I am</Text>
      <Text as="a" href="https://google.com">
        Google
      </Text>
      <Text>This is a text with no 'as'</Text>

      <Text as={Emphasis}>This is important. You are awesome!!</Text>
    </div>
  );
}

export default App;
