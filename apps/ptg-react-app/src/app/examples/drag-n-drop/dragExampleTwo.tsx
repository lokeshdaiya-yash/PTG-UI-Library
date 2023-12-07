/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar
 * @UpdatedBy Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { TODO } from '../../mock/drag-n-drop';
import './drag-n-drop.scss';

export interface DragExampleTwoProps {
  showCodeTwo : boolean
}
const columnsFromBackend = {
  right: {
    name: 'To do',
    items: TODO,
  },

  left: {
    name: 'Done',
    items: [],
  },
};

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
  const [columns, setColumns] = useState(columnsFromBackend);
  const componentCode = `

  export const TODO = [
    { id:' 1', content: 'Home' },
    { id: '2', content: 'Pick up Groceries' },
    { id: '3', content: 'Get up' },
    { id: '4', content: 'Fall asleep' },
    { id: '5', content: 'Check e-mail' },
    { id: '6', content: 'Get to work' },
  ];
  
    import { useState } from 'react';
    import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
    import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
    import { TODO } from '../../mock/drag-n-drop';
    import './drag-n-drop.scss';
    
    export interface DragExampleTwoProps {
      showCodeTwo : boolean
    }
    const columnsFromBackend = {
      right: {
        name: 'To do',
        items: TODO,
      },
    
      left: {
        name: 'Done',
        items: [],
      },
    };
    
    
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
     const [columns, setColumns] = useState(columnsFromBackend);
    export default DragExampleTwo;`

  const htmlCode = `
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
    </DragDropContext>`

    const cssCode = `
    .exampleTwoDroppable {
      border: 2px solid #ccc;
      border-radius: 5px;
      min-width: 280px;
      min-height: 300px;
    }

    .exampleTwoDraggable {
      padding: 16px;
      border: 2px solid #ccc;
    }
    `
  return (
    <>
      {!props.showCodeTwo ? (
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
      ): (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode}/>
      )}
  </>
  );
}

export default DragExampleTwo;
