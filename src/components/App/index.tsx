import Notifications from 'react-notify-toast';

import Routes from 'components/Routes';

import 'scss/application.scss';

function App() {
  return (
    <>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
      <Routes />
    </>
  );
}

export default App;
