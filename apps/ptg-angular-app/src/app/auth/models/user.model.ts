/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @model User
 * @description This model for user
**/

export class User{
    id?: number;
    username?: string;
    DOB?: string;
    blocked?: boolean;
    city?: string;
    confirmed?: boolean;
    created_at?: string;
    email?: string;
    gender?: string;
    provider?: string;
    role?: Role;
    description?: string;
    updated_at?: string;
  }
  
  /*******************************/
  
  
  /**
   * @since March 2022
   * @author Bhanu Prakash Sharma
   * @model Role
   * @description This model for Role
  **/
  export class Role{
    id!: number
    name?: string
    description?: string
    type?: string
  }
  