import Notifications from 'react-notify-toast';
import ReactGA from 'react-ga';

import Routes from 'components/Routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA || '');
  }, []);

  return (
    <>
      <Notifications options={{ top: 60, zIndex: 9999 }} />
      <Routes />
    </>
  );
}

export default App;
