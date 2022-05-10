import { VFC } from 'react';

import CUCKOOS from 'stores/cuckoos-data';

const App: VFC = () => (
  <div className='App'>
    <header className='app-header'>
      <h1>カッコウのDNDチュートリアル</h1>
      <ul className='cuckoos-list'>
        {CUCKOOS.map((cuckoo) => (
          <li key={cuckoo.id}>
            <div className='cuckoos-img'>
              <img src={cuckoo.image} alt={cuckoo.value} />
            </div>
            <p>{cuckoo.value}</p>
          </li>
        ))}
      </ul>
    </header>
  </div>
);

export default App;
