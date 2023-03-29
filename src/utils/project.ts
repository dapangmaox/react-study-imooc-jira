import { useEffect } from 'react';
import { Project } from 'screens/project-list/list';
import { useHttp } from 'utils/http';
import { cleanObject } from 'utils/index';
import { useAsync } from 'utils/use-async';

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
