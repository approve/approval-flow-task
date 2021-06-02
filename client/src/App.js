import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import ApprovalFlow from "./ApprovalFlow";

const nodes = [
  { name: "example1" },
  { name: "example2" },
  { name: "example3" }
];

function App() {
  return (
    <div className="App">
      <ApprovalFlow nodes={nodes} />
    </div>
  );
}

export default App;
