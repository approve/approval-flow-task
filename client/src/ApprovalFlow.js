import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const ApprovalFlow = ({ nodes = [] }) => {
  return (
    <Steps progressDot direction="vertical">
      {nodes.map(node => (
        <Step title={node.name} />
      ))}
    </Steps>
  );
};

export default ApprovalFlow;
