// import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <h1>hi there</h1>
      <h1>
        <Parent />
      </h1>
    </div>
  );
};

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
