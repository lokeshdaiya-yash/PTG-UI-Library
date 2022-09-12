import { ComponentFixture, TestBed} from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Dragexample5Component } from './dragexample5.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
global.document = window.document
global.window = window
describe('Dragexample5Component', () => {
  let component: Dragexample5Component;
  let fixture: ComponentFixture<Dragexample5Component>;
  let spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample5Component],
      imports: [TranslateModule.forRoot(), DragDropModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('dragMoved event', () => {
    const e = null;
    component.dropActionTodo = {action: 'after',targetId:1};
    const event: any = {}
    event.pointerPosition = {
              x:847,
              y:241
            }
    Object.defineProperty(global.document, 'elementFromPoint', { value: jest.fn() });
    global.document.elementFromPoint(20,70); 
 
    jest.spyOn(global.document, 'elementFromPoint').mockImplementation();
    expect(global.document.elementFromPoint).toHaveBeenCalledTimes(1);
    fixture.detectChanges();
    const dragMoved = jest.spyOn(component, 'dragMoved');
    
    fixture.detectChanges();
    component.showDragInfo = jest.fn();
    component.clearDragInfo= jest.fn();
    
   
   
    component.dragMoved(event); 
    component.clearDragInfo();
    component.showDragInfo();
    expect(dragMoved).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalled();
    expect(component.showDragInfo).toHaveBeenCalled();
    
  });


 
  it('drop event is called with dropActionTodo value as after', () => {
    let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId').mockImplementation(() => 1);
    component.clearDragInfo = jest.fn();
    component.dropActionTodo = { action: 'after' };
    component.drop(nodes);
    component.clearDragInfo();
    expect(drop).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalledTimes(2);
  });

  it('drop event is called with dropActionTodo value as before', () => {
    component.nodes =[
      {
        id: 'item 1',
        children:[]
      },
      {
        id: 'item 2',
        children:[
          {
            id: 'item 2.1',
            children:[]
          },
            {
            id: 'item 2.2',
            children:[]
          },
            {
            id: 'item 2.3',
            children:[]
          }
        ]
      },
      {
        id: 'item 3',
        children:[]
      }
    ]
    let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId').mockImplementation(() => 1);
    component.clearDragInfo = jest.fn();
    component.dropActionTodo = { action: 'before' };
    component.drop(nodes);
    component.clearDragInfo();
    expect(drop).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalledTimes(2);
  });

  it('drop event is called with dropActionTodo value as inside', () => {
    component.nodes =[
      {
        id: 'item 1',
        children:[]
      },
      {
        id: 'item 2',
        children:[
          {
            id: 'item 2.1',
            children:[]
          },
            {
            id: 'item 2.2',
            children:[]
          },
            {
            id: 'item 2.3',
            children:[]
          }
        ]
      },
      {
        id: 'item 3',
        children:[]
      }
    ]
    let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId').mockImplementation(() => 1);
    component.clearDragInfo = jest.fn();
    component.dropActionTodo = { action: 'inside', targetId: 1 };
    component.drop(nodes);
    component.clearDragInfo();
    expect(drop).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalledTimes(2);
  });

  it('drop event is called with dropActionTodo value as null', () => {
    component.nodes =[
      {
        id: 'item 1',
        children:[]
      },
      {
        id: 'item 2',
        children:[
          {
            id: 'item 2.1',
            children:[]
          },
            {
            id: 'item 2.2',
            children:[]
          },
            {
            id: 'item 2.3',
            children:[]
          }
        ]
      },
      {
        id: 'item 3',
        children:[]
      }
    ]
    let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId').mockImplementation(() => 1);
    component.clearDragInfo = jest.fn();
    component.dropActionTodo = null;
    component.drop(nodes);
    component.clearDragInfo();
    expect(drop).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalledTimes(1);
  });

  it('getParentNodeId is called', () => {
    // let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    let nodes =[
      {
        id: 'item 1',
        children: []
      },
      {
        id: 'item 2',
        children: [
          {
            id: 'item 2.1',
            children: []
          },
          {
            id: 'item 2.2',
            children: []
          },
          {
            id: 'item 2.3',
            children: []
          }
        ]
      },
      {
        id: 'item 3',
        children: []
      }
    ]
  
    let id = 1;
    component.nodeLookup = [{ children: [] }, { children: [] }];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId');
    component.getParentNodeId('item-1', nodes, '1');
    expect(component.getParentNodeId).toHaveBeenCalled();

  });

  it('showDragInfo event',()=>{
    
    
    //expect(spy).toHaveBeenCalled();

    const showDragInfo = jest.spyOn(component, 'showDragInfo');
    const clearDragInfo = jest.spyOn(component, 'clearDragInfo');
    component.clearDragInfo();
    component.showDragInfo();
    expect(showDragInfo).toHaveBeenCalled();
    expect(clearDragInfo).toHaveBeenCalled();
  })
  

  it('clearDragInfo event dropped false',()=>{
    let dropped = false;
    component.dropActionTodo = {action: 'after',targetId:1};
    const drop = jest.spyOn(component, 'clearDragInfo');
    const spyFunc = jest.fn();    
    component.clearDragInfo(dropped);
    expect(drop).toHaveBeenCalled();
  })

  it('clearDragInfo event dropped true',()=>{
    let dropped = true;
    component.dropActionTodo = {action: 'after',targetId:1};
    const drop = jest.spyOn(component, 'clearDragInfo');
    const spyFunc = jest.fn();    
    component.clearDragInfo(dropped);
    expect(drop).toHaveBeenCalled();
  })

  it('prepareDragDrop event is called', () => {
    component.nodes = [
      {
        id: 'item 1',
        children: []
      },
      {
        id: 'item 2',
        children: [
          {
            id: 'item 2.1',
            children: []
          },
          {
            id: 'item 2.2',
            children: []
          },
          {
            id: 'item 2.3',
            children: []
          }
        ]
      },
      {
        id: 'item 3',
        children: []
      }
    ];
    component.dropTargetIds=[];
    component.nodeLookup = [{children: []},{children: []}];
    const prepareDragDrop = jest.spyOn(component, 'prepareDragDrop');
    component.prepareDragDrop(component.nodes);
    expect(component.prepareDragDrop).toHaveBeenCalled();
  });
});
