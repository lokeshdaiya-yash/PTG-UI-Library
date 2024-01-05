/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Drag and Drop example using react-dnd-treeview library
 */

import { useEffect, useState } from 'react';
import { Tree } from '@minoru/react-dnd-treeview';
import { PtguseFetch } from '@ptg-ui/libs/ptg-ui-react-lib/src';



export interface DragExampleFourProps {}

function DragExampleFour(props : DragExampleFourProps) {
  
  const [dataList, setDataList] = useState<any[]>([]);
  
  const { data:apiData } = PtguseFetch('drag-drop-lists') as any

  useEffect(() => {
    if (apiData[0]) {
    setDataList(apiData[0]?.attributes?.dragdrop)
    }
  },[apiData])
  
  const handleDrop = (newTreeData: any) => setDataList(newTreeData);

  const checkChildExists = (id:any)=>{
    let arr = dataList?.filter((item,index)=>{
      return id === item.parent;
    });
    return arr?.length> 0 ? true : false;
  } 

  return (
    <div className="mt-3 tree-view">
      <Tree
        tree={dataList}
        rootId={0}
        onDrop={handleDrop}
        render={(node, { depth, isOpen, onToggle }) => (
          <div className="droppable">
            {node.droppable && (
              <span onClick={onToggle}>
                <span onClick={onToggle}>{isOpen ? <i className="fa fa-minus" aria-hidden="true"></i> : (checkChildExists(node.id)? <i className="fa fa-plus" aria-hidden="true"></i>:null)}</span>
              </span>
            )}
            {node.text}
          </div>
        )}
      />
    </div>
  );
}

export default DragExampleFour;
