/* eslint-disable react/jsx-props-no-spreading */
import { VFC } from 'react';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import CUCKOOS from 'stores/cuckoos-data';

type CuckoosType = {
  id: string;
  value: string;
  image: string;
}[];

const App: VFC = () => {
  const reoder = (
    cuckoos: CuckoosType,
    startIndex: number,
    endIndex: number,
  ) => {
    const removed = cuckoos.splice(startIndex, 1); // 移動する要素を配列から削除
    cuckoos.splice(endIndex, 0, removed[0]); // 削除した要素を移動先のindexに追加
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return; // 不可能なスペースへDNDした場合、何もしない

    reoder(CUCKOOS, result.source.index, result.destination.index);
  };

  return (
    <div className='App'>
      <header className='app-header'>
        <h1>カッコウのDNDチュートリアル</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='cuckoos'>
            {(droppableProvided) => (
              <ul
                className='cuckoos-list'
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {CUCKOOS.map((cuckoo, index) => (
                  <Draggable
                    key={cuckoo.id}
                    draggableId={cuckoo.id}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <li
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div className='cuckoos-img'>
                          <img src={cuckoo.image} alt={cuckoo.value} />
                        </div>
                        <p>{cuckoo.value}</p>
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default App;
