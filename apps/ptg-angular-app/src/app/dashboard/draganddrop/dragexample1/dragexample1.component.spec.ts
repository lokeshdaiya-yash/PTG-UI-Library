import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Dragexample1Component } from './dragexample1.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { demoData, TreeNode, DropInfo } from "../../../mock/data";
import { DOCUMENT } from "@angular/common";




describe('Dragexample1Component', () => {
  let component: Dragexample1Component;
  let fixture: ComponentFixture<Dragexample1Component>;
  let Document=DOCUMENT;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dragexample1Component ],
      imports:[DragDropModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample1Component);
    component = fixture.componentInstance;
    let nodes = demoData;
    let document: Document;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('dragMoved event', () => {

    let event: any = {}
    event.pointerPosition = {
              x:20,
              y:70
            }
 Object.defineProperty(global.document, 'elementFromPoint', { value: jest.fn() });
    const dragMoved = jest.spyOn(component, 'dragMoved');
    
    fixture.detectChanges();
    component.showDragInfo = jest.fn();
    component.clearDragInfo= jest.fn();
    
    jest.spyOn(global.document, 'elementFromPoint').mockImplementation();
    fixture.detectChanges();
    global.document.elementFromPoint(20,70); 
    component.dragMoved(event); 
    component.clearDragInfo();
    component.showDragInfo();
    expect(dragMoved).toHaveBeenCalled();
    expect(component.clearDragInfo).toHaveBeenCalled();
    expect(component.showDragInfo).toHaveBeenCalled();
    expect(global.document.elementFromPoint).toHaveBeenCalledTimes(1);
  });


 
  it('drop event is called with dropActionTodo value as after', () => {
    let nodes = { item: {data: '1'}, previousContainer: {id:'1'}};
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId').mockImplementation(() => 1);
    component.clearDragInfo = jest.fn();
    component.dropActionTodo = {action: 'after'};
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
    component.dropActionTodo = {action: 'before'};
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
    component.dropActionTodo = {action: 'inside',targetId:1};
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
  
    let id = 1;
    component.nodeLookup = [{children: []},{children: []}];
    const drop = jest.spyOn(component, 'drop');
    jest.spyOn(component, 'getParentNodeId');
    component.getParentNodeId('item-1',nodes,'1');
    expect(component.getParentNodeId).toHaveBeenCalled();
    
  });

  it('showDragInfo event',()=>{
    component.dropActionTodo = {action: 'after',targetId:1};
    const spy = jest.spyOn(document, 'getElementById');
    
    //expect(spy).toHaveBeenCalled();

    const showDragInfo = jest.spyOn(component, 'showDragInfo');
    const clearDragInfo = jest.spyOn(component, 'clearDragInfo');
    component.clearDragInfo();
    component.showDragInfo();
    component.dropActionTodo = true;
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
    component.clearDragInfo(true);
    expect(drop).toHaveBeenCalled();
  })

  it('prepareDragDrop event is called', () => {
    component.nodes = [
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
    ];
    component.dropTargetIds=[];
    component.nodeLookup = [{children: []},{children: []}];
    const prepareDragDrop = jest.spyOn(component, 'prepareDragDrop');
    component.prepareDragDrop(component.nodes);
    expect(component.prepareDragDrop).toHaveBeenCalled();
  });

  it('drop retun condition', () =>{
    let evt:any
    let dropBtn = jest.spyOn(component, 'drop');
    component.drop(evt)
    component.dropActionTodo = false
    expect(dropBtn).toHaveBeenCalled();
  })
});
