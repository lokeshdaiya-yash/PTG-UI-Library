/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @model MenuItem
 * @description This model for MenuItem
 **/

export class MenuItem {
  label!: string;
  path?: string;
  icon?: string;
  disabled?: boolean;
  pages?: ChildItem[];
}

/**********************************/

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @model ChildItem
 * @description This model for ChildItem
 **/

export interface ChildItem {
  path?: string;
  label?: string;
  id?: string;
  purchase?: boolean;
  refi?: boolean;
  cdf?: boolean;
  hud?: boolean;
  cashSale?: boolean;
  disabled?: boolean;
}
