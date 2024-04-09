/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Select Component, we are using multiselect-react-dropdown package to achive the functionality.
 *https://www.npmjs.com/package/multiselect-react-dropdown
*/
import './multi-select.scss';
import Multiselect from 'multiselect-react-dropdown';

export interface PtgUiMultiSelectProps {
  name?: string,
  selectedValues?: any,
  id?: string,
  className?:string,
  list: { value: any, label: any }[],
  showCheckbox?: boolean,
  singleSelect?: boolean,
  onSelect?:any,
  placeholder?:string,
  onRemove?:any
}

export function PtgUiMultiSelectbox({id,className,selectedValues,list,showCheckbox,singleSelect,onSelect,placeholder, onRemove}: PtgUiMultiSelectProps) {
  return (
    <Multiselect
    customCloseIcon={singleSelect}
    options={list}
    displayValue="label"
    id={id}
    className={className}
    showCheckbox={showCheckbox}
    singleSelect={singleSelect}
    onSelect={onSelect}
    placeholder={placeholder}
    selectedValues={selectedValues}
    onRemove={onRemove}
    avoidHighlightFirstOption={true}
  />
  );
}

export default PtgUiMultiSelectbox;
