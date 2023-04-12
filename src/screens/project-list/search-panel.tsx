/**@jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { Form, Input } from 'antd';
import { Project } from './list';
import { UserSelect } from 'components/user-select';

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  orgainzation: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  setParam: (param: SearchPanelProps['param']) => void;
  param: Partial<Pick<Project, 'name' | 'personId'>>;
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
        <UserSelect
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
          defaultOptionName="负责人"
        />
      </Form.Item>
    </Form>
  );
};
