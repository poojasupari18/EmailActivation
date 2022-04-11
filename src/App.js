import logo from './logo.svg';
import './App.css';
import DataContextProvider from './DataContextProvider';

import MainRouter from './MainRouter';

function App() {
  return (
    <div>
      <DataContextProvider>
        <MainRouter />
        </DataContextProvider>
    </div>
  );
}

export default App;
