import { VFC } from 'react';

const App: VFC = () => (
  <div
    style={{
      backgroundColor: '#282c34',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
    }}
  >
    <p>Hello React</p>
  </div>
);

export default App;
