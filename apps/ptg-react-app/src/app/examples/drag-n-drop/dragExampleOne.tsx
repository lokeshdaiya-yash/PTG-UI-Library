/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import { useState, useEffect } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { PtguseFetch } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import './drag-n-drop.scss';

export interface DragExampleOneProps {
}

export function DragExampleOne(props: DragExampleOneProps) {
  const [dataList, setDataList] = useState(null || []);
  const { data: apiData } = PtguseFetch('drag-drop-lists') as any

  useEffect(() => {
    apiData[0]?.attributes?.dragdrop?.forEach(item => {
      item.id = item.id.toString();
    })
    setDataList(apiData[0]?.attributes?.dragdrop)
  }, [apiData])


  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(dataList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDataList(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="m-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dataList?.map(({ id, text }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (

                      <div
                        className="example-one-list"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className='me-3'>{id}</div>
                        <div>{text}</div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DragExampleOne;