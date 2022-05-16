/* eslint-disable react/jsx-props-no-spreading */
import { VFC } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { CuckoosType } from '../types/cuckooDataType';

const CuckoosItem: VFC<CuckoosType> = (cuckoo) => {
  const { id, value, image } = cuckoo;
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? '0.5' : '1',
  };

  return (
    <li style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div className='cuckoos-img'>
        <img src={image} alt={value} />
      </div>
      <p>{value}</p>
    </li>
  );
};

export default CuckoosItem;
