import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import Viewer from './components/Viewer';
import RelayEnvironment from './utils/RelayEnvironment';

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Viewer />
    </RelayEnvironmentProvider>
  );
};

export default App;
