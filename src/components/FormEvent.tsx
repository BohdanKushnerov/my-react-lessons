import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthState } from '../redux/auth/selectors';

export interface IEvent {
  author: string;
  guest: string;
  date: Dayjs;
  description: string;
}

interface IFormEventProps {
  submitForm: (formValues: IEvent) => void;
}

const FormEvent: FC<IFormEventProps> = ({ submitForm }) => {
  const [fieldForm, setFieldForm] = useState<IEvent>({
    author: '',
    guest: '',
    date: {} as Dayjs,
    description: '',
  });

  const { user } = useSelector(getAuthState);

  const handleSubmitFormEvent = () => {
    const author = user.username;
    if (author) {
      submitForm({ ...fieldForm, author });
    }
  };

  return (
    <Form onFinish={handleSubmitFormEvent} style={{
      padding: 24
    }}>
      <Form.Item<IEvent>
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input description!' }]}
      >
        <Input
          value={fieldForm.description}
          onChange={e =>
            setFieldForm(prev => ({ ...prev, description: e.target.value }))
          }
        />
      </Form.Item>

      <Form.Item
        label="Guest"
        name="guest"
        rules={[{ required: true, message: 'Please select guest!' }]}
      >
        <Select
          value={fieldForm.guest}
          onChange={(value: string) => {
            setFieldForm(prev => ({ ...prev, guest: value }));
          }}
        >
          <Select.Option value="sample">Sample</Select.Option>
          <Select.Option value="sample2">Sample2</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Please select date!' }]}
      >
        <DatePicker
          onChange={e => {
            console.log('event', e);
            setFieldForm(prev => ({
              ...prev,
              date: e,
            }));
          }}
        />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default FormEvent;
