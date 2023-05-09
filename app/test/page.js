import React from "react";
import Dropdown from "../components/dropdown.js";

function App() {
  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Label>Click here to open dropdown</Dropdown.Label>
        // Note the nested content
        <div className="content-container">
          <Dropdown.Content>This is the content</Dropdown.Content>
        </div>
      </Dropdown>
    </div>
  );
}

export default App;