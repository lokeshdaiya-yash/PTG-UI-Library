/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { USERS } from '@ptg-react-app/mock/drag-n-drop';
import './drag-n-drop.scss';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

export interface DragExampleOneProps {
  showCodeOne : boolean
}

export function DragExampleOne(props: DragExampleOneProps) {
  const [user, setUser] = useState(USERS);
  /* istanbul ignore next */
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const users = Array.from(user);
    const [newOrder] = users.splice(source.index, 1);
    users.splice(destination.index, 0, newOrder);
    setUser(users);
  };

  const componentCode = `

    export const USERS = [
      {
        id: '1',
        name: 'Harsha',
      },
      {
        id: '2',
        name: 'Ahilya',
      }
    ];

  import { useState } from 'react';
  import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
  } from 'react-beautiful-dnd';
  import { USERS } from '@ptg-react-app/mock/drag-n-drop';
  import './drag-n-drop.scss';
  
  export interface DragExampleOneProps {}
  
  export function DragExampleOne(props: DragExampleOneProps) {
    const [user, setUser] = useState(USERS);
    
    const onDragEnd = (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;
      const users = Array.from(user);
      const [newOrder] = users.splice(source.index, 1);
      users.splice(destination.index, 0, newOrder);
      setUser(users);
    };
  export default DragExampleOne;
`
const htmlCode = `
    <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="todo">
      {(provided) => (
        <div
          className="m-4"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {user.map(({ id, name }, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    className="example-one-list  display-flex "
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    id={'drag' + id}
                  >
                    <div className="example-one-list-view">
                      <div>
                        <span {...provided.dragHandleProps}>
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div>
                        <p className="m-0">
                          {index + 1} - {name}
                        </p>
                      </div>
                      <div>
                        <span {...provided.dragHandleProps}>
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            );
          })}
        </div>
      )}
    </Droppable>
    </DragDropContext>
  `

  const cssCode = `
  .example-one-list {
    padding: 20px;
    width: 250px;
    margin-bottom: 10px;
    border: 3px solid $main;
  }
  `

  return (
    <>
    {!props.showCodeOne ? (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="m-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {user.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        className="example-one-list  display-flex "
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        id={'drag' + id}
                      >
                        <div
                          className="example-one-list-view"
                          // style={{
                          //   width: '100%',
                          //   display: 'flex',
                          //   justifyContent: 'space-between',
                          //   alignItems: 'center',
                          // }}
                        >
                          <div>
                            <span {...provided.dragHandleProps}>
                              <i className="fa fa-bars" aria-hidden="true"></i>
                            </span>
                          </div>
                          <div>
                            <p className="m-0">
                              {index + 1} - {name}
                            </p>
                          </div>
                          <div>
                            <span {...provided.dragHandleProps}>
                              <i className="fa fa-bars" aria-hidden="true"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode} />
    )}
  </>
  );
}

export default DragExampleOne;
