import { useCallback, useState, VFC } from 'react';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import CUCKOOS from 'stores/cuckoos-data';

import { CuckoosType } from '../types/cuckooDataType';
import CuckoosItem from './CuckoosItem';

const CuckoosList: VFC = () => {
  const [cuckoos, setCuckoos] = useState<CuckoosType[]>(CUCKOOS);
  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setCuckoos((cuckoo) => {
        const oldIndex = cuckoo.findIndex((val) => val.id === active.id);
        const newIndex = cuckoo.findIndex((val) => val.id === over?.id);

        return arrayMove(cuckoo, oldIndex, newIndex);
      });
    }
  }, []);

  return (
    <ul className='cuckoos-list'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) => handleDragEnd(event)}
      >
        <SortableContext
          items={cuckoos.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {cuckoos.map((cuckoo) => (
            <CuckoosItem
              key={cuckoo.id}
              id={cuckoo.id}
              value={cuckoo.value}
              image={cuckoo.image}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
};

export default CuckoosList;
