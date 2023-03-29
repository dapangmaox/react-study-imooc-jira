import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useState } from 'react';
import { useProjects } from 'utils/project';
import { useUsers } from 'utils/user';
import { useDebounce } from '../../utils';
import { List } from './list';
import { SearchPanel } from './search-panel';

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debouncedParam = useDebounce(param, 200);

  const { data: list, isLoading, error } = useProjects(debouncedParam);
  const { data: users } = useUsers();

  console.log(error);

  return (
    <Container>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? <Typography.Text type={'danger'}>{error.message}</Typography.Text> : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
