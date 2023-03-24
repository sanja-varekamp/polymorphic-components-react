import React from "react";
import "./App.css";
import { Text } from "./components/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1"> Hello world</Text>
      <Text as="h2"> Here I am</Text>
      <Text as="a" href="https://google.com">
        Google
      </Text>
      <Text>This is a text with no 'as'</Text>
    </div>
  );
}

export default App;
