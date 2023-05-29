/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @model token response
 * @description This model for token response
**/

import { User } from "./user.model";

export class TokenRes{
  jwt?: string;
  user?: User;
}

/*******************************/


