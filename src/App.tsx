import { AuthenticatedApp } from 'authenticated-app';
import { ErrorBoundry } from 'components/error-boundary';
import { FullPageErrorFallback } from 'components/lib';
import { useAuth } from 'context/auth-context';
import { UnauthenticatedApp } from 'unauthenticated-app';
import './App.css';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundry fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundry>
    </div>
  );
}

export default App;
