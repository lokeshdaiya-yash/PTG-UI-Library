/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar
 * @UpdatedBy Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtguseFetch } from '@ptg-ui/react';
import './drag-n-drop.scss';

export interface DragExampleTwoProps { }

/* istanbul ignore next */
const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export function DragExampleTwo(props: DragExampleTwoProps) {
  const [data, setData] = useState<any>([]);
  const {
    data: apiData,
    isLoading,
    error,
  } = PtguseFetch('todo-lists') as any;
  const columnsFromBackend = {
    left: {
      name: 'To do',
      items: data,
    },

    right: {
      name: 'Done',
      items: [],
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);
  useEffect(() => {
    if (apiData[0]) {
      apiData[0]?.attributes?.todo?.forEach(item => {
        item.id = item.id.toString();
      })
      setData(apiData[0].attributes.todo);
      const columnsFromBackend = {
        left: {
          name: 'To do',
          items: apiData[0].attributes.todo,
        },

        right: {
          name: 'Done',
          items: [],
        },
      };
      setColumns(columnsFromBackend);
    }
    console.log("data=", data)
    console.log("col=", columnsFromBackend)
  }, [apiData]);

  return (
    <div className=" p-0 mt-3 d-flex justify-content-center ">
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId} className="forMobileView">
              <h4 className="todoHeading">{column.name}</h4>
              <div className="forMobileView-2 m-1">
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided: any, snapshot: any) => {
                    return (
                      <div
                        className="exampleTwoDroppable"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        data-testid="droppable"
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided: any) => {
                                return (
                                  <div
                                    className="exampleTwoDraggable"
                                    data-testid={'drag-' + item.id}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {index + 1} - {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DragExampleTwo;