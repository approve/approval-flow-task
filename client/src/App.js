import "./App.css";
import { useState } from 'react';
import ApprovalFlow from "./ApprovalFlow";
import ApprovalFlowForm from "./ApprovalFlowForm";



function App() {
  const [nodes, setNodes] = useState([
    { name: "example1", id: 1 },
    { name: "example2", id: 2 },
    { name: "example3", id: 3 }
  ]);

  const onSubmit = ({ userId, amount }) => {
    console.log('Implement API call here');
  };

  return (
    <div className="App">
      <h1>Approval Flow</h1>
      <ApprovalFlowForm onSubmit={onSubmit} />
      <ApprovalFlow nodes={nodes} />
    </div>
  );
}

export default App;
