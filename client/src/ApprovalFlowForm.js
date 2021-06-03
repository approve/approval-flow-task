import { Form, InputNumber, Button, Input } from 'antd';

const ApprovalFlowForm = ({onSubmit}) => {
  return (
    <Form
      initialValues={{ amount: 0 }}
      onFinish={onSubmit}
    >
      <Form.Item label="User id" name="userId"
        rules={[{ required: true, message: 'User id is required!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Amount" name="amount">
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default ApprovalFlowForm;