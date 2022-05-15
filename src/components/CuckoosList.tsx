import { VFC } from 'react';

import CUCKOOS from 'stores/cuckoos-data';

const CuckoosList: VFC = () => (
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
);

export default CuckoosList;
