import { VFC } from 'react';

import CuckoosList from './CuckoosList';

const CuckooComponent: VFC = () => (
  <header className='app-header'>
    <h1>カッコウのDNDチュートリアル</h1>
    <CuckoosList />
  </header>
);

export default CuckooComponent;
