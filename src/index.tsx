import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from 'jira-dev-tool';
import { AppProviders } from 'context';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
loadDevTools(() => {
  root.render(
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'rgb(0, 82, 204)',
          },
        }}
      >
        <AppProviders>
          <App />
        </AppProviders>
      </ConfigProvider>
    </>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
