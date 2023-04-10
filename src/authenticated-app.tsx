import styled from '@emotion/styled';
import { Button, Dropdown } from 'antd';
import { ReactComponent as Logo } from 'assets/software-logo.svg';
import { Row } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProjectScreen } from 'screens/project';
import { ProjectListScreen } from 'screens/project-list';
import { resetRoute } from 'utils';

export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path="projects" element={<ProjectListScreen />}></Route>
            <Route path="projects/:projectId/*" element={<ProjectScreen />} />
            <Route index element={<ProjectListScreen />} />
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type="link" onClick={resetRoute}>
          <Logo width={'18rem'} color={'rgb(38, 132, 255)'} />
        </Button>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          menu={{
            items: [
              {
                label: (
                  <Button type="link" onClick={logout}>
                    登出
                  </Button>
                ),
                key: 'logout',
              },
            ],
          }}
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
