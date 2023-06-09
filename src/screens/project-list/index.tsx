import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useProjects } from 'utils/project';
import { useUsers } from 'utils/user';
import { useDebounce, useDocumentTitle } from '../../utils';
import { List } from './list';
import { SearchPanel } from './search-panel';
import { useProjectsSearchParams } from './util';

export const ProjectListScreen = () => {
  useDocumentTitle('项目列表', false);

  const [param, setParam] = useProjectsSearchParams();
  const {
    data: list,
    isLoading,
    error,
    retry,
  } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();

  return (
    <Container>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={'danger'}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
