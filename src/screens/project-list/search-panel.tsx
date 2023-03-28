/**@jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { Form, Input, Select } from 'antd';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  orgainzation: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  setParam: (param: SearchPanelProps['param']) => void;
  param: {
    name: string;
    personId: string;
  };
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: '2rem' }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={''}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
