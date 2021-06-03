import React from "react";
import { Timeline } from 'antd';

const ApprovalFlow = ({ nodes = [] }) => {
  return (
    <Timeline>
      {nodes.map(node => (
        <Timeline.Item key={node.id}>{node.name}</Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ApprovalFlow;
