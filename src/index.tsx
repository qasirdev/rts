// import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EventComponent from './events/EventCompnent';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <h1>hi there</h1>
      <h1>
        <Parent />
      </h1>
      <br />
      <GuestList />
      <br />
      <UserSearch />
      <br />
      <EventComponent />
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
