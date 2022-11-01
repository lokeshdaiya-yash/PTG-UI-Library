/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */

import { useCallback, useState,useLayoutEffect } from "react";
import CheckboxList from "../CheckboxList/CheckboxList";
import { updateItemStates } from "./updateItemStates";

export enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

export type ItemState = {
  id?: number;
  state?: CheckboxState;
};

export interface PtgUiIndeterminateCheckboxProps {
  items:any;
}

export function PtgUiIndeterminateCheckbox({items}: PtgUiIndeterminateCheckboxProps){
  const defaultItemStates: ItemState[] = items.map((i:any) => ({
    id: i.id,
    state: CheckboxState.UNCHECKED,
  }));
  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  const getStateForId = useCallback(
    (id: number) => {
      const tempItem:any= itemStates.find((i:any) => i.id === id);
      return tempItem.state;
    },
    [itemStates]
  );
  const clickHandler = useCallback((id: any) => {
    //console.log('itemStates:',itemStates);
    setItemStates(updateItemStates(itemStates, items, id))
  
  }, [itemStates]);

  useLayoutEffect(()=>{

    console.log('itemStates:',itemStates);
  },[itemStates]);

  return <CheckboxList items={items} onClick={clickHandler} getStateForId={getStateForId} />;
};

export default PtgUiIndeterminateCheckbox;
