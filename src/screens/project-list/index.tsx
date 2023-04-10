import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects } from 'utils/project';
import { useUrlQueryParam } from 'utils/url';
import { useUsers } from 'utils/user';
import { useDebounce, useDocumentTitle } from '../../utils';
import { List } from './list';
import { SearchPanel } from './search-panel';

export const ProjectListScreen = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);
  const debouncedParam = useDebounce(param, 200);

  const { data: list, isLoading, error } = useProjects(debouncedParam);
  const { data: users } = useUsers();

  useDocumentTitle('项目列表', false);

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
