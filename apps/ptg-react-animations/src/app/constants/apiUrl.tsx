/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Constant file only for api urls
 *
*/

import { environment } from "../../environments/environment";
export const LOGIN_API:string = `${environment.baseUrl}auth/login`;
export const SIGNUP_API:string = `${environment.baseUrl}auth/signup`;
export const FORGOT_API:string = `${environment.baseUrl}user/forgetPassword`;
export const RESET_API:string = `${environment.baseUrl}user/updatePassword`;
export const GET_USER_DATA:string = `${environment.baseUrl}user/userData`;
